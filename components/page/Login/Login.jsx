"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Button from "@/components/layout/Button";
import Aceit from "@/components/sections/Aceit";
import LegalSection from "@/components/sections/LegalSection";
import styles from "./Login.module.css";

export default function Login() {
  const [showAceit, setShowAceit] = useState(false);

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
          <Button
            icon={<FcGoogle size={22} className={styles.googleIcon} />}
            nome="Continuar com o Google"
            aria-label="Entrar com Google"
            onClick={() => setShowAceit(true)}
          />
          <button
            type="button"
            className={styles.socialButton}
            aria-label="Entrar com Facebook"
            onClick={() => setShowAceit(true)}
          >
            <FaFacebookF size={20} aria-hidden="true" className={styles.facebookIcon} />
            <span className={styles.socialButtonLabel}>Continuar com o Facebook</span>
          </button>        

          <Link
            href="/cadastro"
            className={styles.socialButton}
            aria-label="Entrar com email"
          >
            <span className={styles.socialButtonLabel}>Continuar com email</span>
          </Link>
        </div>

        <p className={styles.divider}>Já tem uma conta?</p>
        <Link href="/entra/" className={styles.enterButton} aria-label="Entra">
          Entra
        </Link>

        <div className={styles.legalSectionWrap}>
          <LegalSection introText="Ao criar um conta" />
        </div>

        {showAceit ? (
          <Aceit
            introText="Ao criar um conta"
            onAccept={() => setShowAceit(false)}
            onReject={() => setShowAceit(false)}
          />
        ) : null}
      </div>
    </section>
  );
}