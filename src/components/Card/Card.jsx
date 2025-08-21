import styles from "./Card.module.css";

function Card({ src, Name, Text, variant = "small", children }) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      {src && <img src={src} alt={Name} className={styles.image} />}
      {Name && <h2>{Name}</h2>}
      {Text && <p>{Text}</p>}
      {children}
    </div>
  );
}

export default Card;
