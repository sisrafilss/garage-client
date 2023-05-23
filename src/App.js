import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Login from "./pages/Login/Login";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer.js/Footer";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
