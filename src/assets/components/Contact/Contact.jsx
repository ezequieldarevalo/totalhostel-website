import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Para manejar el submit
    alert('Form submitted!');
  };

  return (
    <section id='section6' className="contact-section">
      <h2>Contacto</h2>
      <section className="contact-info" style="padding: 2rem; text-align: center;">
        <h2 style="font-size: 2rem; margin-bottom: 1rem;">Contacto</h2>

        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">
          📱 <strong>Whatsapp:</strong>
          <a href="https://wa.me/5493874643443" target="_blank" style="color: #25D366;">
            +54 9 387 464 3443
          </a>
        </p>

        <p style="font-size: 1.2rem;">
          📷 <strong>Instagram:</strong>
          <a href="https://instagram.com/totalhostelsalta" target="_blank" style="color: #E1306C;">
            @totalhostelsalta
          </a>
        </p>
      </section>
      {/* <form onSubmit={handleSubmit} className="contact-form">

      
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" placeholder="escriba su nomre" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Apellido</label>
          <input type="text" id="lastname" name="lastname" placeholder="escriba su appellido" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="escriba su Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="consult">Consulta</label>
          <textarea id="consult" name="consult" placeholder="Escriba su consulta aqui..." required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form> */}
    </section>
  );
};

export default Contact;