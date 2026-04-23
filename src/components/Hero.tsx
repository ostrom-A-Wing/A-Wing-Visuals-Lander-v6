import SurveyCard from "./SurveyCard";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero-survey" className={styles.hero}>
      <div className={styles.videoLayer} aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata" poster="/hero-poster.jpg">
          <source
            src="https://awingvisuals.com/wp-content/uploads/2024/01/Cleveland-Video-Production_1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.copy}>
          <h1>Video That Drives Revenue. Not Just Views.</h1>
          <p>
            1,500+ videos produced · 10-day turnaround · Trusted by ESPN, Mazda &amp; Celsius
          </p>
        </div>
        <div className={styles.surveyCol}>
          <SurveyCard />
        </div>
      </div>
    </section>
  );
}
