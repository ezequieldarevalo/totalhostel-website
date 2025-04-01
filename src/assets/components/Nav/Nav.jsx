
import React, { useState } from 'react';
import { useEffect } from 'react';
import './Nav.css';

const Nav = () => {

  // que el nav tenga bg white cuando se scrollea

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // que el boton despliegue el menu

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`} >
        <div className="navbar-logo"> <a href='#section1'>TOTAL</a></div>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#section1">Home</a>
          <a href="#section2">Habitaciones</a>
          <a href="#section3">Amenities</a>
          <a href="#section4">Servicios</a>
          <a href="#section5">Ubicacion</a>
          <a href="#section6">Contacto</a>
          <a href="#section7">Reseñas</a>
          <a href="#section8">Blog</a>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    
  );
};

export default Nav;