"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import { Heart, MessageCircle, Share2 } from "lucide-react";
import Ingaje from "@/components/sections/Ingaje/Ingaje";
import styles from "./DailyDevotion.module.css";
import VideoDevotion from "./VideoDevotion";

const DEFAULT_DEVOTION = {
  background: "/background_pan.png",
  imageSrc: "/assets/image_devotion.png",
  imageAlt: "Daily Devotion",
  versiculo: "João 3:16",
  passagem: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
  mensagem: "O deserto, na caminhada espiritual, não é apenas um tempo de dificuldade, mas um período de profunda transformação. É nesse ambiente, muitas vezes marcado pela solidão, silêncio e desafios, que somos levados a depender mais de Deus e a ouvir a Sua voz com maior clareza.\n\nNa Palavra de Deus, vemos que o deserto não é um fim, mas um processo. O povo de Israel passou pelo deserto para aprender a confiar no Senhor:\n*\"Recorde-se de como o Senhor, o seu Deus, o conduziu por todo o caminho no deserto... para humilhá-lo e pô-lo à prova, a fim de conhecer suas intenções\"* — Deuteronômio 8:2.\n\nAssim também acontece conosco. As experiências difíceis nos moldam, quebram o orgulho e fortalecem nossa fé. Em meio à escassez, aprendemos que Deus é suficiente:\n*\"Ele o humilhou, deixando-o passar fome, mas depois o sustentou com o maná... para mostrar-lhe que nem só de pão viverá o homem, mas de toda palavra que procede da boca do Senhor\"* — Deuteronômio 8:3.\n\nO deserto também é lugar de encontro. Deus nos atrai para falar ao nosso coração:\n*\"Portanto, eu a atrairei e a levarei para o deserto, e lhe falarei ao coração\"* — Oséias 2:14.\n\nMesmo quando tudo parece difícil, Deus está presente. Ele sustenta, guia e fortalece:\n*\"Os que esperam no Senhor renovam as suas forças... caminham e não se cansam\"* — Isaías 40:31.\n\nSe você está vivendo um “deserto”, lembre-se: não é abandono, é preparação. Deus está trabalhando em você, formando caráter, fortalecendo sua fé e te conduzindo para algo maior.\n\n**O deserto não é o seu destino final — é o caminho onde Deus se revela.**",
  date: "February 5, 2025",
  engagement: {
    likes: "17K",
    comments: "865",
    shares: "2000",
  },
};

const normalizeDevotionFromApi = (apiData = {}) => {
  // const apiEngagement = apiData.engagement || {};

  return {
    background: apiData.background || apiData.image || apiData.imageSrc || DEFAULT_DEVOTION.background,
    imageSrc: apiData.imageSrc || apiData.image || apiData.background || DEFAULT_DEVOTION.imageSrc,
    imageAlt: apiData.imageAlt || apiData.alt || DEFAULT_DEVOTION.imageAlt,
    versiculo: apiData.versiculo || apiData.title || DEFAULT_DEVOTION.versiculo,
    passagem: apiData.passagem || apiData.text || apiData.description || DEFAULT_DEVOTION.passagem,
    mensagem: apiData.mensagem || apiData.message || DEFAULT_DEVOTION.mensagem,
    date: apiData.date || apiData.publishedAt || DEFAULT_DEVOTION.date,
    // engagement: {
    //   likes: apiEngagement.likes || apiData.likes || DEFAULT_DEVOTION.engagement.likes,
    //   comments: apiEngagement.comments || apiData.comments || DEFAULT_DEVOTION.engagement.comments,
    //   shares: apiEngagement.shares || apiData.shares || DEFAULT_DEVOTION.engagement.shares,
    // },
  };
};

const DailyDevotion = ({
  titleSection = "",
  devotion = DEFAULT_DEVOTION,
  apiData,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const mergedDevotion = {
    ...DEFAULT_DEVOTION,
    ...devotion,
    // engagement: {
    //   ...DEFAULT_DEVOTION.engagement,
    //   ...(devotion?.engagement || {}),
    // },
  };

  // Keep this adapter so the component can switch to API payloads without breaking callers.
  const finalDevotion = apiData
    ? normalizeDevotionFromApi(apiData)
    : mergedDevotion;

  const {
    background,
    imageSrc,
    imageAlt,
    versiculo,
    passagem,
    mensagem,
    // date,
    // engagement,
  } = finalDevotion;

  const backgroundSrc = background || imageSrc;
  const hasMensagem = Boolean(mensagem && mensagem.trim());

  useEffect(() => {
    if (!isExpanded) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  return (
    <section className={`${styles.section} ${isExpanded ? styles.sectionExpanded : ""}`}>
      <div className={`${styles.header} ${isExpanded ? styles.headerHidden : ""}`}>
        <h3 className={styles.title}>{titleSection}</h3>        
      </div>
      <div
        className={`${styles.card} ${isExpanded ? styles.cardExpanded : ""} ${hasMensagem && !isExpanded ? styles.cardHover : ""}`}
        onClick={hasMensagem && !isExpanded ? () => setIsExpanded(true) : undefined}
        style={hasMensagem && !isExpanded ? { cursor: "pointer" } : {}}
        tabIndex={hasMensagem && !isExpanded ? 0 : undefined}
        onKeyDown={hasMensagem && !isExpanded ? (e) => {
          if (e.key === "Enter" || e.key === " ") setIsExpanded(true);
        } : undefined}
        aria-label={hasMensagem && !isExpanded ? "Expandir para ver mensagem" : undefined}
        role={hasMensagem && !isExpanded ? "button" : undefined}
      >
        {isExpanded ? (
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Fechar mensagem"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
          >
            x
          </button>
        ) : null}
        <Image
          src={backgroundSrc}
          alt={imageAlt}
          className={styles.image}
          width={800}
          height={512}
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h4 className={styles.devotionTitle}>{versiculo}</h4>
          <p className={styles.devotionText}>{passagem}</p>
          {hasMensagem && isExpanded ? (
            <p className={`${styles.devotionText} ${styles.message} ${styles.messageExpanded}`}>
              {mensagem}
            </p>
          ) : null}
          <VideoDevotion />
          <div className={styles.ingajePosition}>
            <Ingaje vertical={false} inline={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyDevotion;
