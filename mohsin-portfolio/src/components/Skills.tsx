"use client";

import { useMemo, useState } from "react";
import { skills, type SkillCategory } from "@/data/profile";
import SectionHeader from "./SectionHeader";
import styles from "./Skills.module.css";

type Filter = "All" | SkillCategory;
const FILTERS: Filter[] = ["All", "Industry Knowledge", "Tools & Technologies"];

export default function Skills() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () => (active === "All" ? skills : skills.filter((s) => s.category === active)),
    [active]
  );

  const count = (f: Filter) => (f === "All" ? skills.length : skills.filter((s) => s.category === f).length);

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          index="02"
          label="Skills"
          title={
            <>
              What I do <em className="italic-accent">well.</em>
            </>
          }
        />

        <div className={`${styles.filters} reveal`} role="group" aria-label="Filter skills">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              className={`${styles.filter} ${active === f ? styles.active : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
              <sup className={styles.count}>{count(f)}</sup>
            </button>
          ))}
        </div>

        <ol className={styles.list}>
          {visible.map((skill, i) => (
            <li key={skill.name} className={styles.row}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.name}>{skill.name}</span>
              <span className={styles.meta}>
                <span className={styles.cat}>{skill.category}</span>
                {skill.usedAt && <span className={styles.used}>{skill.usedAt}</span>}
              </span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
