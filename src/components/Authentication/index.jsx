import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import Modal from '../Modal';
import {} from './index.scss';
import FirebaseContext from '../../services/Firebase/context';

function SignUp({ closeModal }) {
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
    <Modal closeModal={closeModal}>
      {!!errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="sign-up">
        <h3>Log in / Sign up</h3>
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
      </div>
    </Modal>
  );
}

SignUp.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default SignUp;
