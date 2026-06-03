"use client";

import Link from "next/link";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from "@/components/layout/Button";
import Retroced from "@/components/layout/Retroced";
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
  const isFormComplete = Object.values(formData).every((value) => value.trim() !== "");

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
        <Retroced title="Entrar" href="/login" />

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

          {isFormComplete ? (
            <Button
              type="submit"
              className={styles.submitButton}
              nome="Cria Conta"
              backend="#000000"
              textColor="#ffffff"
              borderColor="#000000"
              width="100%"
              height="clamp(2.9rem, 6vw, 3.5rem)"
              fontSize="clamp(1.05rem, 4vw, 1.1rem)"
              fontWeight={700}
              disabled={isSubmitting}
            />
          ) : (
            <Button
              type="submit"
              className={styles.submitButton}
              nome="Criar Conta"
              backend="#d3d4d5"
              textColor="#777d81"
              borderColor="#d3d4d5"
              width="100%"
              height="clamp(2.9rem, 6vw, 3.5rem)"
              fontSize="clamp(1.05rem, 4vw, 1.1rem)"
              fontWeight={700}
              disabled
            />
          )}

          <p className={styles.accountText}>
            Não tem uma conta?{" "}
            <Link href="/login" className={styles.accountLink}>
              Criar conta
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
