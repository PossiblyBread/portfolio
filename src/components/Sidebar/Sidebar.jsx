import styles from "./Sidebar.module.css";

function Sidebar({children }) {
  return (
    <aside className={styles.sidebar}>
        {children}
        <section>
          <h2>Info</h2>
          <p>Some basic info about the sidebar or user.</p>
      </section>
    </aside>
  );
}
export default Sidebar;