import styles from "./Footer.module.css";
import CallingCard from "../Card/CallingCard.jsx";
import imageCirno from '../../assets/images/cirno.jpg';  

function Footer() {
  const clickToView = (e, targetId) => {

		e.preventDefault();
		const element = document.querySelector(targetId);
		if (element) {
			const yOffset = -100; 
			const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#hero" onClick={(e) => clickToView(e, "#hero")}>Home</a></li>
            <li><a href="#about" onClick={(e) => clickToView(e, "#about")}>About</a></li>
            <li><a href="#projects" onClick={(e) => clickToView(e, "#projects")}>Projects</a></li>
            <li><a href="#contact-form" onClick={(e) => clickToView(e, "#contact-form")}>Contact</a></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <CallingCard
            name="Adrian Adona"
            role="Junior Full Stack Developer"
            email="link.adrianadona@gmail.com"
            phone="+63 918-402-5526"
            github="https://github.com/PossiblyBread"
            linkedin="https://linkedin.com/in/adrian-adona"
            logo={imageCirno} 
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Adrian Adona. All rights reserved.</p>
      </div>
    </footer>
  );
}


export default Footer;
