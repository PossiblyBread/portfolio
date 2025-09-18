import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
import githubIcon from "../../assets/icons/github.svg";
import githubWhiteIcon from "../../assets/icons/github-white.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const isProjectsPage = location.pathname.startsWith("/projects");

  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://github.com/PossiblyBread" target="_blank" rel="noopener noreferrer" >
          <img src={githubIcon} alt="GitHub" className="icon githubIcon light" />
          <img src={githubWhiteIcon} alt="GitHub" className="icon githubIcon dark" />
        </a>
        <a href="https://linkedin.com/in/adrian-adona" target="_blank" rel="noopener noreferrer"> 
          <img src={linkedinIcon} alt="LinkedIn" className="icon linkedinIcon" />
        </a>
      </div>

      <div className={styles.links}>
        {isProjectsPage ? (
          <ul>
            <li>
              <a onClick={() => navigate("/")}>Go Back</a>
            </li>
          </ul>
        ) : (
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact-form">Contact</a></li>
          </ul>
        )}
      </div>
    
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Adrian Adona. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
