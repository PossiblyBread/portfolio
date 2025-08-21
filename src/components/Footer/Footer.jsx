import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} React Study. All rights reserved.</p>
      
      <div className={styles.contactInfo}>
        <p>Email: youremail@example.com</p>
        <p>Phone: +63 912 345 6789</p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Profile</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Profile</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
