import { useLocation, NavLink } from "react-router-dom"; 
import styles from "./Header.module.css";
import DarkModeSwitch from "../../components/Switch/darkmodeswitch/DarkModeSwitch";

function Header() {
    const location = useLocation();

    const pageTitles = {
        "/": "Home",
        "/home": "Home",
        "/about": "About",
    };

    // const title = pageTitles[location.pathname] || "Page";

    return (
        <header className={styles.headerNav}>
            <h1>Welcome to my Portfolio!</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined} >Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>About</NavLink>
                    </li>
                    <li>
                        <DarkModeSwitch />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
