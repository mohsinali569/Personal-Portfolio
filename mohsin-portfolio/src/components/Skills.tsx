"use client";

import { useMemo, useState } from "react";
import { skills, type SkillCategory } from "@/data/profile";
import styles from "./Skills.module.css";

type Filter = "All" | SkillCategory;

const FILTERS: Filter[] = ["All", "Industry Knowledge", "Tools & Technologies"];

const ICONS: Record<string, string> = {
  "Customer Service Operations": "🎧",
  "Microsoft Excel": "📊",
  "Account Management": "🤝",
  "Data Analysis": "📈",
  "Virtual Assistance": "💻",
  "Customer Service": "💬",
};

export default function Skills() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () => (active === "All" ? skills : skills.filter((s) => s.category === active)),
    [active]
  );

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I bring to the table</h2>

        <div className={styles.filters} role="group" aria-label="Filter skills">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              className={`${styles.filter} ${active === f ? styles.active : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className={styles.grid}>
          {visible.map((skill) => (
            <li key={skill.name} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                {ICONS[skill.name] ?? "⭐"}
              </span>
              <div>
                <h3 className={styles.name}>{skill.name}</h3>
                <p className={styles.category}>{skill.category}</p>
                {skill.usedAt && <p className={styles.usedAt}>{skill.usedAt}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
