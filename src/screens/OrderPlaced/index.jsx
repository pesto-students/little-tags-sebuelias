import PropTypes from 'prop-types';
import { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import FirebaseContext from '../../services/Firebase/context';
import withAuthorization from "../../services/Session/withAuthorization"
import './index.scss';

const OrderPlaced = (props) => {
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    if (props.location.state && props.location.state.previousLocation === 'payment') {
      firebase.saveDataToDatabase(
        props.authDetails.uid,
        'order',
        props.apparrelData.order
      );
      firebase.saveDataToDatabase(props.authDetails.uid, 'cart', []);
    } else {
      props.history.push({ pathname: '/categories' });
    }
  }, []);

  return (
    <>
      <div style={{ height: '100px' }} />
      <div className="order-placed">
        <h1>Order placed!!!</h1>
        <p>Thank you for choosing us.</p>
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
    </>
  );
};

OrderPlaced.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  authDetails: PropTypes.objectOf(PropTypes.object).isRequired,
  apparrelData: PropTypes.objectOf(PropTypes.object).isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default withAuthorization(connect(mapStateToProps)(OrderPlaced));
