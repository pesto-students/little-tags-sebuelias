import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  hitOrderAdd,
  hitFirebaseApparel,
} from '../../store/modules/apparrelData/actions';
import withAuthorization from '../../services/Session/withAuthorization';
import './index.scss';

function Payment(props) {
  const options = {
    key: 'rzp_test_i51KPDC4npsKdK',
    amount: '100', //  = INR 1
    name: 'Acme shop',
    description: 'some description',
    image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
    // eslint-disable-next-line func-names
    handler(response) {
      const order = [
        ...props.apparrelData.order,
        {
          address: props.apparrelData.address[props.location.state.AddIndex],
          cart: props.apparrelData.cart,
          orderDate: Date.now(),
          paymentId: response.razorpay_payment_id,
        },
      ];
      props.hitFirebaseApparel({
        cart: [],
        whisList: props.apparrelData.whisList || [],
        address: props.apparrelData.address || [],
        order,
      });
      props.history.push({
        pathname: '/order-placed',
        state: { previousLocation: 'payment' },
      });
    },
    prefill: {
      name: 'Gaurav',
      contact: '8708981073',
      email: 'tka86086@gmail.com',
    },
    notes: {
      address: 'some address',
    },
    theme: {
      color: 'blue',
      hide_topbar: false,
    },
  };

  const rzp1 = new window.Razorpay(options);

  useEffect(() => {
    if (
      props.location.state &&
      props.location.state.previousLocation === 'address'
    ) {
      rzp1.open();
    } else {
      props.history.push({ pathname: '/categories' });
    }
  }, []);

  // eslint-disable-next-line prefer-arrow-callback
  rzp1.on('payment.failed', function failed() {
    props.history.push({ pathname: '/address' });
  });

  return (
    <div className="payment-container">
      {/* <div className="noitem-container">
        <h2>Wow!! An empty wishlist!</h2>
      </div> */}
    </div>
  );
}

Payment.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  hitFirebaseApparel: PropTypes.func.isRequired,
  apparrelData: PropTypes.objectOf(PropTypes.object).isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
};

const dispatchToProps = { hitOrderAdd, hitFirebaseApparel };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default withAuthorization(
  connect(mapStateToProps, dispatchToProps)(Payment)
);
