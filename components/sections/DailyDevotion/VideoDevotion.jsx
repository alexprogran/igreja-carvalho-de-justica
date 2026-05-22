"use client";

import { useState } from "react";
import { useContext } from "react";
import { VideoOverlayContext } from "@/components/layout/VideoOverlayContext";
import { useVideoOverlay } from "@/components/layout/VideoOverlayContext";
import Image from "next/image";
import { Play } from "lucide-react";
import styles from "./VideoDevotion.module.css";
import VideoApresent from "../VideoPresentation/VideoApresent";

const DEFAULT_VIDEO_DEVOTION = {
  photo: "/assets/foto_pregador.png",  
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
  const { setVideoOverlay, videoOverlay } = useContext(VideoOverlayContext);

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
              onClick={() => {
                setAssistindo(true);
                setVideoOverlay(true);
              }}
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
          button={true}
          onFim={() => {
            setAssistindo(false);
            // Só libera o BootmNav se o DailyDevotion não estiver expandido
            if (!videoOverlay) setVideoOverlay(false);
          }}
        />
      )}
    </>
  );
};

export default VideoDevotion;