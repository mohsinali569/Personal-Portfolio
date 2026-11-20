"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import styles from "./Contact.module.css";

export default function Contact() {
  const [error, setError] = useState("");

  // No backend needed: the form opens the visitor's email app with the message filled in.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let&apos;s work together</h2>

        <div className={styles.grid}>
          <div className={styles.info}>
            <p className={styles.lead}>
              Looking for help with customer support, account management or data reporting?
              Send me a message and I&apos;ll get back to you.
            </p>

            <ul className={styles.list}>
              <li>
                <span aria-hidden="true">✉️</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              {profile.phone && (
                <li>
                  <span aria-hidden="true">📞</span>
                  <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                </li>
              )}
              <li>
                <span aria-hidden="true">📍</span>
                {profile.location}
              </li>
              {profile.socials.map((s) => (
                <li key={s.href}>
                  <span aria-hidden="true">🔗</span>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className={styles.field}>
              <span>Name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label className={styles.field}>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className={styles.field}>
              <span>Message</span>
              <textarea name="message" rows={5} required />
            </label>
            {error && (
              <p className={styles.error} role="alert">
                {error}
              </p>
            )}
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
