import styles from "./SocialProof.module.css";

const BRANDS = ["ESPN", "MAZDA", "CELSIUS", "IBM", "PFIZER"];

export default function SocialProof() {
  return (
    <section className={styles.bar} aria-label="Brand social proof">
      <div className={styles.row}>
        {BRANDS.map((brand) => (
          <span key={brand}>{brand}</span>
        ))}
      </div>
    </section>
  );
}
