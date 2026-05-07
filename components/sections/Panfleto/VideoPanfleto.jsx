"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import styles from "./VideoPanfleto.module.css";
import VideoApresent from "../VideoPresentation/VideoApresent";

const DEFAULT_VIDEO_PANFLETO = {
  video: "/video.mp4",
  title: "Deus e fiel o tempo todo",
  subtitle: "Este video podera muda sua vida para sempre!",
};

const VideoPanfleto = ({
  title = DEFAULT_VIDEO_PANFLETO.title,
  subtitle = DEFAULT_VIDEO_PANFLETO.subtitle,
}) => {
  const [assistindo, setAssistindo] = useState(false);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
            <button
              className={styles.playButton}
              aria-label="Reproduzir video"
              onClick={() => setAssistindo(true)}
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
          onFim={() => setAssistindo(false)}
        />
      )}
    </>
  );
};

export default VideoPanfleto;
