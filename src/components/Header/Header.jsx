import { useLocation, NavLink } from "react-router-dom"; 
import styles from "./Header.module.css";
import DarkModeToggle from "../Button/DarkModeToggle/DarkModeToggle";
import { useState } from "react";

function Header() {
  const location = useLocation();
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleProjects = () => setProjectsOpen(!projectsOpen);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const isProjectsActive = location.pathname.startsWith("/projects");

  return (
    <header className={styles.headerNav}>
      {mobileOpen && <div className={styles.backdrop} onClick={toggleMobile}></div>}
      <nav className={`${styles.navWrapper} ${mobileOpen ? styles.open : ""}`}>
        <button className={`${styles.hamburger} ${styles.mobileClose}`} onClick={toggleMobile} aria-label="Close navigation">
          <span className={mobileOpen ? styles.hamburgerOpen : ""}></span>
          <span className={mobileOpen ? styles.hamburgerOpen : ""}></span>
          <span className={mobileOpen ? styles.hamburgerOpen : ""}></span>
        </button>

        <ul className={styles.navList}>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)} onClick={() => setMobileOpen(false)}>Home</NavLink></li>
          <li  onMouseEnter={() => setProjectsOpen(true)}  onMouseLeave={() => setProjectsOpen(false)} >
            <span className={`${styles.dropdownTitle} ${isProjectsActive ? styles.active : ""}`}>
              Projects <span className={`${styles.arrow} ${projectsOpen ? styles.open : ""}`}>▼</span>
            </span>
            <ul className={`${styles.slide} ${projectsOpen ? styles.open : ""}`}>
              <li><NavLink to="/projects/AuthSystem" onClick={() => setMobileOpen(false)}>Authentication System</NavLink></li>
              <li><NavLink to="/projects/EmailSender" onClick={() => setMobileOpen(false)}>Email Sender</NavLink></li>
              <li><NavLink to="/projects/IMS" onClick={() => setMobileOpen(false)}>Inventory Management System</NavLink></li>
              <li><NavLink to="/projects/LedgerSystem" onClick={() => setMobileOpen(false)}>Ledger System</NavLink></li>
              <li><NavLink to="/projects/PayrollSystem" onClick={() => setMobileOpen(false)}>Payroll System</NavLink></li>
              <li><NavLink to="/projects/TicketingSystem" onClick={() => setMobileOpen(false)}>Ticketing System</NavLink></li>
            </ul>
          </li>
        </ul>
        <div className={styles.togglecontainer}>
          <div className={styles.right} ><DarkModeToggle /></div>
        </div>
      </nav>
      <button className={styles.hamburger} onClick={toggleMobile} aria-label="Toggle navigation">
        <span className={mobileOpen ? styles.hamburgerOpen : ""}></span>
        <span className={mobileOpen ? styles.hamburgerOpen : ""}></span>
        <span className={mobileOpen ? styles.hamburgerOpen : ""}></span>
      </button>
    </header>
  );
}

export default Header;
