import Carousel from "../components/Carousel/carousel.jsx";
import Button from "../components/Buttons/Button.jsx";
import ButtonV2 from "../components/Buttons/ButtonV2.jsx";
import Card from "../components/Card/Card.jsx";

import imageTeto from '../assets/images/pearto.jpg';
import imageCirno from '../assets/images/cirno.jpg';  

import useScrollAnimations from "../util/script.js";
function Home() {
	useScrollAnimations();
	return (
		<>
			<div className="profile hero">
				<img src={imageCirno} alt="Profile" className="profile-image circle" />
				<h1 className="gradient-text">Hello, I'm Adrian</h1>
				<h3>Full Stack Developer</h3>		
				<div className="profileButtons">
					<Button><a href="#projects">Get Started</a></Button>
					<ButtonV2><a href="#about">Connect with me</a></ButtonV2>
				</div>
			</div>
			<div className="fade-in backdrop">
				<div className="centered">
					<div className="">
						<h2>About</h2>
						<p>I’m Adrian, a Full Stack Developer passionate about building functional and reliable web applications. 
							I enjoy working across the stack, from developing responsive frontends to designing efficient backends and databases. 
							Most of all, I love solving real-world problems through clean code and practical solutions.

							I constantly explore new tools and technologies, not just to keep up with the industry, but to improve the way I build and deliver projects. 
							My focus is on creating applications that are scalable, maintainable, and easy for users to interact with.</p>
					</div>
					<h2>Skills / Tech Stack</h2>
					{/* projects */}
					<h2>Experience</h2>
					<h2>Testimonials </h2>
					<h2>Certifications and Achievements</h2>
					<h2>Hobbies / Interests</h2>
					{/* Contact Form */}
				</div>
			</div>
			<div className="centered">
				<div className="container">
					<Card src={imageTeto} Name="Authentication System" Text="An authentication system featuring user registration, login, and email verification. Developed with PHP and MySQL for safe and efficient account management." link="/projects/AuthSystem" variant="smallCard" border/>
					<Card src={imageCirno} Name="Email Sending System (PHPMailer)" Text="Implemented email sending functionality using PHPMailer and Composer, enabling features like contact forms and account confirmation messages." link="/projects/EmailSender" variant="smallCard" border/>
					<Card src={imageTeto} Name="Inventory Management System" Text="A system to monitor stock levels, track product movements, and generate reports. Designed to help businesses maintain accurate inventory records." link="/projects/IMS" variant="smallCard" border/>
					<Card src={imageCirno} Name="Ledger System" Text="A record-keeping tool for managing financial transactions, tracking account balances, and maintaining a clear history of entries. Built with PHP and MySQL." link="/projects/LedgerSystem" variant="smallCard" border/>
					<Card src={imageTeto} Name="Payroll System" Text="An automated payroll solution that calculates employee net pay with deductions, manages work hours, and generates organized payslips." link="/projects/PayrollSystem" variant="smallCard" border/>
					<Card src={imageCirno} Name="Ticketing System" Text="A web-based ticketing platform for managing support requests, tracking status, and assigning issues. Built with PHP and MySQL for efficient data handling." variant="smallCard" link="/projects/TicketingSystem" border/>
				</div>
			</div>
			<div className="form-container">
				<h1> Contact Me </h1>
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
			{/* 
				<Sidebar>
					<CardFlip imageFront={imageCirno} frontTitle="Adrian Adona" frontText="Full Stack Developer" imageShapeFront="roundedImage" 
						imageBack={imageTeto} backTitle="" backText="Wanker" imageShapeBack="roundedImage" />
					<Card Name="Info" Text="Welcome to my portfolio!" variant="smallCard" />
					<Linkbar src={githubIcon} label="GitHub" href="https://github.com/PossiblyBread" />
					<Linkbar src={phoneIcon} label="(+63) 918-402-5526" />
				</Sidebar>
				<div className="container">
				<Carousel
					slides={[
					{
						image: imageCirno,    
						caption: "Beautiful Landscape",
						text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
					},
					{
						image: imageTeto,    
						caption: "Mountain View",
						text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
					},
					]}
					variant="profileCard"
					border
				/>
			</div> */}
		</>
	);
}

export default Home;
