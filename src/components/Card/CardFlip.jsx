import styles from "./CardFlip.module.css";

function CardFlip({ imageFront, frontTitle, frontText, imageBack, backTitle, backText, imageShapeFront = "roundedImage", imageShapeBack = "roundedImage" }) {
  return (
    <div className={styles["flip-card"]}>
      <div className={styles["flip-card-inner"]}>
        <div className={styles["flip-card-front"]}>
          <img src={imageFront} alt={frontTitle}  className={`${styles.imageFront} ${styles[imageShapeFront]}`} />
          <h1 className={styles.title}>{frontTitle}</h1>
          <p>{frontText}</p>
        </div>
        <div className={styles["flip-card-back"]}>
          <img src={imageBack} alt={backTitle} className={`${styles.imageBack} ${styles[imageShapeBack]}`} />
          <h1 className={styles.title}>{backTitle}</h1>
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
}

export default CardFlip;
