import { profile, stats, experience } from "@/data/profile";
import SectionHeader from "./SectionHeader";
import LocalTime from "./LocalTime";
import styles from "./About.module.css";

export default function About() {
  const current = experience.find((e) => e.end.toLowerCase() === "present");

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          index="01"
          label="About"
          title={
            <>
              People first, <em className="italic-accent">data</em> close behind.
            </>
          }
        />

        <div className={styles.bento}>
          <article className={`${styles.tile} ${styles.story} reveal`}>
            {profile.about.map((para, i) => (
              <p key={i} className={i === 0 ? styles.lead : undefined}>
                {para}
              </p>
            ))}
          </article>

          {stats.map((s) => (
            <div key={s.label} className={`${styles.tile} ${styles.stat} reveal`}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}

          {current && (
            <div className={`${styles.tile} ${styles.now} reveal`}>
              <span className={styles.tag}>Now</span>
              <p className={styles.nowRole}>{current.role}</p>
              <p className={styles.nowCompany}>
                {current.company} · {current.workMode}
              </p>
            </div>
          )}

          <div className={`${styles.tile} ${styles.place} reveal`}>
            <span className={styles.tag}>Location</span>
            <p className={styles.nowRole}>{profile.city}</p>
            <p className={styles.nowCompany}>
              <LocalTime timeZone={profile.timeZone} /> · PKT (UTC+5)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
