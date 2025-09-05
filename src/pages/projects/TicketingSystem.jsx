
import imageCirno from '../../assets/images/cirno.jpg';  

import css3Icon from "../../assets/icons/css3.svg";
import html5Icon from "../../assets/icons/html5.svg";
import jsIcon from "../../assets/icons/javascript.svg";
import mysqlIcon from "../../assets/icons/mysql.svg";
import phpIcon from "../../assets/icons/php.svg";


function TicketingSystem() {
    return (
        <div className="project-page container py-5">
      <div className="project-hero text-center mb-5">
        <h1>Ticketing System</h1>
        <p>A web-based ticketing platform for managing support requests, tracking status, and assigning issues. Built with PHP and MySQL.</p>
      </div>

      {/* Main Image */}
      <div className="project-image text-center mb-4">
        <img src={imageCirno} alt="Ticketing System" className="img-fluid rounded" />
      </div>

      <div className="project-tech mb-5">
        <h3>Tech Stack</h3>
        <div className="d-flex flex-wrap gap-3 mt-3 justify-content-center">
          <div className="tech-card">
            <img src={html5Icon} alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="tech-card">
            <img src={css3Icon} alt="CSS3" />
            <p>CSS3</p>
          </div>
          <div className="tech-card">
            <img src={jsIcon} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="tech-card">
            <img src={phpIcon} alt="PHP" />
            <p>PHP</p>
          </div>
          <div className="tech-card">
            <img src={mysqlIcon} alt="MySQL" />
            <p>MySQL</p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="project-details">
        <h3>Project Details</h3>
        <ul>
          <li>Users can submit support tickets through a web form.</li>
          <li>Administrators can assign tickets, update status, and track progress.</li>
          <li>Data is stored in a MySQL database with secure user authentication.</li>
          <li>Built with responsive design for desktop and mobile.</li>
        </ul>
      </div>

      {/* Optional Links */}
      <div className="project-links mt-4 text-center">
        <a href="/projects/TicketingSystemDemo" className="btn btn-primary me-3">Live Demo</a>
        <a href="https://github.com/PossiblyBread/TicketingSystem" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">View Code</a>
      </div>
    </div>
    );
}

export default TicketingSystem;
