import styles from "./Button.module.css";

function ButtonV2({ children, onClick }) {
  return (
    <button className={styles.button2} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonV2;
