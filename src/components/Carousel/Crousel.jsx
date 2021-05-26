import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import CarouselContent from './CarouselContent';
import Slide from './Slide';
import Arrow from './Arrow';

const Crousel = (props) => {
  const getWidth = () => window.innerWidth;
  let autoSlideTimer = null;
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    return setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  useEffect(() => {
    autoSlideTimer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
      }
    };
  });

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1,
      });
    }

    return setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  const SlideShow = props.slides.map((slide, i) => (
    <Slide key={`${slide + i}`} content={slide} />
  ));
  const indicator = props.slides.map((slide, index) => (
    <li
      className={index === state.activeIndex ? 'selected-cousel-indicator' : ''}
      key={index.toString()}
    />
  ));

  return (
    <div className="SliderCSS">
      <CarouselContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {SlideShow}
      </CarouselContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      {props.imageIndicator ? (
        <div className="flex-row cousel-indicator">{indicator}</div>
      ) : null}
    </div>
  );
};

Crousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageIndicator: PropTypes.bool,
};

Crousel.defaultProps = {
  imageIndicator: false,
};

export default Crousel;
