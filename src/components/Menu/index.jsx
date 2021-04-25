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
function Menu({ open }) {
  return (
    <div className={`menu menu-${open ? 'open' : 'close'}`} open={open}>
      <div className="category-menu">
        <h3>Categories</h3>
        <li href="/">Mens</li>
        <li href="/">Womens</li>
        <li href="/">Electronics</li>
        <li href="/">Accessories</li>
      </div>

      <div className="user">
        <h3>UserName</h3>

        <li href="/">Address</li>
        <li href="/">Past Orders</li>
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
};

export default Menu;
