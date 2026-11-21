import { experience } from "@/data/profile";
import { formatDuration } from "@/lib/duration";
import SectionHeader from "./SectionHeader";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          index="03"
          label="Experience"
          title={
            <>
              Where I&apos;ve been <em className="italic-accent">building.</em>
            </>
          }
        />

        <ol className={styles.list}>
          {experience.map((job) => {
            const duration = formatDuration(job.start, job.end);
            const isCurrent = job.end.toLowerCase() === "present";

            return (
              <li key={`${job.company}-${job.start}`} className={`${styles.item} reveal`}>
                <aside className={styles.when}>
                  <p className={styles.dates}>
                    {job.start} — {job.end}
                  </p>
                  {duration && <p className={styles.duration}>{duration}</p>}
                  {isCurrent && (
                    <span className={styles.current}>
                      <span className={styles.dot} aria-hidden="true" /> Current role
                    </span>
                  )}
                </aside>

                <article className={styles.body}>
                  <h3 className={styles.role}>{job.role}</h3>
                  <p className={styles.company}>
                    {job.company}
                    <span className={styles.sep}>/</span>
                    {job.employmentType}
                    <span className={styles.sep}>/</span>
                    {job.location} · {job.workMode}
                  </p>

                  <p className={styles.summary}>{job.summary}</p>

                  <ul className={styles.highlights}>
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  <ul className={styles.tags} aria-label="Skills used">
                    {job.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
