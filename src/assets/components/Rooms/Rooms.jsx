import React, { useState } from 'react';
import './Rooms.css';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const galleryItems = [
    {
      id: 1,
      imageUrl: '/assets/habitacion1.0.jpeg',
      title: '10 camas',
      description: 'Habitacion para diez personas: Nuestra habitacion mas amplia, cuenta con cinco cama cuchetas, aire acondicionado, enchufes con puerto usb, ventanal a patio interno, escritorio y estantería',
      gallery: [
        '/assets/habitacion1.jpeg',
        '/assets/habitacion1.1.jpeg',
        '/assets/EnchufeUSBlampara.jpg',
      ],
    },
    {
      id: 2,
      imageUrl: '/assets/habitacion2.jpeg',
      title: '6 camas',
      description: 'Habitacion para seis personas: Esta habitacion de seis camas cuenta con aire acondicionado, enchufes con puerto usb y C y escritorio',
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
      <h2> Habitaciones </h2>
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