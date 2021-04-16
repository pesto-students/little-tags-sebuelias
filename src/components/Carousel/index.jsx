/* eslint-disable react/no-array-index-key */
import './index.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import CarouselImages from './CarouselImages';

export default function Carousel({ slides }) {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  // eslint-disable-next-line prefer-destructuring
  // eslint-disable-next-line prefer-destructuring
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlideNumber(
      currentSlideNumber === length - 1 ? 0 : currentSlideNumber + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlideNumber(
      currentSlideNumber === 0 ? length - 1 : currentSlideNumber - 1
    );
  };

  if (!Array.isArray(slides) || length === 0) {
    return null;
  }

  return (
    <section className="carousel">
      <FaArrowAltCircleLeft className="left-arrow" onClick={nextSlide} />

      <FaArrowAltCircleRight className="right-arrow" onClick={prevSlide} />

      {slides.map((slide, index) => (
        <div
          className={index === currentSlideNumber ? 'slide active' : 'slide'}
          key={index}
        >
          {index === currentSlideNumber && (
            <img src={slide} alt="test" className="image" key={index} />
          )}
        </div>
      ))}
    </section>
  );
}

Carousel.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  // eslint-disable-next-line react/forbid-prop-types
  slides: PropTypes.array.isRequired,
};
