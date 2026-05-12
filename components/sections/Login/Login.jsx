import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.logoWrap}>
          <Image
            src="/logo.png"
            alt="Fiscal.io"
            width={180}
            height={58}
            className={styles.logo}
            priority
          />
        </div>

        <form className={styles.form}>
          <label className={styles.field}>
            <span>Informe seu e-mail</span>
            <input type="email" name="email" autoComplete="email" />
          </label>

          <label className={styles.field}>
            <span>Digite uma senha</span>
            <input type="password" name="password" autoComplete="new-password" />
          </label>

          <label className={styles.field}>
            <span>Confirme sua senha</span>
            <input
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
            />
          </label>

          <Link href="/cadastro" className={styles.primaryButton}>
            Cadastrar
          </Link>
        </form>

        <p className={styles.divider}>ou</p>

        <button type="button" className={styles.oauthButton}>
          <FcGoogle size={24} aria-hidden="true" />
          Continuar com Google
        </button>       

        <p className={styles.signinText}>Já tem uma conta?</p>

        <button type="button" className={styles.loginButton}>
          Efetuar Login
        </button>
      </div>
    </section>
  );
}