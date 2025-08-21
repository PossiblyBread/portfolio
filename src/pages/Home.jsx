import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Linkbar from "../components/Linkbar/Linkbar.jsx";
import Card from "../components/Card/Card.jsx";

import githubIcon from '../assets/icons/github.svg';
import gmailIcon from '../assets/icons/gmail.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import phoneIcon from '../assets/icons/phone-icon.svg';
import imageTeto from '../assets/images/pearto.jpg';
import imageCirno from '../assets/images/cirno.jpg';

function Home() {
	return (
		<>
			<Sidebar>
				<Card src={imageCirno} Name="Adrian Adona" Text="Web Developer" variant="profileCard" shadow />
				<Card Name="Info" Text="Welcome to my portfolio!" variant="smallCard" />
				<Linkbar src={githubIcon} label="GitHub" href="https://github.com/PossiblyBread" />
				<Linkbar src={linkedinIcon} label="LinkedIn" href="https://www.linkedin.com/in/adrian-adona-9077ab331/" />
				<Linkbar src={gmailIcon} label="link.adrianadona@gmail.com" />
				<Linkbar src={phoneIcon} label="(+63) 918-402-5526" />
			</Sidebar>

			<div>
				<Card variant="large" shadow>
					<h2>Overview</h2>
					<Card src={imageCirno} Name="Cirno" Text="Small Card" shadow />
				</Card>
				<Card src={imageTeto} Name="Adrian" Text="Small Card" variant="smallCard" shadow/>
				<Card src={imageTeto} Name="Adrian" Text="Large Card" variant="largeCard" shadow/>
				<Card src={imageCirno} Name="Cirno Again" Text="Full Width Card" variant="fullCard" shadow/>
			</div>
		</>
	);
}

export default Home;
