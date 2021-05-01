/* eslint-disable react/no-array-index-key */
import './index.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export default function Carousel({ slides, timer }) {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  // eslint-disable-next-line prefer-destructuring
  const length = slides.length;
  let autoSlideTimer = null;

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

  useEffect(() => {
    if (timer !== 0) {
      autoSlideTimer = setInterval(() => {
        nextSlide();
      }, timer);
    }
    return () => {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
      }
    };
  });

  if (!Array.isArray(slides) || length === 0) {
    return null;
  }

  return (
    <section className="carousel flex-column">
      <IoIosArrowBack className="left arrow-crousel" onClick={nextSlide} />

      <IoIosArrowForward className="right arrow-crousel" onClick={prevSlide} />

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
      <div className="flex-row cousel-indicator">
      {slides.map((slide, index) => (
        <li className={index === currentSlideNumber ? "selected-cousel-indicator" : ""} key={index.toString()}/>
      ))}
      </div>
    </section>
  );
}

Carousel.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  // eslint-disable-next-line react/forbid-prop-types
  slides: PropTypes.array.isRequired,
  timer: PropTypes.number,
};

Carousel.defaultProps = {
  timer: 0,
};