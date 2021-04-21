import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hitLogin } from '../../store/modules/auth/actions';
import { hitFirebaseApparel } from '../../store/modules/apparrelData/actions';
import FirebaseContext from '../Firebase/context';

const withAuthentication = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);
    const saveToLocalStorage = (authUser) => {
      localStorage.setItem('authUser', JSON.stringify(authUser));
    };
    const next = (authUser) => {
      saveToLocalStorage(authUser);
      props.hitLogin({
        email: authUser.email,
        emailVerified: authUser.emailVerified,
        uid: authUser.uid,
        username: authUser.username,
      });
      props.hitFirebaseApparel({
        cart: authUser.cart || [],
        whisList: authUser.whisList || [],
      });
    };
    const fallback = () => {
      localStorage.removeItem('authUser');
      props.hitLogin(null);
    };
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('authUser'));
      if (user) {
        props.hitLogin({
          email: user.email,
          emailVerified: user.emailVerified,
          uid: user.uid,
          username: user.username,
        });
      } else {
        props.hitLogin(user);
      }
      firebase.onAuthChangeListener(next, fallback);
    }, []);

    /* eslint-disable react/jsx-props-no-spreading */
    return <Component {...props} />;
  };

  NewComponent.propTypes = {
    hitLogin: PropTypes.func.isRequired,
    hitFirebaseApparel: PropTypes.func.isRequired,
  };

  return connect(null, { hitLogin, hitFirebaseApparel })(NewComponent);
};

export default withAuthentication;
