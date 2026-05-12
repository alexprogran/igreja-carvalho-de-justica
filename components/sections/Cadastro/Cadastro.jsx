import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import styles from "./Cadastro.module.css";

export default function Cadastro() {
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

        <button type="button" className={styles.oauthButton}>
          <FcGoogle size={24} aria-hidden="true" />
          Continuar com Google
        </button>

        <p className={styles.divider}>ou</p>

        <form className={styles.form}>
          <label className={styles.field}>
            <span>Nome</span>
            <input type="text" name="nome" autoComplete="given-name" />
          </label>

          <label className={styles.field}>
            <span>Sobrenome</span>
            <input type="text" name="sobrenome" autoComplete="family-name" />
          </label>

          <label className={styles.field}>
            <span>E-mail</span>
            <input type="email" name="email" autoComplete="email" />
          </label>

          <label className={styles.field}>
            <span>Telefone</span>
            <input type="tel" name="telefone" autoComplete="tel" />
          </label>

          <button type="submit" className={styles.primaryButton}>
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}