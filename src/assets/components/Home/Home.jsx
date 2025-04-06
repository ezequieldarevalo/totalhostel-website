import React from "react";
import './Home.css'
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
    return (
      <div id="section1" className="home">
        <div className="homeContent">
          <h1 className="home-title" >TOTAL <br></br> HOSTEL </h1>
          <p className="home-description">{t('home.text1')}<br></br></p>
          <div className="button">
          <button> 
            <a href=" "> {t('home.book')} </a>
          </button>
        </div>
        </div>
      </div>
    );
  };

export default Home