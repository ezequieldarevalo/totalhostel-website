// src/components/Reviews/Reviews.jsx
import React, { useState } from "react";
import "./Reviews.css";

const Reviews = () => {
  // Static reviews data (replace this with data fetched from your booking website later)
  const reviews = [
    {
      id: 1,
      author: "John Doe",
      text: "Amazing hostel! The staff was very friendly, and the location was perfect.",
      rating: 5,
    },
    {
      id: 2,
      author: "Jane Smith",
      text: "Great experience! The rooms were clean, and the common area was cozy.",
      rating: 4,
    },
    {
      id: 3,
      author: "Alice Johnson",
      text: "Loved the free breakfast and the atmosphere. Highly recommended!",
      rating: 5,
    },
    {
      id: 4,
      author: "Bob Brown",
      text: "Good value for money. The beds were comfortable, and the WiFi was fast.",
      rating: 4,
    },
    {
      id: 5,
      author: "Charlie Davis",
      text: "Nice place, but the rooms were a bit small. Still, a good stay overall.",
      rating: 3,
    },
    {
      id: 6,
      author: "Eve White",
      text: "Fantastic hostel! The rooftop terrace had an amazing view.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle sliding to the next set of reviews
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= reviews.length ? 0 : prevIndex + 3
    );
  };

  // Handle sliding to the previous set of reviews
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? reviews.length - (reviews.length % 3 || 3) : prevIndex - 3
    );
  };

  return (
    <section id="section7" className="reviews-section">
      <h2>Lo que dicen nuestros huespedes</h2>
      <div className="reviews-gallery">
        <button className="nav-button prev" onClick={handlePrev}>
          &lt;
        </button>
        <div className="reviews-cards">
          {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
            <div key={review.id} className="review-card">
              <h3>{review.author}</h3>
              <p>{review.text}</p>
              <div className="rating">{'⭐'.repeat(review.rating)}</div>
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

export default Reviews;