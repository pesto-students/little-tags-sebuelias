import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../Loader';
import SignUp from './index';
import './index.scss';

const NotPermittedScreen = (props) => (
  <>
    <div style={{ height: '100px' }} />
    {!props.apparrelData || props.apparrelData.loader ? <div className="loader-align"><Loader /></div> :
    <div className="not-permitted-sign-parent">
      <h1 className="heading-not-authorisation">
        You need to sign in to access this page{' '}
      </h1>
      <div className="not-permitted-sign-modal">
        {' '}
        <SignUp
          checkAuth
          history={props.history}
          closeModal={() => {
            props.history.push({ pathname: '/categories' });
          }}
        />
      </div>
    </div> }
  </>
);

NotPermittedScreen.propTypes = {
  history: PropTypes.func.isRequired,
  apparrelData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData.apparrelData,
});

export default connect(mapStateToProps)(NotPermittedScreen);
