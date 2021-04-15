import {useContext, useState} from "react"
import { FcGoogle } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { FaFacebookF } from 'react-icons/fa';
import { MdClose } from 'react-icons/md'
import Modal from '../Modal';
import {} from './index.sass';
import FirebaseContext from '../../services/Firebase/context';

function SignUp({closeModal}) {

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
        closeModal()
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
        closeModal()
      })
      .catch((error) => setErrorMessage(error.message));
  };
  
  return (
    <div className="modal-sign">
      <Modal>
        {!!errorMessage && <p className="error-message">{errorMessage}</p>}
        <MdClose className="close-icon" onClick={()=>closeModal()}/>
        <div className="sign-up">
          <h3>Log in / Sign up</h3>
          <button
            className="sign-button"
            type="button"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle /> Google Account
          </button>
          <button className="sign-button" type="button"
          onClick={handleFaceBookSignIn}
          >
            <FaFacebookF /> Facebook Account
          </button>
        </div>
        </Modal>
        </div> 
    )
}

SignUp.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default SignUp;
