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
      <form onSubmit={handleSubmit} className="contact-form">
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
      </form>
    </section>
  );
};

export default Contact;