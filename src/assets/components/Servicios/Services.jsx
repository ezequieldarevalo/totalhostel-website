import React from 'react';
import './Services.css';
import { useTranslation } from 'react-i18next';

// Icons can be imported from a library like FontAwesome or use emojis for simplicity
const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: '📶', // Wi-Fi icon
      title: t('services.wiFi.title'),
      description: t('services.wiFi.description'),
    },
    {
      id: 2,
      icon: '❄️', // Air Conditioning icon
      title: t('services.airConditioning.title'),
      description: t('services.airConditioning.description'),
    },
    {
      id: 3,
      icon: '🧼', // Laundry icon
      title: t('services.laundry.title'),
      description: t('services.laundry.description'),
    },
    {
      id: 4,
      icon: '🚿', // Shower icon
      title: t('services.showers.title'),
      description: t('services.showers.description'),
    },
    {
      id: 5,
      icon: '🛏️', // Bed icon
      title: t('services.beds.title'),
      description: t('services.beds.description'),
    },
    {
      id: 6,
      icon: '🔌', // Enchufe
      title: t('services.usbConectivity.title'),
      description: t('services.usbConectivity.description'),
    },
  ];

  return (
    <div id='section4'>
    <div className="services-section">
        <h2>{t('services.title')}</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id}  className="service-card" >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;