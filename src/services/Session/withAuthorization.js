import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../Firebase/context';
import SignUp from "../../components/Authentication"

const withAuthorization = (Component) => {

  const NewComponent = (props) => {

    const firebase = useContext(FirebaseContext);

    const next = () => {};
    const fallback = () => {};
    useEffect(() => {
      firebase.onAuthChangeListener(next, fallback);
    }, []);

    return props.authUser ? (
      <Component {...props} />
    ) : (
        <>
        <div style={{height:"100px"}}/>
      <h1>You need to sign in to access this page </h1>
      <SignUp checkAuth history={props.history} closeModal={() => {props.history.push({pathname:"/categories"})}}/>
      </>
    );
  };

  NewComponent.propTypes = {
    history: PropTypes.func.isRequired,
    authUser: PropTypes.objectOf(PropTypes.object).isRequired,
  }

  const mapStateToProps = (state) => ({
    authUser: state.authDetails.auth,
  });
  const component1 = connect(mapStateToProps)(NewComponent);
  return withRouter(component1);
};

export default withAuthorization;
