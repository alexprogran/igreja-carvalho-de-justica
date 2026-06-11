"use client";

import { useRouter } from "next/navigation";
import Retroced from "@/components/layout/Retroced";
import styles from "./CriarDevotion.module.css";
import FormPublic from "@/components/form/formPublic/FormPublic";

export default function CriarDevotion() {
  const router = useRouter();

  const handlePublish = () => {
    router.push("/list-devotion");
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <Retroced title="Criar Devocional" />

        <div className={styles.hero}>
          <p className={styles.kicker}>Monte a devocional</p>
          <h2 className={styles.heading}>Iforme os dados abaixo.</h2>
          <p className={styles.description}>
            * Lembrando: o botão &quot;Publicar devocional&quot; só ficará ativo após o preenchimento de todos os campos.
          </p>
        </div>        
        <FormPublic
          campo={[
            { name: "versiculo", label: "Versículo", placeholder: 'Exemplo: &quot;João 3:16&quot;', type: "text" },
            { name: "conteudo",label: "Conteúdo do Versículo", placeholder:'Exemplo: &quot;Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.&quot;', fullscreen: true, type: "textarea", rows: 6 },
            { name: "mensagem", label: "Mensagem", placeholder: 'Exemplo: &quot;O amor de Deus não foi demonstrado apenas por palavras, mas por entrega. João 3:16 revela a maior prova de amor já oferecida à humanidade: Deus entregou Seu próprio Filho para nos dar vida eterna. Essa passagem nos lembra que, mesmo em meio às falhas, medos e dificuldades, existe um amor que permanece constante...&quot;', fullscreen: true, type: "textarea", rows: 6 },
            {name: "data", label: "Data de publicação", placeholder: "Data de publicação", type: "date"},
            { name: "video", label: "Vídeo", placeholder: "Vídeo", type: "video", accept: "video/*" }
          ]}
          buttonText="Publicar devocional"
          onPrimaryAction={handlePublish}
        />
      </div>
     
    </section>
  );
}
