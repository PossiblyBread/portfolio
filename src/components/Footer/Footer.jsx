import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import githubIcon from "../../assets/icons/github.svg";
import githubWhiteIcon from "../../assets/icons/github-white.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

function Footer() {
  const location = useLocation();

  const clickToView = (e, targetId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const element = document.querySelector(targetId);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      window.location.href = `/${targetId}`;
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://github.com/PossiblyBread"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="icon githubIcon light" />
          <img src={githubWhiteIcon} alt="GitHub" className="icon githubIcon dark" />
        </a>
        <a
          href="https://linkedin.com/in/adrian-adona"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="icon linkedinIcon" />
        </a>
      </div>

      <div className={styles.links}>
        <ul>
          <li>
            <a href="#hero" onClick={(e) => clickToView(e, "#hero")}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => clickToView(e, "#about")}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => clickToView(e, "#projects")}>Projects</a>
          </li>
          <li>
            <a href="#contact-form" onClick={(e) => clickToView(e, "#contact-form")}>Contact</a>
          </li>
        </ul>
      </div>
    
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Adrian Adona. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
