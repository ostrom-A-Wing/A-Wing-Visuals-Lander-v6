import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <h2>Ready to get started?</h2>
        <p>Fill out the quick survey above and we&apos;ll be in touch within 24 hours.</p>
        <a href="#hero-survey" className={styles.button}>
          Back to Survey ↑
        </a>
      </div>
    </section>
  );
}
