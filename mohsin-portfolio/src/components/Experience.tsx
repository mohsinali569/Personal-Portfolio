import { experience } from "@/data/profile";
import { formatDuration } from "@/lib/duration";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I have worked</h2>

        <ol className={styles.timeline}>
          {experience.map((job) => {
            const duration = formatDuration(job.start, job.end);
            const isCurrent = job.end.toLowerCase() === "present";

            return (
              <li key={`${job.company}-${job.start}`} className={styles.item}>
                <span className={styles.marker} aria-hidden="true" />
                <article className={styles.card}>
                  <header className={styles.head}>
                    <div>
                      <h3 className={styles.role}>{job.role}</h3>
                      <p className={styles.company}>
                        {job.company} · {job.employmentType}
                      </p>
                    </div>
                    {isCurrent && <span className={styles.badge}>Present</span>}
                  </header>

                  <p className={styles.meta}>
                    {job.start} – {job.end}
                    {duration && ` · ${duration}`}
                  </p>
                  <p className={styles.meta}>
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
                      <li key={s} className={styles.tag}>
                        {s}
                      </li>
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
