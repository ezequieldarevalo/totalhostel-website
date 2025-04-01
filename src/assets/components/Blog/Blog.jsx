// src/components/Blog/Blog.jsx
import React, { useState } from "react";
import "./Blog.css";

const Blog = () => {
  // Static articles data
  const articles = [
    {
      id: 1,
      title: "Quebrada de San Lorenzo",
      image: 'src/assets/sanlo.jpg',
      description:
        "A 14 minutos del centro de la ciudad, La quebrada de San Lorenzo es el lugar mas bonito y accesible para caminar por senderos en la yunga Salteña rodeando el curso del río. En la quebrada podes Almorzar, merendar y cenar en el clasico restaurant 'El Duende de la quebrada' Se puede llegar en auto y en Colectivos de la Linea 4E 'San Lorenzo Chico' (Hay otros colectivos a San Lorenzo pero el 4E es el recorrido mas corto y directo a la quebrada) Este colectivo se puede abordar a 4 cuadras de Total Hostel en calle Zuviria 598 - Esquina Rivadavia entre otras paradas cercanas, el viaje dura 30 minutos.  Total Hostel recomienda asistir en dias laborales para disfrutar a solas y fines de semana para compartir con gente. En la quebrada tambien hay una seccion con parrillas alquilables para llevar alimentos para asar o simplemente disfrutar una comida preparada en una de las mesas publicas"
    },
    {
      id: 2,
      title: "Transporte Local",
      image: 'src/assets/Saeta.jpg',
      description:
        "El transporte publico de la ciudad es el colectivo 'SAETA' Para abordarlo se requiere una tarjeta cargada con crédito en alguna de los puntos de recarga de la ciudad como por ejemplo: 25 de Mayo 151, Alvarado 960, ATM Alto Noa Shoping, ATM Bs As y San Martin entr otras, Mas informacion sobre Metodos de carga y recorridos disponible en la pagina de SAETA: https://saetasalta.com.ar/saetaw/venta-recarga Tambien hay una aplicacion disponible para movil en la playstore. El costo del pasaje varia segun el destino, siendo el costo de la mayoria de los viajes $890 pesos ' .",
    },
    {
      id: 3,
      title: "¿Tuneles subterraneos?",
      image: 'src/assets/tuneles.jpg',
      description:
        "En Agosto de 2024 se conformó la comision investigadora para la exploracion de tuneles que habrían sido construidos bajo las calles de la Ciudad durante la epoca de la fundacion para el movimiento de armas y personas durante las batallas por la independencia. Se estima que conectan edificios historicos a lo largo y ancho de al menos 700mts cuadrados del casco historico..",
    },
    {
      id: 4,
      title: "Visitar Historia",
      image: 'src/assets/cabildoSaltaMuseo.jpg',
      description: "La Provincia de Salta fue una de las primeras provincias de la Republica de Argentina y su fundacion data del año 1580. A esto se debe la arquitectura colonial del centro de la ciudad. Afortunadamente hoy se puede acceder a algunas de los monumentos historicos mas importantes como el Museo Historico del Norte, ubicado frente a la plaza 9 ed julio sobre la Calle Caseros 549 A dos cuadras de Total Hostel, . El museo cuenta con cuadros, carruajes, muebles, pianos y pertenencias de figuras historicas como Martin Miguel de Güemes, destacado politico Argentino que luchó en la 'Guerra Gaucha' contra los Realistas Españoles por la Independencia de Argentina.",
    },
    {
      id: 5,
      title: "Museo Güemes",
      image: 'src/assets/museoGuemes.jpg',
      description: "Ubicado en calle España 730, se encuentra el edificio donde funcionó la Tesorería Real de la Intendencia de Salta del Tucumán hacia fines del siglo XVIII, y donde vivió Martín Miguel de Güemes junto a su familia. Hoy funciona el museo Güemes, Abierto al público de Martes a Domingo de 11:00 a 19:00 hs.",
    },
    {
      id: 6,
      title: "Comida Regional en La Tacita",
      image: 'src/assets/tacita.jpg',
      description: "Frente a la Iglesia convento San Francisco, se encuentra escondido un pequeño restaurant-café donde podes encontrar comida típica salteña con vista directa a la Iglesia.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle moving to the next set of articles
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= articles.length ? 0 : prevIndex + 2
    );
  };

  // Handle moving to the previous set of articles
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0 ? articles.length - (articles.length % 2 || 2) : prevIndex - 2
    );
  };

  return (
    <section id="section8" className="blog-section">
      <h2>Blog</h2>
      <div className="blog-gallery">
        <button className="nav-button prev" onClick={handlePrev}>
          &lt;
        </button>
        <div className="blog-articles">
          {articles.slice(currentIndex, currentIndex + 2).map((article) => (
            <div key={article.id} className="blog-article">
              <img src={article.image} alt={article.title} className="article-image" />
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Blog;