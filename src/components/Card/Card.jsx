import styles from "./Card.module.css";

function Card({ src, Name, Text, variant = "small", children, border }) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${border ? styles.border : ""}`}>
      {src && <img src={src} alt={Name} className={styles.cardImage} />}
      {Name && <h2 className={styles.cardName}>{Name}</h2>}
      {Text && <p className={styles.cardText}>{Text}</p>}
      {children}
    </div>
  );
}

export default Card;
