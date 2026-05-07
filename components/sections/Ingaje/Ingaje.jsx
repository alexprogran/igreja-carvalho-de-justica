import { Heart, MessageCircle, Play, Share2 } from "lucide-react";
import styles from "./Ingaje.module.css";

const Ingaje = ({
  vertical = true,
  likeIcon = true,
  commentIcon = true,
  shareIcon = true,
  viewIcon = true,
}) => {
  const actionsClassName = vertical ? styles.actions : `${styles.actions} ${styles.horizontal}`;
  const actionButtonClassName = vertical ? styles.actionButton : `${styles.actionButton} ${styles.horizontalActionButton}`;

  return (
    <aside className={actionsClassName} aria-label="Ações do vídeo">
      {likeIcon ? (
        <button type="button" className={actionButtonClassName} aria-label="Curtir">
          <span className={styles.actionIcon}>
            <Heart aria-hidden="true" />
          </span>
          <span className={styles.actionLabel}>17K</span>
        </button>
      ) : null}

      {commentIcon ? (
        <button type="button" className={actionButtonClassName} aria-label="Comentários">
          <span className={styles.actionIcon}>
            <MessageCircle aria-hidden="true" />
          </span>
          <span className={styles.actionLabel}>865</span>
        </button>
      ) : null}

      {shareIcon ? (
        <button type="button" className={actionButtonClassName} aria-label="Compartilhar">
          <span className={styles.actionIcon}>
            <Share2 aria-hidden="true" />
          </span>
          <span className={styles.actionLabel}>Compartilhar</span>
        </button>
      ) : null}

      {viewIcon ? (
        <button type="button" className={actionButtonClassName} aria-label="Visualizações">
          <span className={styles.actionIcon}>
            <Play aria-hidden="true" />
          </span>
          <span className={styles.actionLabel}>2000mil</span>
        </button>
      ) : null}
    </aside>
  );
};

export default Ingaje;
