"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VideoApresent.module.css";
import HeaderSection from "../HeaderSection";
import Ingaje from "../Ingaje/Ingaje";

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

const DEFAULT_VIDEO_APRESENT = {
  intro: "",
  tema: "",
  data_exib: "",
  video: "",
  capa: "",
};

const VideoApresent = ({
  intro = DEFAULT_VIDEO_APRESENT.intro,
  tema = DEFAULT_VIDEO_APRESENT.tema,
  data_exib = DEFAULT_VIDEO_APRESENT.data_exib,
  video = DEFAULT_VIDEO_APRESENT.video,
  capa = DEFAULT_VIDEO_APRESENT.capa,
  poster,
  ingaje = true,
  autoplay = false,
  onFim,
  playback = false,
}) => {
  const [visivel, setVisivel] = useState(true);
  const [saindo, setSaindo] = useState(false);
  const [pausado, setPausado] = useState(!autoplay);
  const [videoIniciado, setVideoIniciado] = useState(false);
  const [mostrarBotaoSuave, setMostrarBotaoSuave] = useState(false);
  const [progresso, setProgresso] = useState(0);
  const [duracao, setDuracao] = useState(0);
  const videoRef = useRef(null);
  const timeoutBotaoSuaveRef = useRef(null);
  const capaVideo = capa || poster || DEFAULT_VIDEO_APRESENT.capa;
  const introTexto = (intro || "").trim();
  const temaTexto = (tema || "").trim();
  const dataExibTexto = (data_exib || "").trim();
  const exibirMeta = Boolean(introTexto || temaTexto || dataExibTexto);

  useEffect(() => {
    if (autoplay && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setVideoIniciado(true);
    }
  }, [autoplay]);

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

  const formatarTempo = (segundos) => {
    if (!segundos || isNaN(segundos)) return "0:00";
    const m = Math.floor(segundos / 60);
    const s = Math.floor(segundos % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const aoSeek = (e) => {
    const videoEl = videoRef.current;
    if (!videoEl || !duracao) return;
    const novoTempo = (Number(e.target.value) / 100) * duracao;
    videoEl.currentTime = novoTempo;
    setProgresso(Number(e.target.value));
  };

  if (!visivel) {
    return null;
  }

  return (
    <section className={`${styles.section} ${saindo ? styles.saindo : ""}`}>
      <div className={styles.card}>
        <div className={styles.videoWrapper}>
          {(!playback && (!videoIniciado || pausado || mostrarBotaoSuave)) && (
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
            onLoadedMetadata={(e) => setDuracao(e.target.duration)}
            onTimeUpdate={(e) => {
              const videoEl = e.target;
              if (videoEl.duration) {
                setProgresso((videoEl.currentTime / videoEl.duration) * 100);
              }
            }}
            onEnded={() => {
              setSaindo(true);
              setTimeout(() => {
                setVisivel(false);
                onFim?.();
              }, 700);
            }}
          >
            <source src={video} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
          </video>

          {ingaje ? <Ingaje /> : null}

          {exibirMeta && !videoIniciado ? (
            <footer className={styles.meta}>
              {introTexto ? <p className={styles.label}>{introTexto}</p> : null}
              {temaTexto ? <h2 className={styles.tema}>{temaTexto}</h2> : null}
              {dataExibTexto ? <p className={styles.dataExib}>{dataExibTexto}</p> : null}
            </footer>
          ) : null}

          <div className={styles.headerBottom}>
            {videoIniciado ? <HeaderSection /> : null}
            {playback && (
              <div className={styles.playbackBar}>
                <button
                  type="button"
                  className={styles.playbackPlayBtn}
                  onClick={alternarPausa}
                  aria-label={pausado ? "Reproduzir" : "Pausar"}
                >
                  {pausado ? <PlayIcon /> : <PauseIcon />}
                </button>
                <span className={styles.playbackTempo}>
                  {formatarTempo((progresso / 100) * duracao)}
                </span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={0.1}
                  value={progresso}
                  onChange={aoSeek}
                  className={styles.playbackRange}
                  aria-label="Progresso do vídeo"
                />
                <span className={styles.playbackTempo}>
                  {formatarTempo(duracao)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoApresent;
