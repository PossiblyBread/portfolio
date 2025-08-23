import { useLocation, Link } from "react-router-dom"; // ✅ Import Link
import styles from "./Header.module.css";
import DarkModeSwitch from "../../components/Switch/darkmodeswitch/DarkModeSwitch";

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><DarkModeSwitch /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
