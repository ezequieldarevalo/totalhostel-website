// src/components/Blog/Blog.jsx
import React, { useState } from "react";
import "./Blog.css";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  // Static articles data
  const articles = [
    {
      id: 1,
      title: t('blog.quebrada.title'),
      image: '/assets/sanlo.jpg',
      description: t('blog.quebrada.description')
    },
    {
      id: 2,
      title: t('blog.localTransport.title'),
      image: '/assets/Saeta.jpg',
      description: t('blog.localTransport.description'),
    },
    {
      id: 3,
      title: t('blog.subte.title'),
      image: '/assets/tuneles.jpg',
      description: t('blog.subte.description'),
    },
    {
      id: 4,
      title: t('blog.history.title'),
      image: '/assets/cabildoSaltaMuseo.jpg',
      description: t('blog.history.description'),
    },
    {
      id: 5,
      title: t('blog.guemesMuseum.title'),
      image: '/assets/museoGuemes.jpg',
      description: t('blog.guemesMuseum.description'),
    },
    {
      id: 6,
      title: t('blog.regionalFoods.title'),
      image: '/assets/tacita.jpg',
      description: t('blog.regionalFoods.description'),
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
      <h2>{t('blog.title')}</h2>
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