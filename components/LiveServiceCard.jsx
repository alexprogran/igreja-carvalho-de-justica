import { Play, Share2, Heart, MessageCircle } from "lucide-react";
import styles from "./LiveSectionCard.module.css";

const LiveServiceCard = ({
  title = "THE YEAR OF THE CHURCH",
  text = "First Service · Sun Feb 9 2025",
}) => {
  const heroImg = "/assets/hero-service.jpg";

  return (
    <div className={styles.card}>
      <img
        src={heroImg}
        alt="Live Service"
        className={styles.image}
        width={800}
        height={512}
      />
      <div className={styles.overlay} />

      <div className={styles.center}>
        <button className={styles.playButton}>
          <Play className={styles.playIcon} />
        </button>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{text}</p>
        <div className={styles.actions}>
          <button className={styles.actionButton}>
            <Share2 className={styles.actionIcon} />
          </button>
          <button className={styles.actionButton}>
            <Heart className={styles.actionIcon} />
          </button>
          <button className={styles.actionButton}>
            <MessageCircle className={styles.actionIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveServiceCard;
