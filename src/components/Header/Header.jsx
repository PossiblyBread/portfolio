import { useLocation, NavLink } from "react-router-dom"; 
import styles from "./Header.module.css";
import LightModeSwitch from "../Switch/darkmodeswitch/DarkModeSwitch";
import { useState } from "react";

function Header() {

    // const pageTitles = {
    //     "/": "Welcome!",
    //     "/about": "Adrian Adona",
    // };
    // const title = pageTitles[location.pathname] || "Page";
    
    const location = useLocation();
    const [projectsOpen, setProjectsOpen] = useState(false);
    const toggleProjects = () => setProjectsOpen(!projectsOpen);
    const isProjectsActive = location.pathname.startsWith("/projects");

    return (
        <header className={`${styles.headerNav} glassy-fx`}>
            <li>
                <LightModeSwitch />
            </li>
            {/* <h3>{title}</h3> */}
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <NavLink to="/" className={({ isActive  }) => isActive ? styles.active : undefined} > Home </NavLink>
                    </li>
                    <li>
                        <span className={`${styles.dropdownTitle}`} onClick={toggleProjects}>
                            <span className={`${isProjectsActive ? styles.active : ""}`}>Projects</span>
                            <span className={`${styles.arrow} ${projectsOpen ? styles.open : ""}`}>▼</span>
                        </span>
                        <ul className={`${styles.slide} ${projectsOpen ? styles.open : ""}`}>
                            <li><NavLink to="/projects/AuthSystem" className={({ isActive }) => isActive ? styles.active : undefined}>Authentication System</NavLink></li>
                            <li><NavLink to="/projects/EmailSender" className={({ isActive }) => isActive ? styles.active : undefined}>Email Sender</NavLink></li>
                            <li><NavLink to="/projects/IMS" className={({ isActive }) => isActive ? styles.active : undefined}>Inventory Management System</NavLink></li>
                            <li><NavLink to="/projects/LedgerSystem" className={({ isActive }) => isActive ? styles.active : undefined}>Ledger System</NavLink></li>
                            <li><NavLink to="/projects/PayrollSystem" className={({ isActive }) => isActive ? styles.active : undefined}>Payroll System</NavLink></li>
                            <li><NavLink to="/projects/TicketingSystem" className={({ isActive }) => isActive ? styles.active : undefined}>Ticketing System</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
