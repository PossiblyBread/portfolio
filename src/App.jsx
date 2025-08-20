import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";

import imageTeto from './assets/pearto.jpg';
import imageCirno from './assets/cirno.jpg';

function App() {
  return (
    <body>
      <Header />
      <div className="main-content">
        <Card src={imageCirno} Name="Cirno" Text="Less go." />
        <Card src={imageTeto} Name="Adrian Adona" Text="Beese Churger." />
      </div>
      <Footer />
    </body>
  );
}

export default App
