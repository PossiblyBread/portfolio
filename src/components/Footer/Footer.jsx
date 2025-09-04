import styles from "./Footer.module.css";

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
            <li><a href="#projects" onClick={(e) => clickToView(e, "#contact-form")}>Projects</a></li>
            <li><a href="#contact-form" onClick={(e) => clickToView(e, "#contact-form")}>Contact</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h2>Contact</h2>
          <p>Email: link.adrianadona@gmail.com</p>
          <p>Phone: (+63) 918 402 5526</p>
          <p> <a href="https://github.com/PossiblyBread" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> GitHub</a></p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Adrian Adona. All rights reserved.</p>
      </div>
    </footer>
  );
}


export default Footer;
