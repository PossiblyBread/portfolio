import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";  
import Footer from "./components/Footer/Footer.jsx";  
import Home from "./pages/Home.jsx";
                 
import AuthSystem from "./pages/projects/AuthSystem";      
import EmailSender from "./pages/projects/EmailSender";      
import IMS from "./pages/projects/IMS";      
import LedgerSystem from "./pages/projects/LedgerSystem";      
import PayrollSystem from "./pages/projects/PayrollSystem";      
import TicketingSystem from "./pages/projects/TicketingSystem";      

// 
function App() {
  return (
    <Router basename="/portfolio/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects/AuthSystem" element={<AuthSystem />} />
        <Route path="/projects/EmailSender" element={<EmailSender />} />
        <Route path="/projects/IMS" element={<IMS />} />
        <Route path="/projects/LedgerSystem" element={<LedgerSystem />} />
        <Route path="/projects/PayrollSystem" element={<PayrollSystem />} />
        <Route path="/projects/TicketingSystem" element={<TicketingSystem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
