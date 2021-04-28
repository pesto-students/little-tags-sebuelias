import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.scss';

const PastOrder = (props) => {
  const convertDate = (inputFormat) => {
    function pad(value) {
      return value < 10 ? `0${value}` : value;
    }
    const date = new Date(inputFormat);
    return [
      pad(date.getDate()),
      pad(date.getMonth() + 1),
      date.getFullYear(),
    ].join('-');
  };

  const visualizeOrder = (props.apparrelData.order || []).map(
    (value, index) => (
      <div className="flex-column order-box" key={index.toString()}>
        <div className="flex-row order-id">
          <div>order date: {convertDate(value.orderDate)}</div>
          <div>payment id: {value.paymentId}</div>
        </div>
        <div>
          {value.cart.map((cartValue, cartIndex) => (
            <div className="flex-row cart-row" key={cartIndex.toString()}>
              <img
                className="image-box"
                src={cartValue.image}
                alt={cartValue.title}
                aria-hidden="true"
                onClick={() => {}}
              />
              <div className="flex-column cart-title">
                <p className="title-head">{cartValue.title}</p>
                <p className="size-info">
                  {cartValue.size ? `SIZE: ${cartValue.size}` : null}
                </p>
              </div>
              <div className="flex-column quantity-price">
                <p>Quantity:{cartValue.quantity}</p>
              </div>
              <p className="quantity-price">
                &#8377; {(cartValue.price * cartValue.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="flex-column">
          <h3 className="address-order">{value.address.name}</h3>
          <p>{value.address.address}</p>
        </div>
      </div>
    )
  );

  return (
    <>
      <div style={{ height: '100px' }} />
      <div>{visualizeOrder}</div>
    </>
  );
};

PastOrder.propTypes = {
  apparrelData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default connect(mapStateToProps)(PastOrder);
