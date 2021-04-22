import PropTypes from 'prop-types';
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
      <a href="/">Mens</a>
      <a href="/">Womens</a>
      <a href="/">Electronics</a>
      <a href="/">Accessories</a>
    </div>
  );
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Menu;
