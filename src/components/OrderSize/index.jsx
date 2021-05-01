import PropTypes from 'prop-types';
import './index.scss';

const OrderSize = ({ setSize, Size }) => (
  <>
    <h3 className="heading-quantity">SIZE:</h3>
    <div className="flex-row">
      <p
        className={`size-circle ${
          Size === 'S' ? 'size-selected' : 'size-unselected'
        }`}
        onClick={() => {
          setSize('S');
        }}
        aria-hidden="true"
      >
        S
      </p>
      <p
        className={`size-circle ${
          Size === 'M' ? 'size-selected' : 'size-unselected'
        }`}
        onClick={() => {
          setSize('M');
        }}
        aria-hidden="true"
      >
        M
      </p>
      <p
        className={`size-circle ${
          Size === 'L' ? 'size-selected' : 'size-unselected'
        }`}
        onClick={() => {
          setSize('L');
        }}
        aria-hidden="true"
      >
        L
      </p>
      <p
        className={`size-circle ${
          Size === 'XL' ? 'size-selected' : 'size-unselected'
        }`}
        onClick={() => {
          setSize('XL');
        }}
        aria-hidden="true"
      >
        XL
      </p>
      <p
        className={`size-circle ${
          Size === 'XXL' ? 'size-selected' : 'size-unselected'
        }`}
        onClick={() => {
          setSize('XXL');
        }}
        aria-hidden="true"
      >
        XXL
      </p>
    </div>
  </>
);

OrderSize.propTypes = {
  setSize: PropTypes.func.isRequired,
  Size: PropTypes.string.isRequired,
};

export default OrderSize;
