import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.src} alt={props.Name} className={styles.image} />
      <h2>{props.Name}</h2>
      <p>{props.Text}</p>
    </div>
  );
}

export default Card;
