import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Para manejar el submit
    alert('Form submitted!');
  };

  return (
    <section id='section6' className="contact-section">
      <h2 style={{
        fontSize: "2.5rem",
        marginBottom: "2rem",
        color: "#224A56"
      }}>
        {t('contact.title')}
      </h2>

      <div style={{ fontSize: "1.5rem", marginBottom: "1.2rem" }}>
        <span role="img" aria-label="WhatsApp">📱</span>
        <strong style={{ marginRight: "0.5rem" }}>Whatsapp:</strong>
        <a
          href="https://wa.me/5493874643443"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          +54 9 387 464 3443
        </a>
      </div>

      <div style={{ fontSize: "1.5rem" }}>
        <span role="img" aria-label="Instagram">📷</span>
        <strong style={{ marginRight: "0.5rem" }}>Instagram:</strong>
        <a
          href="https://instagram.com/totalhostelsalta"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          @totalhostelsalta
        </a>
      </div>
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