import { OpenAI } from "langchain/llms/openai";
import { templates } from "./_templates";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";

const llm = new OpenAI({
  temperature: 0.2,
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const { summarizerTemplate, summarizerDocumentTemplate } = templates;

const chunkSubstr = (str, size) => {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
};

const summarize = async ({ document, inquiry }) => {

  const promptTemplate = new PromptTemplate({
    template: inquiry ? summarizerTemplate : summarizerDocumentTemplate,
    inputVariables: inquiry ? ["document", "inquiry"] : ["document"],
  });
  const chain = new LLMChain({
    prompt: promptTemplate,
    llm,
  });

  try {
    const result = await chain.call({
      prompt: promptTemplate,
      document,
      inquiry,
    });

    return result.text;
  } catch (e) {
    console.error(e);
  }
};

const awaitTimeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const summarizeLongDocument = async ({ document, inquiry, onSummaryDone }) => {

  // Chunk document into 4000 character chunks
  const templateLength = inquiry
    ? summarizerTemplate.length
    : summarizerDocumentTemplate.length;
  try {
    if (document.length + templateLength > 4000) {
      const chunks = chunkSubstr(document, 4000 - templateLength - 1);
      let summarizedChunks = [];
      summarizedChunks = await Promise.all(
        chunks.map(async (chunk) => {
          let result;
          if (inquiry) {
            result = await summarize({
              document: chunk,
              inquiry,
              onSummaryDone,
            });
          } else {
            result = await summarize({
              document: chunk,
              onSummaryDone,
            });
          }
          return result;
        })
      );

      const result = summarizedChunks.join("\n");

      return result;
    } else {
      return document;
    }
  } catch (e) {
    throw new Error(e);
  }
};

export { summarizeLongDocument };
