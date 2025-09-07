import styles from "./Projects.module.css";
import CardFeature from "../../components/Card/CardFeature.jsx";

function TicketingSystem() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.title}>Ticketing System</h1>
      <p className={styles.intro}>
        A ticketing system built with PHP and MySQL.  
        It allows users to submit tickets, routes them through departments,  
        tracks their progress, and manages different outcomes such as closure or cancellation.
      </p>

      <div className={styles.features}>
        <CardFeature
          title="Ticket Submission"
          description="Users can create a new ticket through a submission form with fields such as issue type, description, and priority."
          reverse
        />
        <CardFeature
          title="Ticket Handling"
          description="Incoming tickets are logged into the database and made available for review by staff or support teams."
        />
        <CardFeature
          title="Assignment to Departments"
          description="Tickets can be assigned automatically or manually to the relevant department based on issue category."
          reverse
        />
        <CardFeature
          title="Ticket Status Tracking"
          description="Each ticket has a status (e.g., Open, In Progress, On Hold) that updates as it moves through the workflow."
        />
        <CardFeature
          title="Ticket Resolution"
          description="Tickets can reach different outcomes such as Closed (resolved), Cancelled, or Escalated depending on the situation."
          reverse
        />
      </div>
    </section>
  );
}

export default TicketingSystem;
