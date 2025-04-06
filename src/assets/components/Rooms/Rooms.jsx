import React, { useState } from 'react';
import './Rooms.css';
import { useTranslation } from 'react-i18next';

const Rooms = () => {
  const { t } = useTranslation();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const galleryItems = [
    {
      id: 1,
      imageUrl: '/assets/habitacion1.0.jpeg',
      title: t('rooms.10beds.title'),
      description: t('rooms.10beds.description'),
      gallery: [
        '/assets/habitacion1.jpeg',
        '/assets/habitacion1.1.jpeg',
        '/assets/EnchufeUSBlampara.jpg',
      ],
    },
    {
      id: 2,
      imageUrl: '/assets/habitacion2.jpeg',
      title: t('rooms.6beds.title'),
      description: t('rooms.6beds.description'),
      gallery: [
        '/assets/camaLamparaCozy.jpg',
        '/assets/escondida2.jpg',
      ],
    },
    // {
    //   id: 3,
    //   imageUrl: '/assets/laVistaAlPatio.jpg',
    //   title: '5 camas',
    //   description: 'Habitacion de cinco camas con ventana al patioy estanteria. ',
    //   gallery: [
    //     '/assets/laVistaAlPatio.jpg',
    //     '/assets/camaLamparaCozy.jpg',
    //   ],
    // },
    
  ];

  const handleImageClick = (room) => {
    setSelectedRoom(room);
  };

  const closeGallery = () => {
    setSelectedRoom(null);
  };

  return (
    <div id='section2'>
      <h2> {t('rooms.title')} </h2>
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

export default Rooms;