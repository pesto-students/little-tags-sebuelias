import PropTypes from 'prop-types';
import { connect } from "react-redux"

import './index.scss';

/**
 * category
 * order
 * user
 *
 */
function Menu({ open, history, close, authDetails }) {
  return (
    <div className={`menu menu-${open ? 'open' : 'close'}`} open={open}>
      <div className="category-menu">
        <h3>Categories</h3>
        <li  onClick={() => {
          close()
          history.push({
            pathname: '/categories',
            state: { QueryCategory: 'men clothing' },
          });
        }}
        aria-hidden="true">Mens</li>
        <li  onClick={() => {
          close()
          history.push({
            pathname: '/categories',
            state: { QueryCategory: 'women clothing' },
          });
        }}
        aria-hidden="true">Womens</li>
        <li  onClick={() => {
          close()
          history.push({
            pathname: '/categories',
            state: { QueryCategory: 'electronics' },
          });
        }}
        aria-hidden="true">Electronics</li>
        <li onClick={() => {
          close()
          history.push({
            pathname: '/categories',
            state: { QueryCategory: 'jewelery'},
          });
        }}
        aria-hidden="true">Accessories</li>
      </div>

      {authDetails ? <div className="user">
        <h3>Account</h3>

        <li onClick={() => {
          close()
          history.push({
            pathname: '/address',
          });
        }}
        aria-hidden="true">Address</li>
        <li onClick={() => {
          close()
          history.push({
            pathname: '/orders',
          });
        }}
        aria-hidden="true">Orders</li>
             <li onClick={() => {
          close()
          history.push({
            pathname: '/whislist',
          });
        }}
        aria-hidden="true">Whislist</li>
             <li onClick={() => {
          close()
          history.push({
            pathname: '/cart',
          });
        }}
        aria-hidden="true">Cart</li>
      </div> : null }
    </div>
  );
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.string).isRequired,
  authDetails: PropTypes.objectOf(PropTypes.string).isRequired
};

const mapStateToProps = (state) => ({
  authDetails: state.authDetails.auth,
});

export default connect(mapStateToProps)(Menu);
