"use client";

import { useState } from "react";
import { useVideoOverlay } from "@/components/layout/VideoOverlayContext";
import Image from "next/image";
import { Play } from "lucide-react";
import styles from "./VideoPanfleto.module.css";
import VideoApresent from "../VideoPresentation/VideoApresent";

const DEFAULT_VIDEO_PANFLETO = {
  video: "/video.mp4",
  title: "Deus e fiel o tempo todo",
  subtitle: "Este video podera muda sua vida para sempre!",
  image: "/logo2.png",
};

const VideoPanfleto = ({
  title = DEFAULT_VIDEO_PANFLETO.title,
  subtitle = DEFAULT_VIDEO_PANFLETO.subtitle,
  image = DEFAULT_VIDEO_PANFLETO.image,
}) => {
  const [assistindo, setAssistindo] = useState(false);
  const { setVideoOverlay } = useVideoOverlay();

  return (
    <>
      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.headerRow}>
              <div className={styles.textWrap}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
              </div>
              <Image
                src={image}
                alt="Logo da igreja"
                width={96}
                height={96}
                className={styles.logo}
              />
            </div>
            <button
              className={styles.playButton}
              aria-label="Reproduzir video"
              onClick={() => {
                setAssistindo(true);
                setVideoOverlay(true);
              }}
            > 
              <Play className={styles.playIcon} />
              <span className={styles.playLabel}>Assista o vídeo</span>
            </button>
          </div>
        </div>
      </section>

      {assistindo && (
        <VideoApresent
          video={DEFAULT_VIDEO_PANFLETO.video}
          ingaje={false}
          autoplay={true}
          playback={true}
          home={true}
          onFim={() => {
            setAssistindo(false);
            setVideoOverlay(false);
          }}
        />
      )}
    </>
  );
};

export default VideoPanfleto;
