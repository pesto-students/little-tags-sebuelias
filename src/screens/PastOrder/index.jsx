import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withAuthorization from "../../services/Session/withAuthorization"
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
          <div>PLACED ON: {convertDate(value.orderDate)}</div>
          <div>PAYMENT ID: {value.paymentId}</div>
        </div>
        <div>
          {value.cart.map((cartValue, cartIndex) => (
            <div className="flex-row cart-row" key={cartIndex.toString()}>
              <div className="product">
                <img
                  className="image-box-order"
                  src={cartValue.image}
                  alt={cartValue.title}
                  aria-hidden="true"
                  onClick={() => {}}
                />
                <div className="flex-column cart-title-past-order">
                  <h3 className="title-head">{cartValue.title}</h3>
                  <h3 className="size-info">
                    {cartValue.size ? `SIZE: ${cartValue.size}` : <br />}
                  </h3>
                </div>
              </div>
              <div className="flex-column heading-quantity">
                <h3> x {cartValue.quantity}</h3>
              </div>
              <h2 className="price">
                &#8377; {(cartValue.price * cartValue.quantity).toFixed(2)}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex-row foot">
          <div className="address">
            <h3 className="address-order">
              DELIVERED TO: {value.address.name}
            </h3>
            <p>{value.address.address}</p>
          </div>
        </div>
      </div>
    )
  );

  return (
    <>
      <div style={{ height: '100px' }} />
      <h1 className="best-sellar-title">Orders</h1>
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

export default withAuthorization(connect(mapStateToProps)(PastOrder));
