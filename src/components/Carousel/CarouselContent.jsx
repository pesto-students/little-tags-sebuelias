import PropTypes from 'prop-types';

const CarouselContent = (props) => (
  <div
    style={{
      transform: `translateX(-${props.translate}px)`,
      transition: `transform ease-out ${props.transition}s`,
      height: '100%',
      width: `${props.width}px`,
      display: 'flex',
    }}
  >
    {props.children}
  </div>
);

CarouselContent.propTypes = {
  translate: PropTypes.number.isRequired,
  transition: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default CarouselContent;
