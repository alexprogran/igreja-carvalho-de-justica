import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import styles from "./Retroced.module.css";

export default function Retroced({ title, href = "/login" }) {
  return (
    <div className={styles.topRow}>
      <Link href={href} className={styles.backButton} aria-label="Voltar para login">
        <IoArrowBack size={18} aria-hidden="true" />
      </Link>

      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}