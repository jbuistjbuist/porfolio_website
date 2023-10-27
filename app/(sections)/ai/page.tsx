"use client";
import Section from "@/_components/section";
import { useChat } from "ai/react";
import styles from "@styles/ai.module.scss";

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
      <div className={styles.layout}>
        <div className={styles.messages}>
          {messages.map((m) => (
            <div
              key={m.id}
              className={
                m.role === "user" ? styles.outboundMsg : styles.inboundMsg
              }
              aria-label={m.role === "user" ? "User Message" : "AI Message"}
            >
              {m.content}
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
