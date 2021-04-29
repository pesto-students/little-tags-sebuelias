import { useState, useRef, useEffect, useContext } from 'react';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import { changeSignUpBool } from '../../store/modules/apparrelData/actions';
import FirebaseContext from '../../services/Firebase/context';
import Burger from '../Burger';
import Menu from '../Menu';
import Signup from '../Authentication';
import Search from '../Search';
import './index.scss';
import { disableScroll, enableScroll } from '../../utils/scrollControl';
import Cart from '../Cart';

function Header(props) {
  const firebase = useContext(FirebaseContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const [openCartModal, setopenCartModal] = useState(false);
  const [headerScrolled, setHeaderScroll] = useState('');
  const [onHoverUser, setonHoverUser] = useState(false)

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
          <Menu open={menuOpen} close={()=>setMenuOpen(false)} {...props}/>
        </div>

        <h1
          className="title icons"
          onClick={() => {
            props.history.push({ pathname: '/' });
          }}
          aria-hidden="true"
        >
          Little Tags
        </h1>

        <div className="search-container">
          <Search {...props} />
        </div>

        <div className="header-buttons">
          <ul>
            <li className="wishlist">
              <span className="item-count">
                {props.apparrelData.whisList.length
                  ? props.apparrelData.whisList.length
                  : ' '}
              </span>
              <FaRegHeart
                className="icons"
                onClick={() => {
                  if (props.authUser) {
                    props.history.push({ pathname: '/whislist' });
                  } else {
                    setopenModal(true);
                  }
                }}
              />
            </li>
          </ul>

          <ul>
            <li className="cart">
              <span className="item-count">
                {props.apparrelData.cart.length
                  ? props.apparrelData.cart.length
                  : ' '}
              </span>
              <FiShoppingBag
                className="icons"
                onClick={() => {
                  if (props.authUser) {
                    setopenCartModal(true);
                  } else {
                    setopenModal(true);
                  }
                }}
              />
            </li>
          </ul>
          <ul className="auth-feature">
            {!props.authUser ? (
              <li onClick={handleLoginModal} aria-hidden="true">
                <a
                  className="login icons"
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
              <li aria-hidden="true" className="flex-column user-icon" onMouseLeave={(event) => {
                event.preventDefault();
                setonHoverUser(false);
              }}>
                <FaRegUser className="logout icons" onClick={()=>{}} onMouseOver={(event) => {
          event.preventDefault();
          setonHoverUser(true);
        }}
        onFocus={(event) => {
          event.preventDefault();
          setonHoverUser(false);
        }}/>
                
                {onHoverUser ? <div className="onhover-user">
                  <div className="arrow"/>
                  <div className="flex-column dropdown-user-content">
                   <span className="username icons-hover">
                  Hi, <br/>{props.authUser.username}
                </span>
                <span className="logout icons-hover" onClick={handleLogout} aria-hidden="true">Logout</span>
                </div>
                </div> : null}
              </li>
            )}
          </ul>
        </div>
      </nav>
      {openModal || props.apparrelData.openSignUpModal ? (
        <Signup
          closeModal={() => {
            setopenModal(false);
            props.changeSignUpBool({ signUpModal: false });
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
  apparrelData: PropTypes.objectOf(PropTypes.string).isRequired,
  changeSignUpBool: PropTypes.func.isRequired,
  closeSignUpModal: PropTypes.func.isRequired,
};

Header.defaultProps = {
  authUser: null,
};

const mapStateToProps = (state) => ({
  authUser: state.authDetails.auth,
  apparrelData: state.apparrelData,
});

export default withRouter(
  connect(mapStateToProps, { changeSignUpBool })(Header)
);
