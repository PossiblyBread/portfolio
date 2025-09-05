import { useLocation, NavLink } from "react-router-dom"; 
import styles from "./Header.module.css";
import LightModeSwitch from "../Switch/darkmodeswitch/DarkModeSwitch";
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
      <LightModeSwitch />
      {mobileOpen && <div className={styles.backdrop} onClick={toggleMobile}></div>}

      <nav className={`${styles.navWrapper} ${mobileOpen ? styles.open : ""}`}>
        <button className={`${styles.hamburger} ${styles.mobileClose}`} onClick={toggleMobile} aria-label="Close navigation">
          <span className={mobileOpen ? styles.hamburgerOpen : ""}></span>
          <span className={mobileOpen ? styles.hamburgerOpen : ""}></span>
          <span className={mobileOpen ? styles.hamburgerOpen : ""}></span>
        </button>

        <ul className={styles.navList}>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)} onClick={() => setMobileOpen(false)}>Home</NavLink></li>
          <li>
            <span className={`${styles.dropdownTitle} ${isProjectsActive ? styles.active : ""}`} onClick={toggleProjects}>Projects <span className={`${styles.arrow} ${projectsOpen ? styles.open : ""}`}>▼</span></span>
            <ul className={`${styles.slide} ${projectsOpen ? styles.open : ""}`}>
              <li><NavLink to="/projects/AuthSystem" className={({ isActive }) => (isActive ? styles.active : undefined)} onClick={() => setMobileOpen(false)}>Authentication System</NavLink></li>
              <li><NavLink to="/projects/EmailSender" className={({ isActive }) => (isActive ? styles.active : undefined)} onClick={() => setMobileOpen(false)}>Email Sender</NavLink></li>
              <li><NavLink to="/projects/IMS" className={({ isActive }) => (isActive ? styles.active : undefined)} onClick={() => setMobileOpen(false)}>Inventory Management System</NavLink></li>
              <li><NavLink to="/projects/LedgerSystem" className={({ isActive }) => (isActive ? styles.active : undefined)} onClick={() => setMobileOpen(false)}>Ledger System</NavLink></li>
              <li><NavLink to="/projects/PayrollSystem" className={({ isActive }) => (isActive ? styles.active : undefined)} onClick={() => setMobileOpen(false)}>Payroll System</NavLink></li>
              <li><NavLink to="/projects/TicketingSystem" className={({ isActive }) => (isActive ? styles.active : undefined)} onClick={() => setMobileOpen(false)}>Ticketing System</NavLink></li>
            </ul>
          </li>
        </ul>
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
