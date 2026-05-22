 "use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Drawer as DrawerPrimitive } from "vaul";
import { Drawer, DrawerPortal, DrawerTitle } from "@/components/ui/drawer";
import styles from "./Share.module.css";

export default function Share({ isOpen, onClose, title = "Igreja Carvalho de Justiça", text = "Confira este conteúdo.", shareUrl }) {
  const [statusMessage, setStatusMessage] = useState("");

  const normalizedShareUrl = useMemo(() => {
    if (shareUrl) {
      return shareUrl;
    }

    if (typeof window !== "undefined") {
      return window.location.href;
    }

    return "/";
  }, [shareUrl]);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppShare = () => {
    openInNewTab(`https://wa.me/?text=${encodeURIComponent(`${text} ${normalizedShareUrl}`)}`);
  };

  const handleFacebookShare = () => {
    openInNewTab(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(normalizedShareUrl)}`);
  };

  const handleTelegramShare = () => {
    openInNewTab(
      `https://t.me/share/url?url=${encodeURIComponent(normalizedShareUrl)}&text=${encodeURIComponent(text)}`,
    );
  };

  const handleGmailShare = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`${text}\n\n${normalizedShareUrl}`);
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}`;
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;

    const gmailWindow = window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");

    if (!gmailWindow) {
      window.location.href = mailtoUrl;
    }
  };

  const handleInstagramShare = async () => {
    const instagramUrl = "https://www.instagram.com/";

    // Abre de forma síncrona no clique para reduzir chance de bloqueio do navegador.
    const instagramWindow = window.open(instagramUrl, "_blank", "noopener,noreferrer");

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(normalizedShareUrl);
      }

      setStatusMessage("Compartilhe com quem você ama!");

      // Tentativa de deep link para app, com fallback já aberto na web.
      window.location.href = "instagram://";

      if (!instagramWindow) {
        openInNewTab(instagramUrl);
      }
    } catch {
      setStatusMessage("Não foi possível copiar automaticamente. Compartilhe manualmente.");

      if (!instagramWindow) {
        openInNewTab(instagramUrl);
      }
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerPortal>
        <DrawerPrimitive.Content className={styles.sheet} onClick={e => e.stopPropagation()}>
          <DrawerTitle className={styles.srOnly}>Compartilhar</DrawerTitle>
          <div className={styles.handle} />

          <div className={styles.header}>
            <h2 className={styles.title}>Compartilhar</h2>
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Fechar compartilhamento"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <div className={styles.previewCard}>
            <p className={styles.previewTitle}>{title}</p>
            <p className={styles.previewUrl}>{normalizedShareUrl}</p>
          </div>

          <div className={styles.appsGrid}>
            <button type="button" className={styles.appButton} onClick={handleWhatsAppShare} aria-label="Compartilhar no WhatsApp">
              <span className={`${styles.appIcon} ${styles.whatsapp}`}>
                <FaWhatsapp aria-hidden="true" />
              </span>
              <span className={styles.appLabel}>WhatsApp</span>
            </button>

            <button type="button" className={styles.appButton} onClick={handleInstagramShare} aria-label="Compartilhar no Instagram">
              <span className={`${styles.appIcon} ${styles.instagram}`}>
                <FaInstagram aria-hidden="true" />
              </span>
              <span className={styles.appLabel}>Instagram</span>
            </button>

            <button type="button" className={styles.appButton} onClick={handleFacebookShare} aria-label="Compartilhar no Facebook">
              <span className={`${styles.appIcon} ${styles.facebook}`}>
                <FaFacebookF aria-hidden="true" />
              </span>
              <span className={styles.appLabel}>Facebook</span>
            </button>

            <button type="button" className={styles.appButton} onClick={handleTelegramShare} aria-label="Compartilhar no Telegram">
              <span className={`${styles.appIcon} ${styles.telegram}`}>
                <FaTelegramPlane aria-hidden="true" />
              </span>
              <span className={styles.appLabel}>Telegram</span>
            </button>

            <button type="button" className={styles.appButton} onClick={handleGmailShare} aria-label="Compartilhar no Gmail">
              <span className={`${styles.appIcon} ${styles.gmail}`}>
                <MdEmail aria-hidden="true" />
              </span>
              <span className={styles.appLabel}>Gmail</span>
            </button>
          </div>

          {statusMessage ? <p className={styles.statusMessage}>{statusMessage}</p> : null}
        </DrawerPrimitive.Content>
      </DrawerPortal>
    </Drawer>
  );
}
