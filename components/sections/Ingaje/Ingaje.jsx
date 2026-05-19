"use client";

import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import CommentsSheet from "@/components/sections/CommentsSheet/CommentsSheet";
import Share from "@/components/sections/Share/Share";
import styles from "./Ingaje.module.css";

const Ingaje = ({
  vertical = true,
  inline = false,
  likeIcon = true,
  commentIcon = true,
  shareIcon = true,
  viewIcon = true,
}) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeBurstKey, setLikeBurstKey] = useState(0);
  const actionsClassName = [
    styles.actions,
    vertical ? "" : styles.horizontal,
    inline ? styles.inline : "",
  ]
    .filter(Boolean)
    .join(" ");
  const actionButtonClassName = vertical ? styles.actionButton : `${styles.actionButton} ${styles.horizontalActionButton}`;
  const likeButtonClassName = `${actionButtonClassName} ${isLiked ? styles.likeButtonActive : styles.likeButtonInactive}`;

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikeBurstKey((current) => current + 1);
    }

    setIsLiked((current) => !current);
  };

  const handleShareClick = () => {
    setIsShareOpen(true);
  };

  return ( 
    <>
      <aside className={actionsClassName} aria-label="Ações do vídeo">
      {likeIcon ? (
        <button
          type="button"
          className={likeButtonClassName}
          aria-label={isLiked ? "Descurtir" : "Curtir"}
          aria-pressed={isLiked}
          onClick={handleLikeClick}
        >
          <span className={styles.actionIcon}>
            <Heart fill={isLiked ? "currentColor" : "transparent"} aria-hidden="true" />
            {isLiked ? (
              <span key={likeBurstKey} className={styles.likeBurst} aria-hidden="true">
                <Heart className={`${styles.burstHeart} ${styles.burstHeartLeft}`} fill="currentColor" />
                <Heart className={`${styles.burstHeart} ${styles.burstHeartCenter}`} fill="currentColor" />
                <Heart className={`${styles.burstHeart} ${styles.burstHeartRight}`} fill="currentColor" />
              </span>
            ) : null}
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
        <button
          type="button"
          className={actionButtonClassName}
          aria-label="Compartilhar"
          onClick={handleShareClick}
        >
          <span className={styles.actionIcon}>
            <Share2 aria-hidden="true" />
          </span>
          <span className={styles.actionLabel}>Compartilhar</span>
        </button>
      ) : null}

      {viewIcon ? (
        <button type="button" className={actionButtonClassName} aria-label="Visualizações">
          <span className={styles.viewHeading}>View</span>
          <span className={styles.actionLabel}>2.000</span>
        </button>
      ) : null}
    </aside>
    <CommentsSheet isOpen={isCommentsOpen} onClose={() => setIsCommentsOpen(false)} />
    <Share isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </>
  );
};

export default Ingaje;
