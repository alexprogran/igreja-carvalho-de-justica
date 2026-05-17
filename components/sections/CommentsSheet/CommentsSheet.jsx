"use client";

import { useRef, useState } from "react";
import { Heart, Smile, X } from "lucide-react";
import { Drawer as DrawerPrimitive } from "vaul";
import { Drawer, DrawerPortal, DrawerTitle } from "@/components/ui/drawer";
import Emoji from "@/components/sections/Reag/Emoji";
import styles from "./CommentsSheet.module.css";

const MOCK_COMMENTS = [
  {
    id: 1,
    author: "Maria Santos",
    time: "1:53 · 4h",
    text: "Amém! Mutuito edificante! Deus é fiel!\n A palavra de Deus é viva e eficaz! Glória a Deus! 🙏 🙏",
    avatar: "MS",
    likes: 24,
  },
  {
    id: 2,
    author: "Marcos Lima",
    time: "2:27 · 4h",
    text: "Amém! Deus é fiel! 🔥",
    avatar: "ML",
    likes: 11,
  },
  {
    id: 3,
    author: "Patrícia Oliveira",
    time: "0:14 · 3h",
    text: "Amém! Deus é bom! 👏 👏 👏",
    avatar: "PO",
    likes: 7,
  },
];

export default function CommentsSheet({ isOpen, onClose }) {
  const [newComment, setNewComment] = useState("");
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [likedByCommentId, setLikedByCommentId] = useState(() =>
    Object.fromEntries(MOCK_COMMENTS.map((comment) => [comment.id, false]))
  );
  const [likeCounts, setLikeCounts] = useState(() =>
    Object.fromEntries(MOCK_COMMENTS.map((comment) => [comment.id, comment.likes]))
  );
  const [burstByCommentId, setBurstByCommentId] = useState(() =>
    Object.fromEntries(MOCK_COMMENTS.map((comment) => [comment.id, false]))
  );
  const inputRef = useRef(null);

  const adjustInputHeight = (element) => {
    if (!element) {
      return;
    }

    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  const updateSelection = () => {
    const input = inputRef.current;

    if (!input) {
      return;
    }

    setSelection({
      start: input.selectionStart ?? 0,
      end: input.selectionEnd ?? 0,
    });
  };

  const handleCommentChange = (e) => {
    adjustInputHeight(e.target);
    setNewComment(e.target.value);
    setSelection({
      start: e.target.selectionStart ?? 0,
      end: e.target.selectionEnd ?? 0,
    });
  };

  const handleEmojiSelect = (emoji) => {
    const input = inputRef.current;
    const start = input?.selectionStart ?? selection.start;
    const end = input?.selectionEnd ?? selection.end;
    const updatedComment = `${newComment.slice(0, start)}${emoji}${newComment.slice(end)}`;
    const nextCursorPosition = start + emoji.length;

    setNewComment(updatedComment);

    requestAnimationFrame(() => {
      if (!inputRef.current) {
        return;
      }

      adjustInputHeight(inputRef.current);
      inputRef.current.focus();
      inputRef.current.setSelectionRange(nextCursorPosition, nextCursorPosition);
      setSelection({ start: nextCursorPosition, end: nextCursorPosition });
    });
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((currentValue) => !currentValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewComment("");
    setSelection({ start: 0, end: 0 });

    requestAnimationFrame(() => {
      adjustInputHeight(inputRef.current);
    });
  };

  const handleLikeComment = (commentId) => {
    const isLiked = likedByCommentId[commentId];

    if (isLiked) {
      setLikedByCommentId((previousState) => ({
        ...previousState,
        [commentId]: false,
      }));

      setLikeCounts((previousState) => ({
        ...previousState,
        [commentId]: Math.max((previousState[commentId] ?? 0) - 1, 0),
      }));

      setBurstByCommentId((previousState) => ({
        ...previousState,
        [commentId]: false,
      }));

      return;
    }

    setLikedByCommentId((previousState) => ({
      ...previousState,
      [commentId]: true,
    }));

    setLikeCounts((previousState) => ({
      ...previousState,
      [commentId]: (previousState[commentId] ?? 0) + 1,
    }));

    setBurstByCommentId((previousState) => ({
      ...previousState,
      [commentId]: true,
    }));

    window.setTimeout(() => {
      setBurstByCommentId((previousState) => ({
        ...previousState,
        [commentId]: false,
      }));
    }, 650);
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerPortal>
        <DrawerPrimitive.Content className={styles.sheet}>
          <DrawerTitle className={styles.srOnly}>Comentários</DrawerTitle>
          <div className={styles.handle} />
          
          <div className={styles.header}>
            <h2 className={styles.title}>2000 Comentários</h2>
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
            {MOCK_COMMENTS.map((comment) => {
              const isLiked = likedByCommentId[comment.id];
              const likes = likeCounts[comment.id] ?? comment.likes;
              const hasBurst = burstByCommentId[comment.id];

              return (
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
                    className={`${styles.replyButton} ${isLiked ? styles.replyButtonLiked : ""}`}
                    aria-label={`Curtir comentário (${likes} curtidas)`}
                    onClick={() => handleLikeComment(comment.id)}
                  >
                    <span className={styles.replyHeartWrap} aria-hidden="true">
                      <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
                      {hasBurst && (
                        <span className={styles.replyBurst}>
                          <span className={styles.burstHeart}>❤</span>
                          <span className={styles.burstHeart}>❤</span>
                          <span className={styles.burstHeart}>❤</span>
                        </span>
                      )}
                    </span>
                    <span>{likes}</span>
                  </button>
                </div>
              </div>
            );})}
          </div>

          <form className={styles.inputForm} onSubmit={handleSubmit}>
            {showEmojiPicker && (
              <div className={styles.reageWrap}>
                <Emoji onSelectEmoji={handleEmojiSelect} />
              </div>
            )}
            
            <div className={styles.inputWrapper}>
              <div className={styles.commentInputWrap}>
                <span className={styles.customPlaceholder}>
                  <button
                    type="button"
                    className={styles.placeholderIconButton}
                    onClick={toggleEmojiPicker}
                    aria-label={showEmojiPicker ? "Fechar emojis" : "Abrir emojis"}
                  >
                    <Smile size={16} className={styles.placeholderIcon} />
                  </button>
                  {!newComment && (
                    <span aria-hidden="true">Adicionar um comentário...</span>
                  )}
                </span>
                <textarea
                  ref={inputRef}
                  className={styles.commentInput}
                  placeholder=""
                  rows={1}
                  value={newComment}
                  onChange={handleCommentChange}
                  onSelect={updateSelection}
                  onClick={updateSelection}
                  onKeyUp={updateSelection}
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className={styles.sendButton}
                disabled={!newComment.trim()}
                aria-label="Enviar comentário"
              >
                ➤
              </button>
            </div>
          </form>
        </DrawerPrimitive.Content>
      </DrawerPortal>
    </Drawer>
  );
}
