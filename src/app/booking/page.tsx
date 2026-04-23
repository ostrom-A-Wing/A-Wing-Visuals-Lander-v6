import Script from "next/script";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PixelLead from "@/components/PixelLead";
import styles from "./page.module.css";

export default function BookingPage() {
  return (
    <>
      <PixelLead />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.wrap}>
          <Link className={styles.backLink} href="/">
            ← Back to landing
          </Link>
          <h1>Book your strategy call</h1>
          <p>
            Pick a time that works for you. We&apos;ll map out your shoot, deliverables, and what
            it takes to get your business on camera.
          </p>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/d/cvpg-b9w-xxr/a-wing-visuals-intro-call?primary_color=eb0020"
            style={{ minWidth: "320px", height: "700px" }}
          />
          <p className={styles.redirectHint}>
            After booking, send visitors to{" "}
            <Link href="/thank-you" className={styles.thankYouLink}>
              /thank-you
            </Link>{" "}
            in Calendly&apos;s confirmation redirect settings.
          </p>
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
