import Image from "next/image";
import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.badge}>
            <span className={styles.dot} aria-hidden="true" />
            Currently at {profile.company}
          </p>
          <h1 className={styles.title}>
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className={styles.role}>{profile.title}</h2>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.location}>📍 {profile.location}</p>
          <div className={styles.actions}>
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#experience" className="btn btn-outline">
              View experience
            </a>
          </div>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.ring} aria-hidden="true" />
          <Image
            src={profile.photo}
            alt={`Photo of ${profile.name}`}
            width={320}
            height={320}
            priority
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  );
}
