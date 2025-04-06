import React from 'react';
import './Location.css';
import { useTranslation } from 'react-i18next';

const Location = () => {
  const {t} = useTranslation()
  // Google Maps embed URL for Avenida Belgrano 466, Salta, Argentina
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.231769380425!2d-65.4134546849987!3d-24.79089758407171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3b6b7b7b7b7%3A0x9e1b3b7b7b7b7b7b!2sAvenida%20Belgrano%20466%2C%20Salta%2C%20Argentina!5e0!3m2!1sen!2sus!4v1633020000000!5m2!1sen!2sus";

  return (
    <div id='section5'>
    <div className="location-section">
        <h2>{ t('location.title')}</h2>
      <div className="location-container">
        <div className="map-container">
          <iframe
            title="Location Map"
            src={mapUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Location;