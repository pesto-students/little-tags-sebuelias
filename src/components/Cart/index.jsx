import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hitCartAddRemove } from '../../store/modules/apparrelData/actions';
import withAuthorization from "../../services/Session/withAuthorization"
import {} from './index.scss';
import CartSingle from './CartSingle';

function Cart(props) {
  const [totalAmount, settotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;
    props.apparrelData.cart.forEach((element) => {
      amount += element.price * element.quantity;
    });
    settotalAmount(amount);
  }, [props]);

  const handlePlaceOrder = () => {
    props.history.push({
      pathname: '/address',
      state: { proceedToPayment: true },
    });
  };

  const visualizeCart = (props.apparrelData.cart || []).map((value, index) => (
    <CartSingle
      productDetail={value}
      history={props.history}
      key={index.toString()}
      index={index}
    />
  ));

  return (
    <div className="flex-column cart-parent-box">
      {props.apparrelData.cart.length > 0 ? (
        <div className="flex-row cart-header">
          <h1 className="cart-title">
            Cart ({props.apparrelData.cart.length}{' '}
            {props.apparrelData.cart.length > 1 ? 'items' : 'item'})
          </h1>
        </div>
      ) : (
        <div className="empty">
          <h1 className="cart-title">Cart</h1>
          <h2>Oops! Your cart is empty!</h2>
          <button
          type="button"
          className="button"
          onClick={() => {
            props.history.push({ pathname: '/categories' });
          }}
        >
          Continue Shopping
        </button>
        </div>
      )}
      <div className="flex-row align-cart-box">
        <div className="adjust-cart">
        {visualizeCart}
        </div>
        {props.apparrelData.cart.length > 0 ? (
            <div className="flex-row order">
              <h1>Total Amount &nbsp; &#8377;{totalAmount.toFixed(2)}</h1>
              <button
                className="place-order-button"
                type="button"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          ) : null}
      </div>
    </div>
  );
}

Cart.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  apparrelData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const dispatchToProps = { hitCartAddRemove };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
});

export default withAuthorization(connect(mapStateToProps, dispatchToProps)(Cart));
