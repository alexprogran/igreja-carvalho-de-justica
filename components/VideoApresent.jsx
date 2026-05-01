"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VideoApresent.module.css";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5v14l11-7z" fill="currentColor" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" />
  </svg>
);

const LikeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M9 11V6.7c0-.86.3-1.7.86-2.36L10.5 3l.94.94c.36.36.56.84.56 1.35V11h5.77c.8 0 1.48.6 1.58 1.4.04.27.01.54-.07.79l-1.33 4.66a2 2 0 0 1-1.92 1.45H9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M4 11h3v8H4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H11l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M8 8.5h8M8 11.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M9 7.5v-2A1.5 1.5 0 0 1 10.5 4h9A1.5 1.5 0 0 1 21 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 10 3 21m0 0h6.5M3 21v-6.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ViewIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 5c-5 0-9.5 4.5-10.5 7 1 2.5 5.5 7 10.5 7s9.5-4.5 10.5-7C21.5 9.5 17 5 12 5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
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
  const [videoIniciado, setVideoIniciado] = useState(false);
  const [mostrarBotaoSuave, setMostrarBotaoSuave] = useState(false);
  const videoRef = useRef(null);
  const timeoutBotaoSuaveRef = useRef(null);
  const capaVideo = capa || poster || DEFAULT_VIDEO_APRESENT.capa;

  useEffect(() => {
    return () => {
      if (timeoutBotaoSuaveRef.current) {
        clearTimeout(timeoutBotaoSuaveRef.current);
      }
    };
  }, []);

  const mostrarBotaoComSuavidade = () => {
    if (timeoutBotaoSuaveRef.current) {
      clearTimeout(timeoutBotaoSuaveRef.current);
    }

    setMostrarBotaoSuave(true);

    timeoutBotaoSuaveRef.current = setTimeout(() => {
      setMostrarBotaoSuave(false);
    }, 760);
  };

  const alternarPausa = () => {
    const videoEl = videoRef.current;

    if (!videoEl) {
      return;
    }

    if (videoEl.paused) {
      const jaIniciado = videoIniciado;

      videoEl.play();
      setPausado(false);
      setVideoIniciado(true);

      if (jaIniciado) {
        mostrarBotaoComSuavidade();
      }

      return;
    }

    videoEl.pause();
    setPausado(true);
    setVideoIniciado(true);
  };

  const ativarAudioNoPlay = () => {
    const videoEl = videoRef.current;

    if (!videoEl) {
      return;
    }

    videoEl.muted = false;
    videoEl.defaultMuted = false;
    videoEl.volume = 1;
    setPausado(false);
    setVideoIniciado(true);
  };

  const pausarAoClicarNaTela = () => {
    const videoEl = videoRef.current;

    if (!videoEl || videoEl.paused) {
      return;
    }

    videoEl.pause();
    setVideoIniciado(true);
  };

  if (!visivel) {
    return null;
  }

  return (
    <section className={`${styles.section} ${saindo ? styles.saindo : ""}`}>
      <div className={styles.card}>
        <div className={styles.videoWrapper}>
          {(!videoIniciado || pausado || mostrarBotaoSuave) && (
            <button
              type="button"
              className={`${styles.playCenter} ${mostrarBotaoSuave && !pausado ? styles.playCenterSuave : ""}`}
              onClick={alternarPausa}
              aria-label={!videoIniciado ? "Reproduzir vídeo" : pausado ? "Retomar vídeo" : "Pausar vídeo"}
            >
              {!videoIniciado || mostrarBotaoSuave ? <PlayIcon /> : <PauseIcon />}
            </button>
          )}

          <video
            ref={videoRef}
            className={styles.video}
            muted={false}
            playsInline
            preload="metadata"
            poster={capaVideo}
            onClick={pausarAoClicarNaTela}
            onPlay={ativarAudioNoPlay}
            onPause={() => {
              setPausado(true);
              setVideoIniciado(true);
            }}
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
              <span className={styles.actionLabel}>17K</span>
            </button>

            <button type="button" className={styles.actionButton} aria-label="Comentários">
              <span className={styles.actionIcon}>
                <CommentIcon />
              </span>
              <span className={styles.actionLabel}>865</span>
            </button>

            <button type="button" className={styles.actionButton} aria-label="Compartilhar">
              <span className={styles.actionIcon}>
                <ShareIcon />
              </span>
              <span className={styles.actionLabel}>Compartilhar</span>
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
