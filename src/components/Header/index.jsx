import { useState, useRef, useContext } from 'react';
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

function Header(props) {
  const firebase = useContext(FirebaseContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setopenModal] = useState(false);
  // const [scroll, setScroll] = useState('header');

  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setMenuOpen(false));

  // let headerClassName = 'header';

  // useEffect(() => {
  //   const onScroll = () => {
  //     // console.log(e);
  //     console.log(window.scrollY);
  //     if (window.scrollY > 50) {
  //       // headerClassName = 'header-scrolled';
  //       setScroll('header-scrolled');

  //       // console.log(headerClassName);
  //     } else {
  //       // headerClassName = 'header';
  //       setScroll('header');
  //       // console.log(headerClassName);
  //     }
  //     // setScroll(window.screenY);
  //   };

  //   window.addEventListener('scroll', onScroll);

  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [scroll]);

  const handleLoginModal = (event) => {
    event.preventDefault();
    setopenModal(true);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    firebase.doSignOut();
  };

  return (
    <>
      <nav className="header">
        <div className="hamburger-parent" ref={menuRef}>
          <Burger open={menuOpen} setOpen={setMenuOpen} />
          <Menu open={menuOpen} />
        </div>

        <h1 className="title">Little Tags</h1>

        <div className="search-container">
          <Search />
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
              <FaRegHeart />
              <span className="item-count">5</span>
            </li>
          </ul>

          <ul>
            <li className="cart">
              <FiShoppingBag />
              <span className="item-count">5</span>
            </li>
          </ul>
        </div>
      </nav>
      {openModal ? (
        <Signup
          closeModal={() => {
            setopenModal(false);
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
}

Header.defaultProps = {
  authUser: null,
};

const mapStateToProps = (state) => ({
  authUser: state.authDetails.auth,
});

export default connect(mapStateToProps)(Header);
