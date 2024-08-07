import { StreamingTextResponse, LangChainStream } from "ai";
import { Pinecone } from "@pinecone-database/pinecone";
import { LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAI } from "langchain/llms/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { summarizeLongDocument } from "./_summarizer";
import { getMatchesFromEmbeddings } from "./_matches";
import { PromptTemplate } from "langchain/prompts";
import { templates } from "./_templates";

export const runtime = "edge";

let pinecone = null;

const initPineconeClient = async () => {
  pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY || "",
  });
};

const llm = new OpenAI({
  temperature: 0.6,
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  if (!pinecone) {
    await initPineconeClient();
  }

  const { messages } = await req.json();
  const { stream, handlers } = LangChainStream();

  const userPrompt = messages[messages.length - 1].content;
  let conversationHistory = messages.slice(0, -1);
  if (conversationHistory.length > 10) {
    conversationHistory = conversationHistory.slice(-10);
  }

  const inquiryChain = new LLMChain({
    llm,
    prompt: new PromptTemplate({
      template: templates.inquiryTemplate,
      inputVariables: ["userPrompt", "conversationHistory"],
    }),
  });


  const inquiryChainResult = await inquiryChain.call({
    userPrompt,
    conversationHistory,
  });

  const inquiry = inquiryChainResult.text;


  const embedder = new OpenAIEmbeddings({
    modelName: "text-embedding-ada-002",
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const embeddings = await embedder.embedQuery(inquiry);

  const matches = await getMatchesFromEmbeddings(embeddings, pinecone, 2);

  const urls =
    matches &&
    Array.from(
      new Set(
        matches.map((match) => {
          const metadata = match.metadata;
          const { url } = metadata;
          return url;
        })
      )
    );

  const docs =
    matches &&
    Array.from(
      
      matches.reduce((map, match) => {
        const metadata = match.metadata;
        const { text, url } = metadata;
        if (!map.has(url)) {
          map.set(url, text);
        }
        return map;
      }, new Map())
      //@ts-ignore
    ).map(([_, text]) => text); // eslint-disable-line

  const allDocs = docs.join("\n");

  const summary =
    allDocs?.length > 4000 // eslint-disable-line
      ? await summarizeLongDocument({
          // eslint-disable-line
          document: allDocs, // eslint-disable-line
          inquiry,
        })
      : allDocs;

  const promptTemplate = new PromptTemplate({
    template: templates.qaTemplate,
    inputVariables: ["summary", "inquiry", "conversationHistory", "urls"],
  });

  const chat = new ChatOpenAI({
    streaming: true,
    temperature: 0.7,
    modelName: "gpt-3.5-turbo",
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const chain = new LLMChain({
    prompt: promptTemplate,
    llm: chat,
  });

  chain.call(
    {
      summary,
      inquiry,
      conversationHistory,
      urls,
    },
    [handlers]
  );

  return new StreamingTextResponse(stream);
}
