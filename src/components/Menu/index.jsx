import PropTypes from 'prop-types';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag, FiLogOut } from 'react-icons/fi';

import './index.scss';

/**
 * category
 * order
 * user
 *
 */
function Menu({ open, history, close }) {
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

      <div className="user">
        <h3>UserName</h3>

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
            state: { QueryCategory: 'electronics' },
          });
        }}
        aria-hidden="true">Past Orders</li>
        <div className="user-buttons">
          <li className="wishlist">
            <span className="item-count">5</span>
            <FaRegHeart />
          </li>

          <li className="cart">
            <span className="item-count">5</span>
            <FiShoppingBag />
          </li>

          <li className="logout">
            {/* {props.authUser ? ( */}
            <FiLogOut /* onClick={handleLogout}  */ />
            {/* ) : null} */}
          </li>
        </div>
      </div>
    </div>
  );
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Menu;
