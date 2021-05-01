import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';
import Modal from '../Modal';
import GoogleIcon from '../../assets/image/btn_google_signin_light_normal_web.png';
import FacebookIcon from '../../assets/image/17639236_1785253958471956_282550797298827264_n.png';
import {} from './index.scss';
import FirebaseContext from '../../services/Firebase/context';

function SignUp({ closeModal, history, checkAuth }) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
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
      {!checkAuth ? (
        <IoMdClose className="close" onClick={() => closeModal()} />
      ) : (
        <button
          className="close button/"
          onClick={() => history.goBack()}
          aria-hidden="true"
          type="button"
        >
          go back
        </button>
      )}
      <div className="sign-up">
        <h2>Log in / Register</h2>
        <img
          src={GoogleIcon}
          alt="google button"
          onClick={handleGoogleSignIn}
          aria-hidden="true"
          className="google"
        />

        <img
          src={FacebookIcon}
          alt="facebook button"
          onClick={handleFaceBookSignIn}
          aria-hidden="true"
          className="facebook"
        />
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
