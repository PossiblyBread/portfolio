import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <p>&copy; {new Date().getFullYear()} Adrian Adona. All rights reserved.</p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>Email: link.adrianadona@gmail.com</p>
          <p>Phone: (+63) 918 402 5526</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profile
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
