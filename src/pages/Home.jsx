import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Linkbar from "../components/Linkbar/Linkbar.jsx";
import Card from "../components/Card/Card.jsx";
import CardFlip from "../components/Card/CardFlip.jsx";
import Container from "../components/Container/Container.jsx";
import Carousel from "../components/Carousel/carousel.jsx";

import githubIcon from '../assets/icons/github.svg';
import gmailIcon from '../assets/icons/gmail.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import phoneIcon from '../assets/icons/phone-icon.svg';
import imageTeto from '../assets/images/pearto.jpg';
import imageCirno from '../assets/images/cirno.jpg';  

import useScrollAnimations from "../util/script.js";
function Home() {
	useScrollAnimations();
	return (
		<>
			<Sidebar>
				<CardFlip imageFront={imageCirno} frontTitle="Adrian Adona" frontText="Web Developer" imageShapeFront="roundedImage" 
							imageBack={imageTeto} backTitle="" backText="Wanker" imageShapeBack="roundedImage" />
				<Card Name="Info" Text="Welcome to my portfolio!" variant="smallCard" />
				<Linkbar src={githubIcon} label="GitHub" href="https://github.com/PossiblyBread" />
				<Linkbar src={linkedinIcon} label="LinkedIn" href="https://www.linkedin.com/in/adrian-adona-9077ab331/" />
				<Linkbar src={gmailIcon} label="link.adrianadona@gmail.com" />
				<Linkbar src={phoneIcon} label="(+63) 918-402-5526" />
			</Sidebar>

			<div>
				<div className="fade-in">
					<Container>
						<h2>Overview</h2>
						<p> Hi! I’m Adrian, a passionate Web Developer, 
							with an interest in creating clean, functional, and user-friendly digital experiences. I enjoy turning ideas into real products,
							learning new technologies, and improving my craft every day.</p>
						<h2>Skills</h2>
						<p>
							Frontend: HTML, CSS, JavaScript, React
							Backend: PHP, Node.js, MySQL
							Tools: Git, Figma, VS Code
							Other: Responsive Design, UI/UX Basics, API Integration</p>
						<h2>Projects</h2>
						<p>Personal Portfolio – A responsive website showcasing my work and skills.
							[Project Name] – [Short description, e.g., "A payroll system with automated net pay calculation"].
							[Project Name] – [Short description, e.g., "An order management system for a bakery"].
							(Tip: Add GitHub links, live demos, or screenshots here.)</p>
					</Container>
				</div>
				<Container>
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
				</Container>
			</div>
		</>
	);
}

export default Home;
