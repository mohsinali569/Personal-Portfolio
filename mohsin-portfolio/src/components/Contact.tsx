"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import SectionHeader from "./SectionHeader";
import styles from "./Contact.module.css";

export default function Contact() {
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  // No backend needed: opens the visitor's email app with the message filled in.
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
    const subject = encodeURIComponent(`Hello from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          index="04"
          label="Contact"
          title={
            <>
              Let&apos;s <em className="italic-accent">talk.</em>
            </>
          }
        />

        <div className={styles.grid}>
          <div className={`${styles.info} reveal`}>
            <p className={styles.lead}>
              Need dependable support for your customers, accounts or reporting? I&apos;d be glad to hear
              about it.
            </p>

            <button type="button" className={styles.emailBtn} onClick={copyEmail}>
              <span className={styles.emailText}>{profile.email}</span>
              <span className={styles.copy} aria-live="polite">
                {copied ? "Copied ✓" : "Copy"}
              </span>
            </button>

            <ul className={styles.links}>
              {profile.phone && (
                <li>
                  <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                </li>
              )}
              {profile.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
              <li className={styles.plain}>{profile.location}</li>
            </ul>
          </div>

          <form className={`${styles.form} reveal`} onSubmit={handleSubmit} noValidate>
            <div className={styles.row2}>
              <label className={styles.field}>
                <span>Your name</span>
                <input name="name" type="text" autoComplete="name" placeholder="Jane Doe" required />
              </label>
              <label className={styles.field}>
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
              </label>
            </div>
            <label className={styles.field}>
              <span>Message</span>
              <textarea name="message" rows={5} placeholder="Tell me a little about what you need…" required />
            </label>
            {error && (
              <p className={styles.error} role="alert">
                {error}
              </p>
            )}
            <button type="submit" className="btn btn-primary">
              Send message <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
