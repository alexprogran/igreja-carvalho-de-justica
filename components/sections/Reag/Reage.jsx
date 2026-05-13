"use client";

import styles from "./Reage.module.css";

const REACTIONS = ["❤️", "🙏", "🔥", "🙌", "👏"];

export default function Reage() {
  return (
    <div className={styles.wrapper}>
      {REACTIONS.map((emoji) => (
        <button key={emoji} type="button" className={styles.reactionButton} aria-label={emoji}>
          {emoji}
        </button>
      ))}
    </div>
  );
}
