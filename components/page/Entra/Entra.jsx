"use client";

import Link from "next/link";
import { useState } from "react";
import Retroced from "@/components/layout/Retroced";
import Form from "@/components/form/Form";
import styles from "./Entra.module.css";

export default function Entra({ onSubmitLogin }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmitForm(values) {
    if (isSubmitting) return;
    setErrorMessage("");

    const payload = {
      email: String(values?.email ?? "").trim(),
      password: String(values?.password ?? ""),
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

        <Form
          campo={[
            {
              name: "email",
              placeholder: "E-mail",
              type: "email",
              autoComplete: "email",
            },
            {
              name: "password",
              placeholder: "Senha",
              type: "password",
              autoComplete: "current-password",
            },
          ]}
          buttonText={isSubmitting ? "Entrando..." : "Entrar"}
          onPrimaryAction={handleSubmitForm}
        />

        {errorMessage ? <p className={styles.errorText}>{errorMessage}</p> : null}

        <p className={styles.accountText}>
          Esqueceu{" "}
          <Link href="/login" className={styles.accountLink}>
            Esqueci minha senha
          </Link>
        </p>
      </div>
    </section>
  );
}
