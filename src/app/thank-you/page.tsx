import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.card}>
          <p className={styles.eyebrow}>You&apos;re booked</p>
          <h1>Thank you. We&apos;re excited to meet you.</h1>
          <p className={styles.copy}>
            Your strategy call request is in. We&apos;ll review your goals before the call so we can
            map out creative direction, deliverables, and the fastest path to launch.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.primary}>
              Back to landing
            </Link>
            <a href="https://awingvisuals.com" target="_blank" rel="noopener noreferrer" className={styles.secondary}>
              Visit main website
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
