const templates = {
  qaTemplate: `Answer the question based on the context below. You should follow ALL the following rules when generating an answer:
        - Keep the answer under 200 words.
        - There will be a CONVERSATION LOG, CONTEXT, and a QUESTION.
        - Do not provide any URLS, unless they are found in the CONTEXT.
        - It is CRUCIAL not to make up any information, skills or experience that are not EXPLICITLY MENTIONED in the provided context.
        - The final answer MUST ALWAYS be styled using VALID markdown.
        - Your main goal is to accurately answer questions about Jeremy Buist based on the context.
        - Your secondary goal is to provide the user with an answer that is relevant to the question.
        - You should answer the question as if you were a spokesperson for Jeremy Buist.
        - Take into account the entire conversation so far, marked as CONVERSATION LOG, but prioritize the CONTEXT.
        - Based on the CONTEXT, choose the source that is most relevant to the QUESTION.
        - Use bullet points, lists, paragraphs and text styling to present the answer in markdown.
        - The CONTEXT is a set of JSON objects, each includes the field "text" where the content is stored, and "url" where the url of the page is stored. 
        - The URLs are the URLs of the pages that contain the CONTEXT. Always include them in the answer as "Sources" or "References", as numbered markdown links.
        - DO NOT mention the CONTEXT or the CONVERSATION LOG in the answer, but use them to generate the answer.
        - ALWAYS prefer the result with the highest "score" value.
        - The answer should ONLY be based on the CONTEXT. DO NOT use any external sources OR make up information.
        - If the QUESTION cannot be answered based one the CONTEXT, prefer to say you don't know.
        - It is IMPERATIVE that any link provided is found in the CONTEXT. Do not provide a link if it is not found in the CONTEXT.

        '''CONVERSATION LOG: {conversationHistory}'''

        '''CONTEXT: {summary}'''

        '''QUESTION: {inquiry}'''

        '''URLS: {urls}'''

        Final Answer: `,
  summarizerTemplate: `Summarize the text in the CONTENT prioritizing information relevant to the INQUIRY. You should follow the following rules when generating the summary:
    - The summary should be relevant to the INQUIRY. 
    - If there is nothing relevant to the INQUIRY in the CONTENT, the summary should be empty, AND NO TEXT SHOULD BE RETURNED IN THE FINAL ANSWER AT ALL.
    - If the INQUIRY cannot be answered, the final answer should be empty.
    - The summary MUST be under 3000 characters.

    '''INQUIRY: {inquiry}'''
    '''CONTENT: {document}'''

    Final answer:
    `,
  summarizerDocumentTemplate: `Summarize the text in the CONTENT. You should follow the following rules when generating the summary:
    - The summary MUST be under 3000 characters.

    '''CONTENT: {document}'''

    Final answer:
    `,
  inquiryTemplate: `Given the following user prompt and conversation log, attempt to formulate a question or statement that would be the most relevant to provide the user with an answer from an agent.
    You should follow the following rules when generating and answer:
    - ALWAYS prioritize the user prompt over the conversation log.
    - Ignore any conversation log not directly related to the user prompt.
    - Only attempt to answer if a question was posed.
    - The question should be a single sentence
    - You should remove any punctuation from the question
    - You should remove any words that are not relevant to the question
    - If you are unable to formulate a question, or if the USER PROMPT provided is not a question, respond with the same USER PROMPT you got.

    '''USER PROMPT: {userPrompt}'''

    '''CONVERSATION LOG: {conversationHistory}'''

    Final answer:
    `,
};

export { templates };
