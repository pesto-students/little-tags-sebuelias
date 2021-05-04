import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hitLogin } from '../../store/modules/auth/actions';
import { hitFirebaseApparel, requestData, changeSignUpBool, hitLoader } from '../../store/modules/apparrelData/actions';
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
        address: authUser.address || [],
        order: authUser.order || [],
      });
      props.hitLoader({loader : false})
    };
    const fallback = () => {
      props.hitLoader({loader : false})
      localStorage.removeItem('authUser');
      props.hitLogin(null);
    };
    useEffect(() => {
      props.requestData()
      const user = JSON.parse(localStorage.getItem('authUser'));
      const firstTimeUser = JSON.parse(localStorage.getItem('firstTimeUser'));
      props.hitLoader({loader : true})
      if (user) {
        props.hitLogin({
          email: user.email,
          emailVerified: user.emailVerified,
          uid: user.uid,
          username: user.username,
        });
      } else {
        props.hitLogin(user);
        if (!firstTimeUser) {
          setTimeout(() => {
            props.changeSignUpBool({signUpModal:true})
            localStorage.setItem('firstTimeUser', JSON.stringify(true));
          }, 5000);
        }
      }
      firebase.onAuthChangeListener(next, fallback);
    }, []);

    /* eslint-disable react/jsx-props-no-spreading */
    return <Component {...props} />;
  };

  NewComponent.propTypes = {
    hitLogin: PropTypes.func.isRequired,
    hitFirebaseApparel: PropTypes.func.isRequired,
    requestData: PropTypes.func.isRequired,
    changeSignUpBool: PropTypes.func.isRequired,
    hitLoader: PropTypes.func.isRequired,
  };

  return connect(null, { hitLogin, hitFirebaseApparel, requestData, changeSignUpBool, hitLoader })(NewComponent);
};

export default withAuthentication;
