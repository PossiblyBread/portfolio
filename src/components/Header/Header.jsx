import { useLocation, NavLink } from "react-router-dom"; 
import styles from "./Header.module.css";
import LightModeSwitch from "../Switch/darkmodeswitch/DarkModeSwitch";

function Header() {
    const location = useLocation();

    const pageTitles = {
        "/": "Welcome!",
        "/about": "Adrian Adona",
    };

    const title = pageTitles[location.pathname] || "Page";

    return (
        <header className={`${styles.headerNav} glassy-fx`}>
            <h3>{title}</h3>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined} >Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>About</NavLink>
                    </li>
                    <li>
                        <LightModeSwitch />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
