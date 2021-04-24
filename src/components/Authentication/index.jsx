import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import Modal from '../Modal';
import {} from './index.scss';
import FirebaseContext from '../../services/Firebase/context';

function SignUp({ closeModal, history, checkAuth }) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
        });
        closeModal();
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const handleFaceBookSignIn = () => {
    firebase
      .doFacebookSignIn()
      .then((authUser) => {
        firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
        });
        closeModal();
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <Modal width="50%" height="50%">
      {!!errorMessage && <p className="error-message">{errorMessage}</p>}
      {!checkAuth ? 
      <button
          className="close button"
          onClick={() => closeModal()}
          aria-hidden="true"
          type="button"
        >
          close
        </button>
         :
        <button
        className="close button"
        onClick={() => history.goBack()}
        aria-hidden="true"
        type="button"
      >
        go back
      </button>
       }
      <div className="sign-up">
        <h2>Log in / Register</h2>
        <button
          className="btn google"
          type="button"
          onClick={handleGoogleSignIn}
        >
          <i className="fa">
            <FaGoogle />
          </i>
          Using Google
        </button>
        <button
          className="btn facebook"
          type="button"
          onClick={handleFaceBookSignIn}
        >
          <i className="fa">
            <FaFacebookF />
          </i>
          Using Facebook
        </button>
        <p className="error-message">{errorMessage ? `${errorMessage}` : ''}</p>
      </div>
    </Modal>
  );
}

SignUp.propTypes = {
  closeModal: PropTypes.func.isRequired,
  checkAuth: PropTypes.bool,
  history: PropTypes.objectOf(PropTypes.string),
};

SignUp.defaultProps = {
  checkAuth: false,
  history: {},
};

export default SignUp;
