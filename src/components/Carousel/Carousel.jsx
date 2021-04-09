/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import CarouselImages from './CarouselImages';
import './Carousel.css';

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line prefer-destructuring
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <section className="carousel">
      <FaArrowAltCircleLeft className="left-arrow" onClick={nextSlide} />

      <FaArrowAltCircleRight className="right-arrow" onClick={prevSlide} />

      {CarouselImages.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={slide.image} alt="test" className="image" key={index} />
          )}
        </div>
      ))}
    </section>
  );
}

Carousel.propTypes = {
  slides: PropTypes.isRequired,
};
