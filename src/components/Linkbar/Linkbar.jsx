import styles from "./Linkbar.module.css";
import openInNew from "../../assets/icons/openInNew.svg";

function Linkbar({ src, label, href }) {
  if (href) {
    return (
      <a href={href} className={styles.linkbar} target="_blank" rel="noopener noreferrer" >
        {src && <img src={src} className={styles.icon} alt={label} />}
        {label && <span>{label}</span>}
        <img src={openInNew} alt="Open in new" className={styles.openIcon} />
      </a>
    );
  }

  return (
    <div className={styles.linkbar}>
      {src && <img src={src} className={styles.icon} alt={label} />}
      {label && <span>{label}</span>}
    </div>
  );
}

export default Linkbar;
