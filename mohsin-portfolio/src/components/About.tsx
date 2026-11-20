import { profile, stats } from "@/data/profile";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <p className="section-label">About me</p>
        <h2 className="section-title">Who I am</h2>

        <div className={styles.grid}>
          <div className={styles.text}>
            {profile.about.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          <ul className={styles.stats}>
            {stats.map((s) => (
              <li key={s.label} className={styles.stat}>
                <span className={`gradient-text ${styles.value}`}>{s.value}</span>
                <span className={styles.label}>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
