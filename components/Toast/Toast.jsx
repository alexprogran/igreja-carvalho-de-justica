"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./Toast.module.css";

const EXIT_ANIMATION_MS = 220;

const STATUS_CONFIG = {
  success: {
    icon: "\u2714",
    iconLabel: "Sucesso",
  },
  info: {
    icon: "i",
    iconLabel: "Informacao",
  },
};

export default function Toast({ sucesso = false, mensagem = "", visivel = false }) {
  const status = sucesso ? "success" : "info";
  const [shouldRender, setShouldRender] = useState(visivel);
  const [isVisible, setIsVisible] = useState(visivel);

  useEffect(() => {
    let timeoutId;

    if (visivel) {
      setShouldRender(true);
      // Trigger on next frame so entry animation runs consistently.
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      setIsVisible(false);
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, EXIT_ANIMATION_MS);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [visivel]);

  const currentStatus = useMemo(() => STATUS_CONFIG[status] ?? STATUS_CONFIG.info, [status]);

  if (!shouldRender) return null;

  return (
    <div
      className={`${styles.toast} ${isVisible ? styles.toastVisible : styles.toastHidden}`}
      data-status={status}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className={styles.iconCircle} aria-hidden="true">
        <span className={styles.iconGlyph}>{currentStatus.icon}</span>
      </span>
      <span className={styles.message}>{mensagem}</span>
      <span className={styles.srOnly}>{currentStatus.iconLabel}</span>
    </div>
  );
}
