"use client";

import { useState } from "react";
import { X } from "lucide-react";
import * as Drawer from "vaul";
import styles from "./CommentsSheet.module.css";

const MOCK_COMMENTS = [
  {
    id: 1,
    author: "Giggles Squrl",
    time: "1:53 · 4h",
    text: "What a great track! Its got house, dubstep, breakbeats! You could use a mix to switch genres!",
    avatar: "GS",
  },
  {
    id: 2,
    author: "MC McDrill",
    time: "2:27 · 4h",
    text: "holy fuck",
    avatar: "MM",
  },
  {
    id: 3,
    author: "RiXTiC",
    time: "0:14 · 3h",
    text: "Check out my remix to this song! Just posted on my page!",
    avatar: "RX",
  },
];

export default function CommentsSheet({ isOpen, onClose }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewComment("");
  };

  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} />
        <Drawer.Content className={styles.sheet}>
          <div className={styles.handle} />
          
          <div className={styles.header}>
            <h2 className={styles.title}>Comentários</h2>
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Fechar comentários"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          <div className={styles.commentsList}>
            {MOCK_COMMENTS.map((comment) => (
              <div key={comment.id} className={styles.comment}>
                <div className={styles.avatar}>{comment.avatar}</div>
                <div className={styles.commentContent}>
                  <div className={styles.commentHeader}>
                    <strong className={styles.author}>{comment.author}</strong>
                    <span className={styles.time}>{comment.time}</span>
                  </div>
                  <p className={styles.commentText}>{comment.text}</p>
                  <button
                    type="button"
                    className={styles.replyButton}
                    aria-label="Responder comentário"
                  >
                    Responder
                  </button>
                </div>
              </div>
            ))}
          </div>

          <form className={styles.inputForm} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                className={styles.commentInput}
                placeholder="Adicionar um comentário..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                autoComplete="off"
              />
              <button
                type="submit"
                className={styles.sendButton}
                disabled={!newComment.trim()}
                aria-label="Enviar comentário"
              >
                Enviar
              </button>
            </div>
          </form>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
