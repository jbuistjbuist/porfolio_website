"use client";

import { useState } from "react";
import Section from "@/_components/section";
import { ChangeEvent, FormEvent } from "react";
import styles from "@styles/contact.module.scss";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState(false);
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

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);
    if (!validateData(data)) return;

    const res = await axios.post("/api/contact", data);

    if (res.status === 200) {
      setData({ name: "", email: "", message: "" });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      setError("Something went wrong, please try again later");
    }

    setLoading(false);
  };

  const onChange = (e: ChangeEvent) => {
    e.preventDefault();
    const { id, value } = e.target as HTMLInputElement;
    setData({ ...data, [id]: value });
  };

  return (
    <Section title="Contact">
      <p className={styles.header}>Let&apos;s get in touch!</p>
      <p className={styles.subHeader}>
        Fill out the form below to shoot me a message.
      </p>
      <div className={styles.status}>{error && <p>{error}</p>}</div>
      <form name="contact" onSubmit={onSubmit} className={styles.form}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={onChange} required />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={onChange} required />
        <label htmlFor="message">Message</label>
        <textarea id="message" rows={5} onChange={onChange} />
        <button type="submit">
          {loading ? (
            <span className={styles.spinner}>
              <FaSpinner />
            </span>
          ) : success ? (
            "Message Sent!"
          ) : (
            "Send"
          )}
        </button>
      </form>
    </Section>
  );
}
