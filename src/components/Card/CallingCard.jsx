import styles from "./CallingCard.module.css";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

const CallingCard = ({ name, role, email, phone, github, linkedin, logo }) => (
  <div className={styles.mainContainer}>
    <div className={styles.border}>
      <div className={styles.card}>
        {logo && (
          <div className={styles.logoSection}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.rev}>{name}</div>
          <div className={styles.ultraText}>{role}</div>
          {email && (
            <div className={styles.masterText}>
              {email}
            </div>
          )}
          {phone && (
            <div className={styles.masterText}>
              {phone}
            </div>
          )}
          <div className={styles.socials}>
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" className={styles.githubIcon} />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className={styles.linkedinIcon} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CallingCard;
