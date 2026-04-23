import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "A-Wing Visuals is top notch. Dillon and Michael are super creative and professional. They helped us brainstorm a creative approach and dialed in the content of our messaging.",
    name: "Ted Church",
    title: "Business Owner",
  },
  {
    quote:
      "Having collaborated with A-Wing Visuals for several years on multiple projects, I can confidently rate their services as a solid 5/5. The A-Wing team always displays unmatched professionalism and creativity.",
    name: "Kaleb Hoffer",
    title: "Marketing Director",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <h2>200+ Five-Star Reviews</h2>
        <p className={styles.stars}>★★★★★</p>
        <p className={styles.subtext}>5.0 on Google Reviews</p>
        <a
          className={styles.proofCard}
          href="https://www.youtube.com/shorts/H8he9tOBibs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch A-Wing testimonial short"
        >
          <div className={styles.proofMedia}>
            <Image
              src="/images/performance-proof.png"
              alt="Campaign performance proof screenshot"
              width={1024}
              height={306}
              loading="lazy"
            />
          </div>
          <div className={styles.proofCopy}>
            <p className={styles.proofLabel}>Performance Snapshot</p>
            <p className={styles.proofTitle}>CTR lift from 0.84% to 19.64%</p>
            <p className={styles.proofLink}>Watch A-Wing Testimonial (Vertical) →</p>
          </div>
        </a>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className={styles.card}>
              <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
              <p className={styles.author}>{testimonial.name}</p>
              <p className={styles.role}>{testimonial.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
