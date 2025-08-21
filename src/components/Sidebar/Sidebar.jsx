import styles from "./Sidebar.module.css";

function Sidebar({title, desc, children}) {
  return (
    <aside className={styles.sidebar}>
      {children}
        <section>
          <h2 className={styles.Title}>{title}</h2>
          <p className={styles.Desc}>{desc}</p>
        </section>
    </aside>
  );
}

export default Sidebar;