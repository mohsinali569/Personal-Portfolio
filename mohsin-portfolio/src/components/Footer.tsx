import { profile } from "@/data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const [first, ...rest] = profile.name.split(" ");

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.big} aria-hidden="true">
          {first} <em className="italic-accent">{rest.join(" ")}</em>
        </p>
        <div className={styles.bottom}>
          <p>
            © {year} {profile.name}
          </p>
          <a href="#top" className={styles.top}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
