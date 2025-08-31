import styles from "./Card.module.css";
import { Link as RouterLink } from "react-router-dom"; 

function Card({ src, Name, Text, link, variant = "small", children, border }) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${border ? styles.border : ""}`}>
      {src && <img src={src} alt={Name} className={styles.cardImage} />}
      {Name && <h3 className={styles.cardName}>{Name}</h3>}
      {Text && <p className={styles.cardText}>{Text}</p>}
      {children}
      <div>
        {link && (
          <div className={styles.cardLinkWrapper}>
            <RouterLink to={link} className={styles.cardLink}>
              See Details
            </RouterLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
