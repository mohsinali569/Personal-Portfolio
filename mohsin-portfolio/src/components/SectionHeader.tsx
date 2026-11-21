import styles from "./SectionHeader.module.css";

interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
}

export default function SectionHeader({ index, label, title }: Props) {
  return (
    <header className={`${styles.header} reveal`}>
      <p className={styles.eyebrow}>
        <span className={styles.index}>{index}</span>
        <span className={styles.rule} aria-hidden="true" />
        {label}
      </p>
      <h2 className={styles.title}>{title}</h2>
    </header>
  );
}
