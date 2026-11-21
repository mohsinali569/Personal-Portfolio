import Image from "next/image";
import { profile, skills } from "@/data/profile";
import LocalTime from "./LocalTime";
import styles from "./Hero.module.css";

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  // Repeat skills so the marquee loops seamlessly
  const ticker = [...skills, ...skills];

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          {profile.availability && (
            <p className={`${styles.status} reveal`}>
              <span className={styles.pulse} aria-hidden="true" />
              {profile.availability}
            </p>
          )}

          <h1 className={`${styles.title} reveal`}>
            {first}
            <br />
            <em className="italic-accent">{rest.join(" ")}</em>
          </h1>

          <p className={`${styles.role} reveal`}>
            {profile.title} at <strong>{profile.company}</strong>
          </p>

          <p className={`${styles.tagline} reveal`}>{profile.tagline}</p>

          <div className={`${styles.actions} reveal`}>
            <a href="#contact" className="btn btn-primary">
              Start a conversation <span className="arrow">→</span>
            </a>
            <a href="#experience" className="btn btn-ghost">
              See my work
            </a>
          </div>
        </div>

        <figure className={`${styles.card} reveal`}>
          <div className={styles.photoWrap}>
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(max-width: 860px) 80vw, 380px"
              priority
              className={styles.photo}
            />
          </div>
          <figcaption className={styles.caption}>
            <div>
              <span className={styles.capLabel}>Based in</span>
              <span className={styles.capValue}>{profile.city}, PK</span>
            </div>
            <div>
              <span className={styles.capLabel}>Local time</span>
              <LocalTime timeZone={profile.timeZone} className={styles.capValue} />
            </div>
          </figcaption>
        </figure>
      </div>

      <div className={styles.marquee} aria-label="Skills">
        <ul className={styles.track}>
          {ticker.map((s, i) => (
            <li key={`${s.name}-${i}`} aria-hidden={i >= skills.length ? "true" : undefined}>
              {s.name}
              <span className={styles.star} aria-hidden="true">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
