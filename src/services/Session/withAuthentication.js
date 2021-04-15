import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hitLogin } from '../../store/modules/auth/actions';
import FirebaseContext from '../Firebase/context';

const withAuthentication = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);
    const saveToLocalStorage = (authUser) => {
      localStorage.setItem('authUser', JSON.stringify(authUser));
    };
    const next = (authUser) => {
      saveToLocalStorage(authUser);
      props.hitLogin(authUser);
    };
    const fallback = () => {
      localStorage.removeItem('authUser');
      props.hitLogin(null);
    };
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('authUser'));
      props.hitLogin(user);
      firebase.onAuthChangeListener(next, fallback);
    }, []);

    return <Component {...props} />;
  };

  NewComponent.propTypes = {
    hitLogin: PropTypes.func.isRequired,
  }


  return connect(null, { hitLogin })(NewComponent);
};

export default withAuthentication;
