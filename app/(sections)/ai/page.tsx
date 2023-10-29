'use client';

import Section from "@/_components/section";
import { useChat } from "ai/react";
import styles from "@styles/ai.module.scss";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { UseCustomVh } from "@/_hooks";

export default function Ai() {
  
  const initialMessage = [
    {
      id: "1",
      role: "system",
      content:
        "Hello! I am an AI programmed to answer questions about Jeremy and his projects. Ask away!",
    },
  ];

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: "/api/ai",
      //@ts-ignore
      initialMessages: initialMessage,
    });

  return (
    <Section title="AI">
      <UseCustomVh />
      <div className={styles.layout}>
        <div className={styles.messages}>
          {messages.map((m, i) => (
            <div key={m.id}>
            <div
              className={
                m.role === "user" ? styles.outboundMsg : styles.inboundMsg
              }
              aria-label={m.role === "user" ? "User Message" : "AI Message"}
            >
              <ReactMarkdown remarkPlugins={[remarkMath, rehypeKatex]}>
                {m.content}
              </ReactMarkdown>
            </div>
            {i === 0 && <p className={styles.disclaimer}>I tend to prefer open-ended questions, and am a work in progress. Please refer to Jeremy&apos;s resume for the most accurate information about his skills and qualifications.</p>}
            </div>
          ))}
          {isLoading && <div className={styles.inboundMsg}>Loading...</div>}
          {error && (
            <div className={styles.inboundMsg}>Error: {error.message}</div>
          )}
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="input" aria-label="Ask the AI a question" />
          <input id="input" value={input} onChange={handleInputChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    </Section>
  );
}
