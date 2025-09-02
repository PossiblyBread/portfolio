import styles from "./Footer.module.css";

function Footer() {
  const scrollToContact = (e) => {
    e.preventDefault(); // prevent default link behavior
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="#contact-form" onClick={scrollToContact}>Contact</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h2>Contact</h2>
          <p>Email: link.adrianadona@gmail.com</p>
          <p>Phone: (+63) 918 402 5526</p>
          <p> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
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
