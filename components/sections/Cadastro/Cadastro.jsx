import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import styles from "./Cadastro.module.css";

export default function Cadastro() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <Link href="/login" className={styles.backButton} aria-label="Voltar para login">
          <IoArrowBack size={22} aria-hidden="true" />
        </Link>

        <div className={styles.logoWrap}>
          <Image
            src="/logo2.png"
            alt="Cignifi"
            width={140}
            height={48}
            className={styles.logo}
            priority
          />
        </div>

        <h1 className={styles.title}>Crie sua conta</h1>

        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="nome"
            placeholder="Nome"
            autoComplete="given-name"
          />
          <input
            className={styles.input}
            type="text"
            name="sobrenome"
            placeholder="Sobrenome"
            autoComplete="family-name"
          />
          <input
            className={styles.input}
            type="tel"
            name="telefone"
            placeholder="Telefone"
            autoComplete="tel"
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Senha"
            autoComplete="new-password"
          />
          <input
            className={styles.input}
            type="password"
            name="confirm-password"
            placeholder="Confirmar senha"
            autoComplete="new-password"
          />

          <label className={styles.legalCheckbox}>
            <input
              type="checkbox"
              name="acceptTerms"
              required
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

          <p className={styles.legalText}>
            Ao se cadastrar, você concorda com os nossos{" "}
            <Link href="/termos" className={styles.legalLink}>
              Termos de Uso
            </Link>{" "}
            e com a nossa{" "}
            <Link href="/privacidade" className={styles.legalLink}>
              Política de Privacidade
            </Link>
            .
          </p>

          <button type="submit" className={styles.primaryButton}>
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}