import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './index.scss';

const OrderPlaced = (props) => (
  <>
    <Header />
    <div style={{ height: '100px' }} />
    <div className="order-placed">
      <h1>Order placed!!!</h1>
      <p>Thank you for choosing us.</p>
      <button
        type="button"
        onClick={() => {
          props.history.push({ pathname: '/category' });
        }}
      >
        Continue Shopping
      </button>
    </div>
    <Footer />
  </>
);

OrderPlaced.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default connect(mapStateToProps)(OrderPlaced);
