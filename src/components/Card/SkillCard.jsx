
import styles from "./SkillCard.module.css";

function SkillCard({ icon, label }) {
  return (
    <div className={styles.skillCard}>
      <img src={icon} alt={label} className={styles.icon} />
      <p className={styles.label}>{label}</p>
    </div>
  );
}

export default SkillCard;
