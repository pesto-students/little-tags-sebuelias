import { useState, useRef, useEffect, useContext } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag, FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import FirebaseContext from '../../services/Firebase/context';
import Burger from '../Burger';
import Menu from '../Menu';
import Signup from '../Authentication';
import Search from '../Search';
import './index.scss';
import { disableScroll, enableScroll } from '../../utils/scrollControl';

function Header(props) {
  const firebase = useContext(FirebaseContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setopenModal] = useState(false);
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

        <h1
          className="title"
          // onClick={() => {
          //   props.history.push({
          //     pathname: '/categories',
          //     state: { QueryCategory: 'women clothing' },
          //   });
          // }}
        >
          Little Tags
        </h1>

        <div className="search-container">
          <Search {...props} />
        </div>

        <div className="header-buttons">
          <ul>
            <li className="wishlist">
              <span className="item-count">5</span>
              <FaRegHeart />
            </li>
          </ul>

          <ul>
            <li className="cart">
              <span className="item-count">5</span>
              <FiShoppingBag />
            </li>
          </ul>

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
              <li aria-hidden="true">
                <span className="username">UserName</span>
                <FiLogOut className="logout" onClick={handleLogout} />
              </li>
            )}
          </ul>
        </div>
      </nav>
      {openModal || props.openSignUpModal ? (
        <Signup
          closeModal={() => {
            setopenModal(false);
            if (props.closeSignUpModal) {
              props.closeSignUpModal();
            }
            enableScroll();
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
  openSignUpModal: PropTypes.bool.isRequired,
  closeSignUpModal: PropTypes.func.isRequired,
};

Header.defaultProps = {
  authUser: null,
};

const mapStateToProps = (state) => ({
  authUser: state.authDetails.auth,
});

export default connect(mapStateToProps)(Header);
