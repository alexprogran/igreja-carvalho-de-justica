"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import styles from "./VideoDevotion.module.css";
import VideoApresent from "../VideoPresentation/VideoApresent";

const DEFAULT_VIDEO_DEVOTION = {
  photo: "/assets/avatar.jpg",  
  title: "O Amor de Deus é Incondicional",
  subtitle: "",
   video: "/video.mp4",
};

const VideoDevotion = ({
  photo = DEFAULT_VIDEO_DEVOTION.photo,
  title = DEFAULT_VIDEO_DEVOTION.title,
  subtitle = DEFAULT_VIDEO_DEVOTION.subtitle,
  video = DEFAULT_VIDEO_DEVOTION.video,
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
              aria-label="Reproduzir vídeo"
              onClick={() => setAssistindo(true)}
            >
              <Play className={styles.playIcon} />
              <span className={styles.playLabel}>Assistir</span>
            </button>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src={photo}
              alt={title}
              className={styles.image}
              width={800}
              height={512}
            />
          </div>
        </div>
      </section>

      {assistindo && (
        <VideoApresent         
          video={video}
          ingaje={false}
          autoplay={true}
          playback={true}
          onFim={() => setAssistindo(false)}        />
      )}
    </>
  );
};

export default VideoDevotion;