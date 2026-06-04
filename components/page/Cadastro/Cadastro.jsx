"use client";

import { useState } from "react";
import Retroced from "@/components/layout/Retroced";
import Aceit from "@/components/sections/Aceit";
import Form from "@/components/form/Form";
import styles from "./Cadastro.module.css";
import LegalSection from "@/components/sections/LegalSection";

export default function Cadastro() {
  const [showAceit, setShowAceit] = useState(false);

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <Retroced title="Criar Conta" />

        <Form
          campo={[
            {
              name: "nome",
              placeholder: "Nome",
              type: "text",
              autoComplete: "given-name",
            },
            {
              name: "sobrenome",
              placeholder: "Sobrenome",
              type: "text",
              autoComplete: "family-name",
            },
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
              autoComplete: "new-password",
            }
           
          ]}
          buttonText="Criar Conta"
          onPrimaryAction={() => setShowAceit(true)}
        />
        <LegalSection introText="Ao criar uma conta" />

        {showAceit ? (
          <Aceit
            introText="Ao criar uma conta"
            onAccept={() => setShowAceit(false)}
            onReject={() => setShowAceit(false)}
          />
        ) : null}
      </div>
    </section>
  );
}