"use client";

import Link from "next/link";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from "@/components/layout/Button";
import Retroced from "@/components/layout/Retroced";
import styles from "./Cadastro.module.css";
import LegalSection from "@/components/sections/LegalSection";

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    password: "",
  });

  const isFormComplete = Object.values(formData).every((value) => value.trim() !== "");

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <Retroced title="Criar Conta" />

        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="nome"
            placeholder="Nome"
            autoComplete="given-name"
            value={formData.nome}
            onChange={handleInputChange}
          />
          <input
            className={styles.input}
            type="text"
            name="sobrenome"
            placeholder="Sobrenome"
            autoComplete="family-name"
            value={formData.sobrenome}
            onChange={handleInputChange}
          />

          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="E-mail"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <div className={styles.passwordWrap}>
            <input
              className={styles.input}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Senha"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleInputChange}
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

          {isFormComplete ? (
            <Button
              type="submit"
              className={styles.primaryButton}
              nome="Criar Conta"
              backend="#000000"
              borderColor="#000000"
              width="100%"
              height="clamp(2.9rem, 6vw, 3.5rem)"
              fontSize="clamp(1.05rem, 4vw, 1.1rem)"
              fontWeight={700}
            />
          ) : (
            <button type="submit" className={styles.primaryButton} disabled>
              Criar Conta
            </button>
          )}

          <p className={styles.accountText}>
            <Link href="/entra/" className={styles.accountLink}>
              Esqueceu a Senha?
            </Link>
          </p>         
        </form>
        <LegalSection introText="Ao criar uma conta" />
      </div>
    </section>
  );
}