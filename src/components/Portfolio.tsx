"use client";

import Image from "next/image";
import { useState } from "react";
import VideoLightbox from "./VideoLightbox";
import styles from "./Portfolio.module.css";

const videos = [
  {
    title: "Client About Us",
    id: "F_KFDkZNujI",
  },
  {
    title: "Client TV Ad",
    id: "zjZUbTs-Ml0",
  },
  {
    title: "Client Social",
    id: "TshMPwbz5J4",
  },
  {
    title: "Client Header Video",
    id: "Wuwr6TGwUlo",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<{ id: string; title: string } | null>(null);

  return (
    <section className={styles.section}>
      <VideoLightbox
        videoId={active?.id ?? null}
        title={active?.title ?? ""}
        onClose={() => setActive(null)}
      />
      <div className={styles.wrap}>
        <h2>Selected Work</h2>
        <div className={styles.grid}>
          {videos.map((video) => (
            <button
              key={video.title}
              type="button"
              className={styles.item}
              onClick={() => setActive({ id: video.id, title: video.title })}
              aria-label={`Play ${video.title}`}
            >
              <div className={styles.thumb}>
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt=""
                  width={640}
                  height={360}
                  loading="lazy"
                />
                <span className={styles.play} aria-hidden>
                  ▶
                </span>
              </div>
              <span className={styles.label}>{video.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
