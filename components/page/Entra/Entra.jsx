"use client";

import Link from "next/link";
import { useState } from "react";
import { IoArrowBack, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import styles from "./Entra.module.css";

const INITIAL_FORM = {
  email: "",
  password: "",
};

export default function Entra({ onSubmitLogin }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");

    const payload = {
      email: formData.email.trim(),
      password: formData.password,
    };

    if (!payload.email || !payload.password) {
      setErrorMessage("Preencha e-mail e senha para continuar.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Hook para futura integracao com API de autenticacao.
      if (typeof onSubmitLogin === "function") {
        await onSubmitLogin(payload);
      }
    } catch (error) {
      setErrorMessage(error?.message || "Nao foi possivel entrar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <header className={styles.header}>
          <Link href="/cadastro" className={styles.backButton} aria-label="Voltar">
            <IoArrowBack size={21} aria-hidden="true" />
          </Link>
          <h1 className={styles.title}>Entrar</h1>
        </header>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            id="entra-email"
            className={styles.input}
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            aria-label="E-mail"
            required
          />

          
          <div className={styles.passwordWrap}>
            <input
              id="entra-password"
              className={styles.input}
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Senha"
              aria-label="Senha"
              required
            />
            <button
              type="button"
              className={styles.eyeButton}
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? <IoEyeOffOutline size={22} /> : <IoEyeOutline size={18} />}
            </button>
          </div>

          {errorMessage ? <p className={styles.errorText}>{errorMessage}</p> : null}

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? "Entrando..." : "Entrar"}
          </button>

          <p className={styles.accountText}>
            Nao tem uma conta?{" "}
            <Link href="/cadastro" className={styles.accountLink}>
              Criar conta
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
