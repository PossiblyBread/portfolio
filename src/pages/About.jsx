import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Linkbar from "../components/Linkbar/Linkbar.jsx";
import Card from "../components/Card/Card.jsx";

import githubIcon from '../assets/icons/github.svg';
import gmailIcon from '../assets/icons/gmail.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import phoneIcon from '../assets/icons/phone-icon.svg';
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
      <div className="main-content">
        
      </div>
    </>
  );
}

export default Home;
