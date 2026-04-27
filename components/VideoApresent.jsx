"use client";

import { useState } from "react";
import styles from "./VideoApresent.module.css";

const DEFAULT_VIDEO_APRESENT = {
  tema: "Apresentacao da Semana",
  data_exib: "27 de abril de 2026",
  video: "https://www.w3schools.com/html/mov_bbb.mp4",
  capa: "/assets/hero-service.jpg",
};

const VideoApresent = ({
  tema = DEFAULT_VIDEO_APRESENT.tema,
  data_exib = DEFAULT_VIDEO_APRESENT.data_exib,
  video = DEFAULT_VIDEO_APRESENT.video,
  capa = DEFAULT_VIDEO_APRESENT.capa,
  poster,
}) => {
  const [visivel, setVisivel] = useState(true);
  const capaVideo = capa || poster || DEFAULT_VIDEO_APRESENT.capa;

  if (!visivel) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <header className={styles.header}>
          <p className={styles.label}>Video em destaque</p>
          <h2 className={styles.tema}>{tema}</h2>
          <p className={styles.dataExib}>{data_exib}</p>
        </header>

        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            autoPlay
            muted
            playsInline
            controls
            preload="metadata"
            poster={capaVideo}
            onEnded={() => setVisivel(false)}
          >
            <source src={video} type="video/mp4" />
            Seu navegador nao suporta a reproducao de videos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoApresent;
