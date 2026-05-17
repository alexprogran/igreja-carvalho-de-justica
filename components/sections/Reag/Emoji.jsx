"use client";

import twemoji from "twemoji";
import styles from "./Emoji.module.css";

const REACTIONS = [
  "❤️",
  "👍",
  "🙏",
  "🤗",
  "😍",
  "😊",
  "🔥",
  "🙌",
  "👏",
];
const TWEMOJI_SVG_BASE_URL =
  "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg";

const getTwemojiUrl = (emoji) => {
  // Alguns emojis (como coração) incluem FE0F, mas o asset SVG do Twemoji usa o codepoint sem esse sufixo.
  const codePoint = twemoji.convert.toCodePoint(emoji).replace(/-fe0f/gi, "");

  return `${TWEMOJI_SVG_BASE_URL}/${codePoint}.svg`;
};

export default function Emoji({ onSelectEmoji }) {
  return (
    <div className={styles.wrapper}>
      {REACTIONS.map((emoji, index) => (
        <button
          key={`${emoji}-${index}`}
          type="button"
          className={styles.reactionButton}
          aria-label={emoji}
          onClick={() => onSelectEmoji?.(emoji)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getTwemojiUrl(emoji)}
            alt=""
            className={styles.reactionImage}
            draggable="false"
            loading="eager"
            decoding="sync"
          />
        </button>
      ))}
    </div>
  );
}
