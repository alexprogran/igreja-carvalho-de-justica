import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.logoWrap}>
          <Image
            src="/logo2.png"
            alt="Logo da plataforma"
            width={56}
            height={56}
            className={styles.logo}
            priority
          />
        </div>        

        <p className={styles.accountInfo}>Entre ou crie uma conta</p>

        <div className={styles.socialRow}>
          <button type="button" className={`${styles.socialButton} ${styles.socialButtonGoogle}`} aria-label="Entrar com Google">
            <FcGoogle size={24} className={styles.googleIcon} aria-hidden="true" />
            <span className={styles.socialButtonLabel}>Continuar com o Google</span>
          </button>
          <button type="button" className={styles.socialButton} aria-label="Entrar com Facebook">
            <FaFacebookF size={20} aria-hidden="true" className={styles.facebookIcon} />
            <span className={styles.socialButtonLabel}>Continuar com o Facebook</span>
          </button>
          {/* <button type="button" className={styles.socialButton} aria-label="Entrar com Twitter">
            <FaTwitter size={20} aria-hidden="true" className={styles.twitterIcon} />
            <span className={styles.socialButtonLabel}>Continuar com o Twitter</span>
          </button> */}

          <Link href="/cadastro" className={styles.socialButton} aria-label="Entrar com email">
            <span className={styles.socialButtonLabel}>Continuar com email</span>
          </Link>
        </div>

        <p className={styles.divider}>Tem um conta?</p>
        <Link href="/entra/" className={styles.enterButton} aria-label="Entra">
          Entra
        </Link>

        <div className={styles.legalSection}>
          <p className={styles.legalText}>
            Ao entrar, você concorda com os nossos{" "}
            <Link href="/termos" className={styles.legalLink}>
              Termos de Uso
            </Link>{" "}
            e com a nossa{" "}
            <Link href="/privacidade" className={styles.legalLink}>
              Política de Privacidade
            </Link>
            .
          </p>

          <label className={styles.legalCheckbox}>
            <input
              type="checkbox"
              name="acceptTerms"
              className={styles.checkboxInput}
            />
            <span>
              Li e concordo com os{" "}
              <Link href="/termos" className={styles.legalLink}>
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link href="/privacidade" className={styles.legalLink}>
                Política de Privacidade
              </Link>
            </span>
          </label>
        </div>
      </div>
    </section>
  );
}
