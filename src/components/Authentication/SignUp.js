import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { FaFacebookF } from 'react-icons/fa';
import Modal from '../Modal';
import {} from './index.scss';
import FirebaseContext from '../../services/Firebase/context';

function SignUp({ closeModal, history, checkAuth }) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [onHoverEventGoogle, setonHoverEventGoogle] = useState(false);
  const [onHoverEventFacebook, setonHoverEventFacebook] = useState(false);

  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        if (authUser.additionalUserInfo.isNewUser) {
        firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
        });
      }
        closeModal();
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const handleFaceBookSignIn = () => {
    firebase
      .doFacebookSignIn()
      .then((authUser) => {
        if (authUser.additionalUserInfo.isNewUser) {
        firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
        });
      }
        closeModal();
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <Modal width="50%" height="50%">
      {!!errorMessage && <p className="error-message">{errorMessage}</p>}
      {!checkAuth ? <button
          className="close button"
          onClick={() => closeModal()}
          aria-hidden="true"
          type="button"
        >
          close
        </button>:
        <button
        className="close button"
        onClick={() => history.goBack()}
        aria-hidden="true"
        type="button"
      >
        go back
      </button>}
      <div className="sign-up">
        <h3>Log in / Sign up</h3>
        <button
          className="sign-button google-button"
          type="button"
          onClick={handleGoogleSignIn}
          onMouseOver={() => setonHoverEventGoogle(true)}
          onFocus = {() => setonHoverEventGoogle(true)}
          onMouseLeave={() => setonHoverEventGoogle(false)}
        >
          {!onHoverEventGoogle ? <FcGoogle className="icon-width"/>: <p>Continue with google</p>}
        </button>
        <button
          className="sign-button facebook-button"
          type="button"
          onClick={handleFaceBookSignIn}
          onMouseOver={() => setonHoverEventFacebook(true)}
          onFocus = {() => setonHoverEventFacebook(true)}
          onMouseLeave={() => setonHoverEventFacebook(false)}
        >
          {!onHoverEventFacebook ? <FaFacebookF className="icon-width"/>: <p>Continue with facebook</p>}
        </button>
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
