"use client";

import { useState } from "react";
import Section from "@/_components/section";
import { ChangeEvent, FormEvent } from "react";
import styles from "@styles/contact.module.scss";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const validateData = (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    if (!data.name) {
      setError("Please enter your name");
      return false;
    }
    if (!data.email) {
      setError("Please enter your email");
      return false;
    }
    if (!data.message) {
      setError("Please enter a message");
      return false;
    }
    return true;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const onChange = (e: ChangeEvent) => {
    e.preventDefault();
    const { id, value } = e.target as HTMLInputElement;
    setData({ ...data, [id]: value });
  };

  return (
    <Section title="Contact">
      <p className={styles.header}>Let's get in touch!</p>
      <p className={styles.subHeader}>
        Fill out the form below to shoot me a message, or you can contact me at{" "}
        <a href="mailto:jeremy.j.buist@gmail.com">jeremy.j.buist@gmail.com</a>.
      </p>
      {!loading && (
        <form name="contact" onSubmit={onSubmit} className={styles.form}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" onChange={onChange} required />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" onChange={onChange} required />
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={5} onChange={onChange} />
          <button type="submit">Send</button>
        </form>
      )}
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </Section>
  );
}
