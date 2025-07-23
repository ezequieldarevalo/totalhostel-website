
import React, { useState } from 'react';
import { useEffect } from 'react';
import './Nav.css';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);
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
      <div className="navbar-logo">
        <a href='#section1'>TOTAL</a>
        <span className="lang-container">
          <button className="without-styles-button" onClick={() => changeLanguage('es')}>🇦🇷</button>
          <button className="without-styles-button" onClick={() => changeLanguage('en')}>🇺🇸</button>
        </span>
      </div>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#section1">{t('nav.home')}</a>
        <a href="#section2">{t('nav.rooms')}</a>
        <a href="#section3">{t('nav.amenities')}</a>
        <a href="#section4">{t('nav.services')}</a>
        <a href="#section5">{t('nav.location')}</a>
        <a href="#section6">{t('nav.contact')}</a>
        <a href="#section7">{t('nav.reviews')}</a>
        <a href="#section8">{t('nav.blog')}</a>

        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    
  );
};

export default Nav;