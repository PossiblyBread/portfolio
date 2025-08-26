import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";  
import Footer from "./components/Footer/Footer.jsx";  
import Home from "./pages/Home.jsx";                 
import About from "./pages/About.jsx";            

function App() {
  return (
    <Router basename="/portfolio/">
      <div>
        <Header className="glassy-fx"/>
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
