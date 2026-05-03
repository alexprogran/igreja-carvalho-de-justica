import Image from "next/image";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import styles from "./DailyDevotion.module.css";
import VideoDevotion from "./VideoDevotion";

const DEFAULT_DEVOTION = {
  background: "/assets/image_devotion.png",
  imageSrc: "/assets/image_devotion.png",
  imageAlt: "Daily Devotion",
  title: "João 3:16",
  text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
  date: "February 5, 2025",
  engagement: {
    likes: "17K",
    comments: "865",
    shares: "2000",
  },
};

const normalizeDevotionFromApi = (apiData = {}) => {
  const apiEngagement = apiData.engagement || {};

  return {
    background: apiData.background || apiData.image || apiData.imageSrc || DEFAULT_DEVOTION.background,
    imageSrc: apiData.imageSrc || apiData.image || apiData.background || DEFAULT_DEVOTION.imageSrc,
    imageAlt: apiData.imageAlt || apiData.alt || DEFAULT_DEVOTION.imageAlt,
    title: apiData.title || DEFAULT_DEVOTION.title,
    text: apiData.text || apiData.description || DEFAULT_DEVOTION.text,
    date: apiData.date || apiData.publishedAt || DEFAULT_DEVOTION.date,
    engagement: {
      likes: apiEngagement.likes || apiData.likes || DEFAULT_DEVOTION.engagement.likes,
      comments: apiEngagement.comments || apiData.comments || DEFAULT_DEVOTION.engagement.comments,
      shares: apiEngagement.shares || apiData.shares || DEFAULT_DEVOTION.engagement.shares,
    },
  };
};

const DailyDevotion = ({
  titleSection = "Reflexao do dia",
  devotion = DEFAULT_DEVOTION,
  apiData,
}) => {
  const mergedDevotion = {
    ...DEFAULT_DEVOTION,
    ...devotion,
    engagement: {
      ...DEFAULT_DEVOTION.engagement,
      ...(devotion?.engagement || {}),
    },
  };

  // Keep this adapter so the component can switch to API payloads without breaking callers.
  const finalDevotion = apiData
    ? normalizeDevotionFromApi(apiData)
    : mergedDevotion;

  const {
    background,
    imageSrc,
    imageAlt,
    title,
    text,
    // date,
    engagement,
  } = finalDevotion;

  const backgroundSrc = background || imageSrc;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>{titleSection}</h3>        
      </div>
      <div className={styles.card}>
        <Image
          src={backgroundSrc}
          alt={imageAlt}
          className={styles.image}
          width={800}
          height={512}
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h4 className={styles.devotionTitle}>{title}</h4>
          <p className={styles.devotionText}>{text}</p>         
           <VideoDevotion />
        </div>
       
        <footer className={styles.actions} aria-label="Engajamento da reflexao">
            
          <button type="button" className={styles.actionButton} aria-label="Curtir">
            <Heart className={styles.actionIcon} />
            <span className={styles.actionLabel}>{engagement.likes}</span>
          </button>

          <button type="button" className={styles.actionButton} aria-label="Compartilhar">
            <Share2 className={styles.actionIcon} />
            <span className={styles.actionLabel}>{engagement.shares}</span>
          </button>

          <button type="button" className={styles.actionButton} aria-label="Comentarios">
            <MessageCircle className={styles.actionIcon} />
            <span className={styles.actionLabel}>{engagement.comments}</span>
          </button>
        </footer>
      </div>
    </section>
  );
};

export default DailyDevotion;
