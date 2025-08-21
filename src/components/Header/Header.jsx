import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const location = useLocation();

  // Map route paths to titles
  const pageTitles = {
    "/": "Home",
    "/home": "Home",
    "/about": "About",
  };

  const title = pageTitles[location.pathname] || "Page";

  return (
    <header className={styles.headerNav}>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
