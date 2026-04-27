"use client";

import { useRef, useState } from "react";
import styles from "./VideoApresent.module.css";

const DEFAULT_VIDEO_APRESENT = {
  intro: "",
  tema: "Apresentacao da Semana",
  data_exib: "27 de abril de 2026",
  video: "https://www.w3schools.com/html/mov_bbb.mp4",
  capa: "/assets/hero-service.jpg",
};

const VideoApresent = ({
  intro = DEFAULT_VIDEO_APRESENT.intro,
  tema = DEFAULT_VIDEO_APRESENT.tema,
  data_exib = DEFAULT_VIDEO_APRESENT.data_exib,
  video = DEFAULT_VIDEO_APRESENT.video,
  capa = DEFAULT_VIDEO_APRESENT.capa,
  poster,
}) => {
  const [visivel, setVisivel] = useState(true);
  const [saindo, setSaindo] = useState(false);
  const videoRef = useRef(null);
  const capaVideo = capa || poster || DEFAULT_VIDEO_APRESENT.capa;

  const ativarAudioNoPlay = () => {
    const videoEl = videoRef.current;

    if (!videoEl) {
      return;
    }

    videoEl.muted = false;
    videoEl.defaultMuted = false;
    videoEl.volume = 1;
  };

  if (!visivel) {
    return null;
  }

  return (
    <section className={`${styles.section} ${saindo ? styles.saindo : ""}`}>
      <div className={styles.card}>
        <header className={styles.header}>
          <p className={styles.label}>{intro}</p>
          <h2 className={styles.tema}>{tema}</h2>
          <p className={styles.dataExib}>{data_exib}</p>
        </header>

        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            className={styles.video}
            muted={false}
            playsInline
            controls
            preload="metadata"
            poster={capaVideo}
            onPlay={ativarAudioNoPlay}
            onEnded={() => {
              setSaindo(true);
              setTimeout(() => setVisivel(false), 700);
            }}
          >
            <source src={video} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoApresent;
