import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Image
          src="/awing-logo-side-stack-white-cropped.png"
          alt="A-Wing Visuals logo"
          width={120}
          height={56}
        />
        <a href="tel:+17205260388" className={styles.phone}>
          (720) 526-0388
        </a>
        <a
          href="https://awingvisuals.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.websiteLink}
        >
          Visit awingvisuals.com
        </a>
        <p>© 2026 A-Wing Visuals. Production that Performs.</p>
      </div>
    </footer>
  );
}
