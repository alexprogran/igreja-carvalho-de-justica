"use client";

import styles from "./UserButton.module.css";

function resolveInitial(userName) {
  if (typeof userName !== "string") {
    return "";
  }

  const trimmedName = userName.trim();

  if (!trimmedName) {
    return "";
  }

  return trimmedName.charAt(0).toUpperCase();
}

export default function UserButton({ userName, onClick, className = "", ariaLabel }) {
  const initial = resolveInitial(userName);
  const hasUserName = initial.length > 0;
  const accessibleLabel =
    ariaLabel ?? (hasUserName ? `Abrir perfil de ${userName.trim()}` : "Abrir login");

  return (
    <button
      type="button"
      className={`${styles.button} ${className}`.trim()}
      onClick={onClick}
      aria-label={accessibleLabel}
      title={accessibleLabel}
    >
      <span className={styles.avatar} aria-hidden="true">
        {hasUserName ? (
          <span className={styles.initial}>{initial}</span>
        ) : (
          <span className={styles.avatarGlyph}>
            <span className={styles.avatarHead} />
            <span className={styles.avatarBody} />
          </span>
        )}
      </span>
      <span className={styles.label} aria-hidden="true">Você</span>
      <span className={styles.srOnly}>{accessibleLabel}</span>
    </button>
  );
}