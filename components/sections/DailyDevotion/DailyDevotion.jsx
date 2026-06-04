"use client";

import { useEffect, useState } from "react";
import { useVideoOverlay } from "@/components/layout/VideoOverlayContext";
import Image from "next/image";
import Ingaje from "@/components/sections/Ingaje/Ingaje";
import styles from "./DailyDevotion.module.css";
import VideoDevotion from "./VideoDevotion";

const DEFAULT_DEVOTION = {
  background: "/background_pan.png",
  // imageSrc: " /images/daily-devotion/daily-devotion-1.png",
  imageAlt: "Daily Devotion",
  versiculo: "João 3:16",
  passagem: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
  mensagem: "O amor de Deus não foi demonstrado apenas por palavras, mas por entrega. João 3:16 revela a maior prova de amor já oferecida à humanidade: Deus entregou Seu próprio Filho para nos dar vida eterna. Essa passagem nos lembra que, mesmo em meio às falhas, medos e dificuldades, existe um amor que permanece constante. Um amor que alcança todos aqueles que decidem crer.Crer em Jesus não significa apenas reconhecer Sua existência, mas confiar n’Ele diariamente, entregar o coração e permitir que Sua presença transforme nossa caminhada.Hoje, lembre-se: você é profundamente amado por Deus. E esse amor continua disponível, trazendo esperança, perdão e uma nova oportunidade de recomeçar.",
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
  devotion = DEFAULT_DEVOTION,
  apiData,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { setVideoOverlay } = useVideoOverlay();

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

  const backgroundSrc = (background || imageSrc || "").trim();
  const hasBackground = backgroundSrc.length > 0;
  const hasMensagem = Boolean(mensagem && mensagem.trim());

  useEffect(() => {
    setVideoOverlay(isExpanded);
    if (!isExpanded) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      setVideoOverlay(false);
    };
  }, [isExpanded, setVideoOverlay]);

  return (
    <section className={`${styles.section} ${isExpanded ? styles.sectionExpanded : ""}`}>
      <div
        className={`${styles.card} ${isExpanded ? styles.cardExpanded : ""}`}
        onClick={hasMensagem && !isExpanded ? () => setIsExpanded(true) : undefined}
        style={hasMensagem && !isExpanded ? { cursor: "pointer" } : {}}
        tabIndex={hasMensagem && !isExpanded ? 0 : undefined}
        onKeyDown={hasMensagem && !isExpanded ? (e) => {
          if (e.key === "Enter" || e.key === " ") setIsExpanded(true);
        } : undefined}
        aria-label={hasMensagem && !isExpanded ? "Expandir para ver mensagem" : undefined}
        role={hasMensagem && !isExpanded ? "button" : undefined}
      >
        {hasBackground ? (
          <Image
            src={backgroundSrc}
            alt={imageAlt}
            className={styles.image}
            width={800}
            height={512}
            sizes="100vw"
          />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}
        <div className={styles.overlay} />
        <div className={styles.content}>
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
          
          <p className={styles.wordOfDay}>Palavra do dia</p>
          <h4 className={styles.devotionTitle}>{versiculo}</h4>
          <div
            className={
              `${styles.devotionText} ${!isExpanded ? styles.passageClamp : ''}`
            }
          >
            {passagem}
          </div>
          {hasMensagem && isExpanded ? (
            <p className={`${styles.devotionText} ${styles.message} ${styles.messageExpanded}`}>
              {mensagem}
            </p>
          ) : null}
          <div className={styles.videoDevotionSpacing}>
            <VideoDevotion />
          </div>
          <div className={`${styles.ingajePosition} ${styles.ingajeSpacing}`}>
            <Ingaje vertical={false} inline={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyDevotion;
