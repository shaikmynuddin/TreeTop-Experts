import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookAppointment from './components/BookAppointment';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <ScrollToHashElement />
      <div>
        {/* Header Top Bar */}
        <div className="header-top-bar">
          <div className="location flex items-center gap-2">
            <span className="material-icons text-yellow-300">location_on</span>
            <p>Kadapa, AP, India</p>
          </div>
          <div className="phone flex items-center gap-2">
            <span className="material-icons text-yellow-300">phone</span>
            <p>+91 7680861590</p>
          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-brand">TreeTop Experts</div>
          
          {/* Mobile Menu Button */}
          <button 
            className="menu-button" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          
          <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                className="nav-link" 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  closeMenu();
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/#services" 
                className="nav-link"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/blogs" 
                className="nav-link"
                onClick={closeMenu}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link 
                to="/#about" 
                className="nav-link"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/#contact" 
                className="nav-link"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/book-appointment" element={<BookAppointment />} />        </Routes>
      </div>
    </Router>
  );
}

export default App;