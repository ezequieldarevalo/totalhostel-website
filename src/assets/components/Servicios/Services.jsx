import React from 'react';
import './Services.css';

// Icons can be imported from a library like FontAwesome or use emojis for simplicity
const Services = () => {

  const services = [
    {
      id: 1,
      icon: '📶', // Wi-Fi icon
      title: 'Wi-Fi',
      description: 'Conexión gratuita a internet en todo el Hostel.',
    },
    {
      id: 2,
      icon: '❄️', // Air Conditioning icon
      title: 'Aire Acondicionado',
      description: 'Aire frio y caliente en todas las habitaciones.',
    },
    {
      id: 3,
      icon: '🧼', // Laundry icon
      title: 'Lavandería',
      description: 'Servicio disponible con tarifa adicional.',
    },
    {
      id: 4,
      icon: '🚿', // Shower icon
      title: 'Duchas amplias con vestidor',
      description: 'Tenemos las duchas mas cómodas, cada una con vestidor propio, buena presion de agua y agua caliente que nunca se termina garantizado.',
    },
    {
      id: 5,
      icon: '🛏️', // Bed icon
      title: 'Camas Nuevas',
      description: 'Con colchones nuevos y ropa de cama siempre fresca, lista para garantizar el mejor descanso .',
    },
    {
      id: 6,
      icon: '🔌', // Enchufe
      title: 'Conectividad USB',
      description: 'Enchufes instalados con socket "I" y puerto usb y usbC',
    },
  ];

  return (
    <div id='section4'>
    <div className="services-section">
      <h2>Servicios</h2>
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