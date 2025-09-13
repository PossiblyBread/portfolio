import Card from "../components/Card/Card.jsx";
import SkillCard from "../components/Card/SkillCard.jsx";

import imageTeto from '../assets/images/pearto.jpg';
import imageCirno from '../assets/images/cirno.jpg';  

import css3Icon from "../assets/icons/css3.svg";
import gitIcon from "../assets/icons/git.svg";
import html5Icon from "../assets/icons/html5.svg";
import jsIcon from "../assets/icons/javascript.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import phpIcon from "../assets/icons/php.svg";
import reactIcon from "../assets/icons/react.svg";
import bootstrapIcon from '../assets/icons/bootstrap.svg';
import vsCodeIcon from '../assets/icons/vs-code.svg';
import xamppIcon from '../assets/icons/xampp.svg';
import viteIcon from '../assets/icons/vite.svg';
import cloudflareIcon from '../assets/icons/cloudflare.svg';
import hostingerIcon from '../assets/icons/hostinger.svg';

import githubWhiteIcon from '../assets/icons/github-white.svg';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import resumeFile from "../assets/Resume.pdf";

import useScrollAnimations from "../util/script.js";

function Home() {

	const clickToView = (e, targetId) => {

		e.preventDefault();
		const element = document.querySelector(targetId);
		if (element) {
			const yOffset = -100; 
			const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};

	useScrollAnimations();

	return (
		<>
			<div className="profile hero" id="hero">
				<img src={imageCirno} alt="Profile" className="profile-image circle" />
				<h1 className="gradient-text">Hello, I'm Adrian!</h1>
				<h3>Full Stack Developer</h3>		
				<p>I'm a machine that turns coffee into pee</p>
				<div className="profileButtons">
					<div className="buttonRow">
						<button className="customButton" onClick={(e) => clickToView(e, "#contact-form")}>
							Get in Touch
						</button>
						<button className="getStartedLink" onClick={(e) => clickToView(e, "#about")}>
							Get Started
						</button>
					</div>
					<div className="social-icons">
						<a href="https://github.com/PossiblyBread" target="_blank" rel="noopener noreferrer" className="github" >
							<img src={githubIcon} alt="GitHub" className="icon githubIcon light" />
							<img src={githubWhiteIcon} alt="GitHub" className="icon githubIcon dark" />
						</a>
						<a href="https://linkedin.com/in/adrian-adona" target="_blank" rel="noopener noreferrer">
							<img src={linkedinIcon} alt="LinkedIn" className="icon linkedinIcon" />
						</a>
					</div>
				</div>
			</div>
			<div className="centered fade-in" id="about">
				<div className="about-container">
					<div className="about-text">
						<h2>About Me</h2>
						<p>
							I’m a full stack developer who enjoys creating applications that are simple, reliable, and easy to use.  
							I like working across the stack and exploring new tools that make building and maintaining projects more efficient.  
						</p>
					</div>
					<div className="about-action">
						<a href={resumeFile} download className="resume-button"> Download Resume </a>
					</div>
				</div>
			</div>
			 <div className="skills-section centered" id="skills">
				<h2>Skills / Tech Stack</h2>
				<h3>Languages & Frameworks</h3>
				<div className="skills-grid">
					<SkillCard icon={html5Icon} label="HTML5" />
					<SkillCard icon={css3Icon} label="CSS3" />
					<SkillCard icon={jsIcon} label="JavaScript" />
					<SkillCard icon={phpIcon} label="PHP" />
					<SkillCard icon={reactIcon} label="React" />
					<SkillCard icon={viteIcon} label="Vite" />
					<SkillCard icon={bootstrapIcon} label="Bootstrap" />
				</div>
				<h3>Databases & Local Dev</h3>
				<div className="skills-grid">
					<SkillCard icon={mysqlIcon} label="MySQL" />
					<SkillCard icon={xamppIcon} label="XAMPP" />
				</div>
				<h3>Version Control & Tools</h3>
				<div className="skills-grid">
					<SkillCard icon={gitIcon} label="Git" />
					<div className="githubSkill">
						<div className="light"><SkillCard icon={githubWhiteIcon} label="GitHub" /></div>
						<div className="dark"><SkillCard icon={githubIcon} label="GitHub" /></div>
					</div>
					<SkillCard icon={vsCodeIcon} label="VS Code" />
				</div>
				<h3>Hosting & Cloud</h3>
				<div className="skills-grid">
					<SkillCard icon={hostingerIcon} label="Hostinger" />
					<SkillCard icon={cloudflareIcon} label="Cloudflare" />
				</div>
			</div>
			<div className="projects-section centered" id="projects">
				<h2>Projects</h2>
				<div className="projects-container">
					<Card src={imageTeto} Name="Authentication System" Text="An authentication system featuring user registration, login, and email verification. Developed with PHP and MySQL for safe and efficient account management." link="/projects/AuthSystem" variant="smallCard" border/>
					<Card src={imageCirno} Name="Email Sending System (PHPMailer)" Text="Implemented email sending functionality using PHPMailer and Composer, enabling features like contact forms and account confirmation messages." link="/projects/EmailSender" variant="smallCard" border/>
					<Card src={imageTeto} Name="Inventory Management System" Text="A system to monitor stock levels, track product movements, and generate reports. Designed to help businesses maintain accurate inventory records." link="/projects/IMS" variant="smallCard" border/>
					<Card src={imageCirno} Name="Ledger System" Text="A record-keeping tool for managing financial transactions, tracking account balances, and maintaining a clear history of entries. Built with PHP and MySQL." link="/projects/LedgerSystem" variant="smallCard" border/>
					<Card src={imageTeto} Name="Payroll System" Text="A payroll system that calculates employee net pay with deductions, manages work hours, and generates organized payslips." link="/projects/PayrollSystem" variant="smallCard" border/>
					<Card src={imageCirno} Name="Ticketing System" Text="A web-based ticketing platform for managing support requests, tracking status, and assigning issues. Built with PHP and MySQL for efficient data handling." variant="smallCard" link="/projects/TicketingSystem" border/>
				</div>
			</div>
			<div className="centered">
				<h2>Certifications and Achievements</h2>
			</div>
			<div className="form-container" id="contact-form">
				<h2> Contact Me </h2>
				<div className="contact-form">
					<form action="https://formspree.io/f/xgvlvgab" method="POST"> 
						<label>Your Name:
							<input name="name" type="text" placeholder="Enter your name" required/>
						</label>
						<label> Your email:
							<input type="email" name="email" placeholder="Enter your email" required/>
						</label>
						<label> Your message:
							<textarea name="message" placeholder="Enter your message..." required></textarea>
						</label>
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		</>
	);
}
export default Home;
