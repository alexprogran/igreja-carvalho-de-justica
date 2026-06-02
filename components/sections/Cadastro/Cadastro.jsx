"use client";

import Link from "next/link";
import { useState } from "react";
import { IoArrowBack, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import styles from "./Cadastro.module.css";

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <Link href="/login" className={styles.backButton} aria-label="Voltar para login">
          <IoArrowBack size={22} aria-hidden="true" />
        </Link>

        <h1 className={styles.title}>Criar Conta</h1>

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
            type="email"
            name="email"
            placeholder="E-mail"
            autoComplete="email"
          />

          <div className={styles.passwordWrap}>
            <input
              className={styles.input}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Senha"
              autoComplete="new-password"
            />
            <button
              type="button"
              className={styles.eyeButton}
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? <IoEyeOffOutline size={22} /> : <IoEyeOutline size={22} />}
            </button>
          </div>

          <button type="submit" className={styles.primaryButton}>
            Criar Conta
          </button>

          <p className={styles.accountText}>
            <Link href="/entra/" className={styles.accountLink}>
              Esqueceu a Senha?
            </Link>
          </p>

          <div className={styles.privacySection}>
            <p className={styles.privacyTitle}>Valorizamos sua Privacidade</p>
            <p className={styles.legalText}>
              Ao entrar, você concorda com nossos{" "}
              <Link href="/termos" className={styles.legalLink}>
                Termos
              </Link>{" "}
              e{" "}
              <Link href="/privacidade" className={styles.legalLink}>
                Política de Privacidade
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}