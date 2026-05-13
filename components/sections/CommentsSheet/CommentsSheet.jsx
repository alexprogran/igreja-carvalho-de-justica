"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Drawer as DrawerPrimitive } from "vaul";
import { Drawer, DrawerPortal, DrawerTitle } from "@/components/ui/drawer";
import Reage from "@/components/sections/Reag/Reage";
import styles from "./CommentsSheet.module.css";

const MOCK_COMMENTS = [
  {
    id: 1,
    author: "Maria Santos",
    time: "1:53 · 4h",
    text: "Amém! Mutuito edificante! Deus é fiel!",
    avatar: "MS",
  },
  {
    id: 2,
    author: "Marcos Lima",
    time: "2:27 · 4h",
    text: "Amém! Deus é fiel!",
    avatar: "ML",
  },
  {
    id: 3,
    author: "Patrícia Oliveira",
    time: "0:14 · 3h",
    text: "Amém! Deus é bom!",
    avatar: "PO",
  },
];

export default function CommentsSheet({ isOpen, onClose }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewComment("");
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerPortal>
        <DrawerPrimitive.Content className={styles.sheet}>
          <DrawerTitle className={styles.srOnly}>Comentários</DrawerTitle>
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

          <div className={styles.reageWrap}>
            <Reage />
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
        </DrawerPrimitive.Content>
      </DrawerPortal>
    </Drawer>
  );
}
