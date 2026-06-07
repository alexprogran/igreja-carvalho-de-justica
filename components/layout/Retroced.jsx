import Link from "next/link";
import styles from "./Retroced.module.css";

export default function Retroced({ title, href = "/login" }) {
  return (
    <div className={styles.topRow}>
      <Link href={href} className={styles.backButton} aria-label="Voltar para login">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </Link>

      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}