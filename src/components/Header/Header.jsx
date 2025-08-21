import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.headerNav}>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;