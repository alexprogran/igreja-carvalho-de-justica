"use client";

import { useRef, useState } from "react";
import styles from "./VideoApresent.module.css";

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5v14l11-7z" fill="currentColor" />
  </svg>
);

const VolumeOnIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M5 10v4h4l5 4V6l-5 4H5zm11.5 2a3.5 3.5 0 0 0-1.5-2.88v5.76A3.5 3.5 0 0 0 16.5 12zm0-7.5v2.05A7.5 7.5 0 0 1 16.5 17.45v2.05A9.5 9.5 0 0 0 16.5 4.5z"
      fill="currentColor"
    />
  </svg>
);

const VolumeOffIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 10v4h4l5 4V6l-5 4H5z" fill="currentColor" />
    <path d="m16 9 5 5m0-5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const LikeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 21s-7-4.35-9.5-8.5A5.73 5.73 0 0 1 7.5 4a5.5 5.5 0 0 1 4.5 2.32A5.5 5.5 0 0 1 16.5 4a5.73 5.73 0 0 1 5 8.5C19 16.65 12 21 12 21z"
      fill="currentColor"
    />
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 3c-5.24 0-9.5 3.69-9.5 8.25S6.76 19.5 12 19.5a11.2 11.2 0 0 0 3.72-.63L21.5 21l-1.77-4.12A7.73 7.73 0 0 0 21.5 11.25C21.5 6.69 17.24 3 12 3z"
      fill="currentColor"
    />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 12h9.17l-3.58 3.59L13 17l6-6-6-6-1.41 1.41L15.17 10H6z" fill="currentColor" />
  </svg>
);

const ViewIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 5c-5.5 0-9.5 4.5-10.5 7 1 2.5 5 7 10.5 7s9.5-4.5 10.5-7c-1-2.5-5-7-10.5-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
      fill="currentColor"
    />
  </svg>
);

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
  const [pausado, setPausado] = useState(true);
  const [semAudio, setSemAudio] = useState(false);
  const videoRef = useRef(null);
  const capaVideo = capa || poster || DEFAULT_VIDEO_APRESENT.capa;

  const alternarPausa = () => {
    const videoEl = videoRef.current;

    if (!videoEl) {
      return;
    }

    if (videoEl.paused) {
      videoEl.play();
      setPausado(false);
      return;
    }

    videoEl.pause();
    setPausado(true);
  };

  const alternarAudio = () => {
    const videoEl = videoRef.current;

    if (!videoEl) {
      return;
    }

    const proximoSemAudio = !videoEl.muted;
    videoEl.muted = proximoSemAudio;
    videoEl.defaultMuted = proximoSemAudio;
    setSemAudio(proximoSemAudio);
  };

  const ativarAudioNoPlay = () => {
    const videoEl = videoRef.current;

    if (!videoEl) {
      return;
    }

    videoEl.muted = false;
    videoEl.defaultMuted = false;
    videoEl.volume = 1;
    setSemAudio(false);
    setPausado(false);
  };

  const reproduzirAoClicarNaImagem = () => {
    const videoEl = videoRef.current;

    if (!videoEl || !videoEl.paused) {
      return;
    }

    videoEl.play();
  };

  if (!visivel) {
    return null;
  }

  return (
    <section className={`${styles.section} ${saindo ? styles.saindo : ""}`}>
      <div className={styles.card}>
        <div className={styles.videoWrapper}>
          <div className={styles.topControls}>
            <button
              type="button"
              className={styles.iconButton}
              onClick={alternarPausa}
              aria-label={pausado ? "Retomar vídeo" : "Pausar vídeo"}
            >
              {pausado ? <PlayIcon /> : <PauseIcon />}
            </button>

            <button
              type="button"
              className={styles.iconButton}
              onClick={alternarAudio}
              aria-label={semAudio ? "Ativar áudio" : "Silenciar áudio"}
            >
              {semAudio ? <VolumeOffIcon /> : <VolumeOnIcon />}
            </button>
          </div>

          <video
            ref={videoRef}
            className={styles.video}
            muted={false}
            playsInline
            preload="metadata"
            poster={capaVideo}
            onClick={reproduzirAoClicarNaImagem}
            onPlay={ativarAudioNoPlay}
            onPause={() => setPausado(true)}
            onEnded={() => {
              setSaindo(true);
              setTimeout(() => setVisivel(false), 700);
            }}
          >
            <source src={video} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
          </video>

          <aside className={styles.actions} aria-label="Ações do vídeo">
            <button type="button" className={styles.actionButton} aria-label="Curtir">
              <span className={styles.actionIcon}>
                <LikeIcon />
              </span>
              <span className={styles.actionLabel}>63K</span>
            </button>

            <button type="button" className={styles.actionButton} aria-label="Comentários">
              <span className={styles.actionIcon}>
                <CommentIcon />
              </span>
              <span className={styles.actionLabel}>2.568</span>
            </button>

            <button type="button" className={styles.actionButton} aria-label="Compartilhar">
              <span className={styles.actionIcon}>
                <ShareIcon />
              </span>
              <span className={styles.actionLabel}>Share</span>
            </button>

            <button type="button" className={styles.actionButton} aria-label="Visualizações">
              <span className={styles.actionIcon}>
                <ViewIcon />
              </span>
              <span className={styles.actionLabel}>2M</span>
            </button>
          </aside>

          <footer className={styles.meta}>
            {intro ? <p className={styles.label}>{intro}</p> : null}
            <h2 className={styles.tema}>{tema}</h2>
            <p className={styles.dataExib}>{data_exib}</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default VideoApresent;
