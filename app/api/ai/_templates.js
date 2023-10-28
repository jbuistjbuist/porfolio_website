const templates = {
  qaTemplate: `Answer the question based on the context below. You should follow ALL the following rules when generating an answer:
        - Please keep the answer under 200 words.
        - There will be a CONVERSATION LOG, CONTEXT, and a QUESTION.
        - Do not provide any URLS, unless they are found in the CONTEXT. The CONTEXT is information from Jeremy Buist's website, https://jeremybuist.ca.
        - The final answer MUST ALWAYS be styled using VALID markdown.
        - Your main goal is to answer questions about Jeremy Buist, a Full Stack Web Developer.
        - Your secondary goal is to provide the user with an answer that is relevant to the question.
        - Take into account the entire conversation so far, marked as CONVERSATION LOG, but prioritize the CONTEXT.
        - Based on the CONTEXT, choose the source that is most relevant to the QUESTION.
        - Please answer the QUESTION in a way that helps to promote Jeremy Buist's development services.
        - Use bullet points, lists, paragraphs and text styling to present the answer in markdown.
        - The CONTEXT is a set of JSON objects, each includes the field "text" where the content is stored, and "url" where the url of the page is stored. 
        - The URLs are the URLs of the pages that contain the CONTEXT. Always include them in the answer as "Sources" or "References", as numbered markdown links, UNLESS the url is 'INTERNAL'.
        - Do not mention the CONTEXT or the CONVERSATION LOG in the answer, but use them to generate the answer.
        - ALWAYS prefer the result with the highest "score" value.
        - The answer should ONLY be based on the CONTEXT. DO NOT use any external sources OR make up information.
        - It is IMPERATIVE that any link provided is found in the CONTEXT. Prefer not to provide a link if it is not found in the CONTEXT.

        '''CONVERSATION LOG: {conversationHistory}'''

        '''CONTEXT: {summary}'''

        '''QUESTION: {inquiry}'''

        '''URLS: {urls}'''

        Final Answer: `,
  summarizerTemplate: `Shorten the text in the CONTENT, attempting to answer the INQUIRY You should follow the following rules when generating the summary:
    - Any code found in the CONTENT should ALWAYS be preserved in the summary, unchanged.
    - Code will be surrounded by backticks (\`) or triple backticks (\`\`\`).
    - Summary should include code examples that are relevant to the INQUIRY, based on the content. Do not make up any code examples on your own.
    - The summary will answer the INQUIRY. If it cannot be answered, the summary should be empty, AND NO TEXT SHOULD BE RETURNED IN THE FINAL ANSWER AT ALL.
    - If the INQUIRY cannot be answered, the final answer should be empty.
    - The summary should be under 4000 characters.
    - The summary should be at least 2000 characters long, if possible.

    INQUIRY: {inquiry}
    CONTENT: {document}

    Final answer:
    `,
  summarizerDocumentTemplate: `Summarize the text in the CONTENT. You should follow the following rules when generating the summary:
    - Any code found in the CONTENT should ALWAYS be preserved in the summary, unchanged.
    - Code will be surrounded by backticks (\`) or triple backticks (\`\`\`).
    - Summary should include code examples when possible. Do not make up any code examples on your own.
    - The summary should be under 4000 characters.
    - The summary should be at least 1500 characters long, if possible.

    CONTENT: {document}

    Final answer:
    `,
  inquiryTemplate: `Given the following user prompt and conversation log, attempt to formulate a question or statement that would be the most relevant to provide the user with an answer from an agent.
    You should follow the following rules when generating and answer:
    - ALWAYS prioritize the user prompt over the conversation log.
    - Ignore any conversation log that is not directly related to the user prompt.
    - Only attempt to answer if a question was posed.
    - The question should be a single sentence
    - You should remove any punctuation from the question
    - You should remove any words that are not relevant to the question
    - If you are unable to formulate a question, or if the USER PROMPT provided is not a question, respond with the same USER PROMPT you got.

    USER PROMPT: {userPrompt}

    CONVERSATION LOG: {conversationHistory}

    Final answer:
    `,
};

export { templates };
