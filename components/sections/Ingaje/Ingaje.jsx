import styles from "./Ingaje.module.css";

const LikeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.517-3.31 6.47-8.14 11.19-.8.77-2.02.77-2.82 0C5.81 15.592 2.5 12.64 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.536 1.072L12 6.01l1.256-1.034a4.21 4.21 0 0 1 3.536-1.072z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H11l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path d="M8 8.5h8M8 11.5h5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M9 7.5v-2A1.5 1.5 0 0 1 10.5 4h9A1.5 1.5 0 0 1 21 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-2"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 10 3 21m0 0h6.5M3 21v-6.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ViewIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M4.5 6.5h15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path d="M10 9.6v4.8l4-2.4z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Ingaje = () => {
  return (
    <aside className={styles.actions} aria-label="Ações do vídeo">
      <button type="button" className={styles.actionButton} aria-label="Curtir">
        <span className={styles.actionIcon}>
          <LikeIcon />
        </span>
        <span className={styles.actionLabel}>17K</span>
      </button>

      <button type="button" className={styles.actionButton} aria-label="Comentários">
        <span className={styles.actionIcon}>
          <CommentIcon />
        </span>
        <span className={styles.actionLabel}>865</span>
      </button>

      <button type="button" className={styles.actionButton} aria-label="Compartilhar">
        <span className={styles.actionIcon}>
          <ShareIcon />
        </span>
        <span className={styles.actionLabel}>Compartilhar</span>
      </button>

      <button type="button" className={styles.actionButton} aria-label="Visualizações">
        <span className={styles.actionIcon}>
          <ViewIcon />
        </span>
        <span className={styles.actionLabel}>2000mil</span>
      </button>
    </aside>
  );
};

export default Ingaje;
