import styles from "./CardFeature.module.css";

function CardFeature({ title, description, reverse }) {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.preview}></div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardFeature;
