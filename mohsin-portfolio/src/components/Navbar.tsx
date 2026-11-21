"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the section currently on screen
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const [first, ...rest] = profile.name.split(" ");

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#top" className={styles.logo} aria-label="Go to top">
          {first}
          <span className="italic-accent"> {rest.join(" ")}</span>
        </a>

        <ul id="nav-links" className={`${styles.links} ${open ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? styles.active : undefined}
                aria-current={active === link.href ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            type="button"
            className={styles.menu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`${styles.bars} ${open ? styles.barsOpen : ""}`} />
          </button>
        </div>
      </nav>
    </header>
  );
}
