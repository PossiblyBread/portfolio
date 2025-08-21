import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Card from "../components/Card/Card.jsx";

import imageTeto from '../assets/images/pearto.jpg';
import imageCirno from '../assets/images/cirno.jpg';

function Home() {
  return (
    <>
      <Sidebar>
        <Card src={imageCirno} Name="Cirno" Text="Small Card" variant="profile"/>
      </Sidebar>
      <div className="main-content">
        
      </div>
    </>
  );
}

export default Home;
