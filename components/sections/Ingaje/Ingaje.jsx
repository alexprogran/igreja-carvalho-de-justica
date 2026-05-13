"use client";

import { useState } from "react";
import { Heart, MessageCircle, Play, Share2 } from "lucide-react";
import CommentsSheet from "@/components/sections/CommentsSheet/CommentsSheet";
import styles from "./Ingaje.module.css";

const Ingaje = ({
  vertical = true,
  likeIcon = true,
  commentIcon = true,
  shareIcon = true,
  viewIcon = true,
}) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const actionsClassName = vertical ? styles.actions : `${styles.actions} ${styles.horizontal}`;
  const actionButtonClassName = vertical ? styles.actionButton : `${styles.actionButton} ${styles.horizontalActionButton}`;
  const likeButtonClassName = `${actionButtonClassName} ${isLiked ? styles.likeButtonActive : styles.likeButtonInactive}`;

  return (
    <>
      <aside className={actionsClassName} aria-label="Ações do vídeo">
      {likeIcon ? (
        <button
          type="button"
          className={likeButtonClassName}
          aria-label={isLiked ? "Descurtir" : "Curtir"}
          aria-pressed={isLiked}
          onClick={() => setIsLiked((current) => !current)}
        >
          <span className={styles.actionIcon}>
            <Heart fill={isLiked ? "currentColor" : "transparent"} aria-hidden="true" />
          </span>
          <span className={styles.actionLabel}>17K</span>
        </button>
      ) : null}

      {commentIcon ? (
        <button
          type="button"
          className={actionButtonClassName}
          aria-label="Comentários"
          onClick={() => setIsCommentsOpen(true)}
        >
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
    <CommentsSheet isOpen={isCommentsOpen} onClose={() => setIsCommentsOpen(false)} />
    </>
  );
};

export default Ingaje;
