"use client";

import { useCallback, useEffect } from "react";
import styles from "./VideoLightbox.module.css";

type VideoLightboxProps = {
  videoId: string | null;
  title: string;
  onClose: () => void;
};

export default function VideoLightbox({ videoId, title, onClose }: VideoLightboxProps) {
  const embedSrc =
    videoId !== null
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
      : "";

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!videoId) return;
    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [videoId, handleKeyDown]);

  if (!videoId) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close video">
            ×
          </button>
        </div>
        <div className={styles.aspect}>
          <iframe
            src={embedSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.iframe}
          />
        </div>
      </div>
    </div>
  );
}
