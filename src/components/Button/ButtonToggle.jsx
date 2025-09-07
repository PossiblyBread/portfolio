import styles from "./ButtonToggle.module.css";

function ButtonToggle({ isActive, onToggle, activeLabel, inactiveLabel }) {
  return (
    <button className={`${styles.toggleButton} ${isActive ? styles.active : ""}`} onClick={onToggle} > 
        {isActive ? activeLabel : inactiveLabel}
    </button>
  );
}

export default ButtonToggle;
