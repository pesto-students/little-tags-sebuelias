import PropTypes from 'prop-types';
import { BiPlus, BiMinus } from 'react-icons/bi';
import './index.scss';

const OrderQuantity = ({ setquantity, setorderQuantity }) => (
  <>
    <h3 className="heading-quantity">QUANTITY:</h3>
    <div className="flex-row add-substract-quantity">
      <BiMinus
        className="counter"
        onClick={() => setquantity > 1 && setorderQuantity(setquantity - 1)}
      />
      <p>{setquantity}</p>
      <BiPlus
        className="counter"
        onClick={() => {
          setorderQuantity(setquantity + 1);
        }}
      />
    </div>
  </>
);

OrderQuantity.propTypes = {
  setorderQuantity: PropTypes.func.isRequired,
  setquantity: PropTypes.number.isRequired,
};

export default OrderQuantity;
