import PropTypes from 'prop-types';
import SignUp from "./index"
import "./index.scss"

const NotPermittedScreen = (props) =>(
    <>
    <div style={{height:"100px"}}/>
    <div className="not-permitted-sign-parent">
  <h1 className="heading-not-authorisation">You need to sign in to access this page </h1>
 <div className="not-permitted-sign-modal"> <SignUp checkAuth history={props.history} closeModal={() => {props.history.push({pathname:"/categories"})}}/></div>
  </div>
  </>
)

NotPermittedScreen.propTypes = {
    history: PropTypes.func.isRequired,
  }

export default NotPermittedScreen;
