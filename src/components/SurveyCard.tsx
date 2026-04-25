import Script from "next/script";
import styles from "./SurveyCard.module.css";

export default function SurveyCard() {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Book your Call!</h2>
      <p className={styles.subtitle}>Takes 30 seconds · Free strategy call</p>
      <iframe
        src="https://api.leadconnectorhq.com/widget/survey/Co1FD4QUJvXu0t92rqtZ"
        id="Co1FD4QUJvXu0t92rqtZ"
        title="survey"
        scrolling="no"
        className={styles.surveyFrame}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}
