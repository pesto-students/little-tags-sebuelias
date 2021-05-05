import PropTypes from 'prop-types';
import './index.scss';

const ErrorPage = (props) => (
  <>
    <div style={{ height: '100px' }} />
    <div className="error-page">
      <h1 className="error-heading">OOps ! Page not found</h1>
      <button
        type="button"
        className="button"
        onClick={() => {
          props.history.push({ pathname: '/categories' });
        }}
      >
        Shop now..
      </button>
    </div>
  </>
);

ErrorPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ErrorPage;
