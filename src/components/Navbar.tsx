import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoWrap} aria-label="A-Wing Visuals home">
          <Image
            src="/awing-logo-side-stack-white-cropped.png"
            alt="A-Wing Visuals logo"
            width={110}
            height={52}
            priority
          />
        </Link>
        <a href="tel:+17205260388" className={styles.phone}>
          (720) 526-0388
        </a>
      </div>
    </header>
  );
}
