import React, { useState } from 'react';
import './Amenities.css';

const Amenities = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const galleryItems = [
    
    {
      id: 1,
      imageUrl: '/assets/comedor2.png',
      title: 'Comedor',
      description: 'Comedor amplio con dos mesas y barra desayunadora. ',
      gallery: [
        '/assets/comedor3.png',
        '/assets/comedor1.jpg',
      ],
    },
    {
      id: 2,
      imageUrl: '/assets/duchas2.png',
      title: 'Duchas',
      description: 'Tres duchas independientes con vestidor privado, excelente presión de agua y temperatura optima y constante garantizada. ',
      gallery: [
        '/assets/duchas.jpg',
        '/assets/vestidorDucha.png',
      ],
    },
    {
      id: 3,
      imageUrl: '/assets/cocina.jpg',
      title: 'Cocina compartida',
      description: 'Cocina con horno, heladera, utensillos, ollas e insumos basicos. ',
      gallery: [
      ],
    },
    {
      id: 4,
      imageUrl: '/assets/patioNoche.jpg',
      title: 'Patio Interno',
      description: 'Amplio patio interno con cesped, equipado con asador y baño . ',
      gallery: [
      ],
    },
    {
      id: 5,
      imageUrl: '/assets/bañoInterno2.png',
      title: 'Baños compartidos',
      description: 'Dos baños con tocador, inodoro, mingitorio, espejo y lavamanos . ',
      gallery: [
        '/assets/bañoTocador.jpg',
        '/assets/tocador.jpg',
      ],
    },
    {
      id: 6,
      imageUrl: '/assets/EnchufeUSBlampara.jpg',
      title: 'Enchufes USB',
      description: 'Enchufes con socket USB, USB C y tipo "I" (Argentina/Australia/NuevaZelanda) . ',
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