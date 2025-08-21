import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Card from "./components/Card/Card.jsx";

import imageTeto from './assets/images/pearto.jpg';
import imageCirno from './assets/images/cirno.jpg';

function App() {
  return (
    <>
      <Header />
      <Sidebar>
        <Card src={imageCirno} Name="Cirno" Text="Small Card" variant="profile"/>
      </Sidebar>
      <div className="main-content">
        <Card variant="large">
          <h2>Card Inside Card Example</h2>
          <Card src={imageCirno} Name="Cirno" Text="Small Card" />
        </Card>
        <Card src={imageCirno} Name="Cirno Again" Text="Full Width Card" variant="full" />
        <Card src={imageTeto} Name="Adrian" Text="Large Card" variant="large" />
      </div>
      <Footer />
    </>
  );
}

export default App
