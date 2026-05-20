import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
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

        <h1 className={styles.title}>Login</h1>
       

        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            aria-label="Email"
          />

          <input
            className={styles.input}
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Senha"
            aria-label="Senha"
          />

          <button type="submit" className={styles.primaryButton}>
            Entrar
          </button> 
        </form>

        <p className={styles.divider}>- Ou entre com -</p>

        <div className={styles.socialRow}>
          <button type="button" className={styles.socialButton} aria-label="Entrar com Google">
            <FcGoogle size={24} aria-hidden="true" />
          </button>
          <button type="button" className={styles.socialButton} aria-label="Entrar com Facebook">
            <FaFacebookF size={20} aria-hidden="true" className={styles.facebookIcon} />
          </button>
          <button type="button" className={styles.socialButton} aria-label="Entrar com Twitter">
            <FaTwitter size={20} aria-hidden="true" className={styles.twitterIcon} />
          </button>
        </div>

        <p className={styles.signupText}>
          Não tem uma conta?{" "}
          <Link href="/cadastro" className={styles.signupLink}>
            Cadastre-se
          </Link>
        </p>
      </div>
    </section>
  );
}