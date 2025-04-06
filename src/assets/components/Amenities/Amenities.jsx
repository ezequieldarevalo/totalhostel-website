import React, { useState } from 'react';
import './Amenities.css';
import { useTranslation } from 'react-i18next';

const Amenities = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { t } = useTranslation();

  const galleryItems = [
    
    {
      id: 1,
      imageUrl: '/assets/comedor2.png',
      title: t('amenities.diningRoom.title'),
      description: t('amenities.diningRoom.description'),
      gallery: [
        '/assets/comedor3.png',
        '/assets/comedor1.jpg',
      ],
    },
    {
      id: 2,
      imageUrl: '/assets/duchas2.png',
      title: t('amenities.showers.title'),
      description: t('amenities.showers.description'),
      gallery: [
        '/assets/duchas.jpg',
        '/assets/vestidorDucha.png',
      ],
    },
    {
      id: 3,
      imageUrl: '/assets/cocina.jpg',
      title: t('amenities.sharedKitchen.title'),
      description: t('amenities.sharedKitchen.description'),
      gallery: [
      ],
    },
    {
      id: 4,
      imageUrl: '/assets/patioNoche.jpg',
      title: t('amenities.internalPatio.title'),
      description: t('amenities.internalPatio.description'),
      gallery: [
      ],
    },
    {
      id: 5,
      imageUrl: '/assets/bañoInterno2.png',
      title: t('amenities.sharedBathrooms.title'),
      description: t('amenities.sharedBathrooms.description'),
      gallery: [
        '/assets/bañoTocador.jpg',
        '/assets/tocador.jpg',
      ],
    },
    {
      id: 6,
      imageUrl: '/assets/EnchufeUSBlampara.jpg',
      title: t('amenities.usbConnections.title'),
      description: t('amenities.usbConnections.description'),
      gallery: [
        '/assets/EnchufeUSBlampara.jpg',
        '/assets/enchufeUSB.jpg',
      ],
    },
  ];

  const handleImageClick = (room) => {
    setSelectedRoom(room);
  };

  const closeGallery = () => {
    setSelectedRoom(null);
  };

  return (
    <div id='section3'>
    <h2> Amenities </h2>

    <div className="gallery-container">
      {galleryItems.map((item) => (
        <div key={item.id} className="gallery-card">
          <img
            src={item.imageUrl}
            alt={`Room ${item.id}`}
            className="gallery-image"
            onClick={() => handleImageClick(item)}
          />
          <h1>{item.title}</h1>
          <p className="gallery-description">{item.description}</p>
        </div>
      ))}

      {selectedRoom && (
        <div className="modal-overlay" onClick={closeGallery}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeGallery}>
              &times;
            </button>
            <div className="room-gallery">
              {selectedRoom.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Room ${selectedRoom.id} - Image ${index + 1}`}
                  className="gallery-modal-image"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>

    </div>
  );
};

export default Amenities;