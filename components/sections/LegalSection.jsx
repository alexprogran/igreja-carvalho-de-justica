import Link from "next/link";
import styles from "./LegalSecton.module.css";

export default function LegalSection({ introText }) {
  return (
    <div className={styles.legalSection}>
      <p className={styles.legalText}>
        Respeitamos sua Privacidade<br/>
        {introText}, você concorda com os nossos{" "}
        <Link href="/termos" className={styles.legalLink}>
          Termos
        </Link>{" "}
        e com a nossa{" "}
        <Link href="/privacidade" className={styles.legalLink}>
          Política de Privacidade
        </Link>
        .
      </p>
    </div>
  );
}