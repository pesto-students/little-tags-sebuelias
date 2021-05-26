import './index.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export default function Carousel({ slides, timer, imageIndicator }) {
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
          key={index.toString()}
        >
          {index === currentSlideNumber && (
            <img src={slide} alt="carousel" className="image" key={index.toString()} />
          )}
        </div>
      ))}

      {imageIndicator ? (
        <div className="flex-row cousel-indicator">
          {slides.map((slide, index) => (
            <li
              className={
                index === currentSlideNumber ? 'selected-cousel-indicator' : ''
              }
              key={index.toString()}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  timer: PropTypes.number,
  imageIndicator: PropTypes.bool,
};

Carousel.defaultProps = {
  timer: 0,
  imageIndicator: false,
};
