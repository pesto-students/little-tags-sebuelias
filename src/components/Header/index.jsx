import { useState, useRef, useEffect, useContext } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import FirebaseContext from '../../services/Firebase/context';
import Burger from '../Burger';
import Menu from '../Menu';
import Signup from '../Authentication/SignUp';
import Search from '../Search';
import './index.scss';
import { disableScroll, enableScroll } from '../../utils/scrollControl';
import Cart from '../Cart';

function Header(props) {
  const firebase = useContext(FirebaseContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const [openCartModal, setopenCartModal] = useState(false)
  const [headerScrolled, setHeaderScroll] = useState('');

  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setMenuOpen(false));

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setHeaderScroll('scrolled');
      } else {
        setHeaderScroll('');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [headerScrolled]);

  const handleLoginModal = (event) => {
    event.preventDefault();
    disableScroll();
    setopenModal(true);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    firebase.doSignOut();
  };

  return (
    <>
      <nav className={`header ${headerScrolled}`}>
        <div className="hamburger-parent" ref={menuRef}>
          <Burger open={menuOpen} setOpen={setMenuOpen} />
          <Menu open={menuOpen} />
        </div>

        <h1 className="title">Little Tags</h1>

        <div className="search-container">
          <Search {...props} />
        </div>

        <div className="header-buttons">
          <ul>
            {!props.authUser ? (
              <li onClick={handleLoginModal} aria-hidden="true">
                <a
                  className="login"
                  href="login.html"
                  data-toggle="tooltip"
                  data-selector="true"
                  data-placement="bottom"
                  title="Login / Register"
                >
                  Login
                </a>
              </li>
            ) : (
              <li onClick={handleLogout} aria-hidden="true">
                <a
                  className="login"
                  href="login.html"
                  data-toggle="tooltip"
                  data-selector="true"
                  data-placement="bottom"
                  title="Logout"
                >
                  Logout
                </a>
              </li>
            )}
          </ul>

          <ul>
            <li className="wishlist">
              <FaRegHeart onClick={()=>{if (props.authUser) {props.history.push({pathname:"/whislist"})} else {setopenModal(true)} }}/>
            </li>
          </ul>

          <ul>
            <li className="cart">
              <FiShoppingBag  onClick={()=>{if (props.authUser) {setopenCartModal(true)} else {setopenModal(true)} }}/>
            </li>
          </ul>
        </div>
      </nav>
      {openModal || props.openSignUpModal ? (
        <Signup
          closeModal={() => {
            setopenModal(false);
            if (props.closeSignUpModal) {props.closeSignUpModal()}
            enableScroll();
          }}
        />
      ) : null}
      {openCartModal ? (
        <Cart
          {...props}
          closeModal={() => {
            setopenCartModal(false);
          }}
        />
      ) : null}
    </>
  );
}

Header.propTypes = {
  authUser: PropTypes.shape({
    uid: PropTypes.string,
    email: PropTypes.string,
    emailVerified: PropTypes.bool,
    username: PropTypes.string,
  }),
  history: PropTypes.objectOf(PropTypes.string).isRequired,
  openSignUpModal: PropTypes.bool.isRequired,
  closeSignUpModal: PropTypes.func.isRequired
};

Header.defaultProps = {
  authUser: null,
};

const mapStateToProps = (state) => ({
  authUser: state.authDetails.auth,
});

export default connect(mapStateToProps)(Header);
