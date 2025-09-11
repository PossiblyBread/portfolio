import styles from "./Projects.module.css";
import CardFeature from "../../components/Card/CardFeature.jsx";

function AuthSystem() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.title}>Authentication System</h1>
      <p className={styles.intro}>
        An authentication system built with PHP and MySQL.  
        It includes account registration, login, Gmail verification using PHPMailer,  
        OTP-based login, and a password recovery flow.
      </p>

      <div className={styles.features}>
        <CardFeature
          title="Register"
          description="New user registration with server-side validation, storing encrypted credentials in MySQL."
          reverse
        />
        <CardFeature
          title="Login"
          description="User login system with session handling, input validation, and secure password storage in MySQL."
        />
        <CardFeature
          title="One-Time Password (OTP)"
          description="Login with one-time passwords sent via PHPMailer for added security."
          reverse
        />
        <CardFeature
          title="Forgot Password"
          description="Password recovery flow with secure reset links sent through PHPMailer."
        />
      </div>
    </section>
  );
}

export default AuthSystem;
