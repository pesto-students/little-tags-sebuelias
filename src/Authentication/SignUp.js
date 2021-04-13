import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa'
import Modal from "../components/Modal"
import {  } from "./index.sass";

function SignUp() {
    return (
        <>
        <div className="modal-sign">
        <Modal>
        <div className="sign-up">
            <h3>Log in / Sign up</h3>
            <button className="sign-button" type="button"><FcGoogle /> Google Account</button>
            <button className="sign-button" type="button"><FaFacebookF /> Facebook Account</button>
        </div>
        </Modal>
        </div>  
        </>
    )
}

export default SignUp;
