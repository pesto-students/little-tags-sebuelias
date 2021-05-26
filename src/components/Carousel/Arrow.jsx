import PropTypes from 'prop-types';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './index.scss';

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    aria-hidden="true"
    className={`crousel-arrow ${direction === 'right' ? 'right' : 'left'}`}
  >
    {direction === 'left' ? (
      <IoIosArrowBack className="crousel-arrow-left" />
    ) : (
      <IoIosArrowForward className="crousel-arrow-right" />
    )}
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Arrow;
