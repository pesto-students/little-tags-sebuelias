import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  hitCartAddRemove,
  hitWhislist,
  changeSignUpBool,
} from '../../store/modules/apparrelData/actions';
import withAuthorization from '../../services/Session/withAuthorization';
import FirebaseContext from '../../services/Firebase/context';
import Card from '../../components/Card';
import './index.scss';
import Loader from '../../components/Loader';

const Whislist = (props) => {
  const firebase = useContext(FirebaseContext);
  const [initialWhislist] = useState(props.apparrelData.whisList || []);

  useEffect(() => {
    if (
      props.authDetails &&
      initialWhislist.length !== props.apparrelData.whisList.length
    ) {
      firebase.saveDataToDatabase(
        props.authDetails.uid,
        'whisList',
        props.apparrelData.whisList
      );
    }
  }, [props]);

  const visulizeWhislist = (
    props.apparrelData.whisList || []
  ).map((value, index) => (
    <Card
      index={index}
      value={value}
      key={index.toString()}
      {...props}
      openSignUpModal={() => props.changeSignUpBool({ signUpModal: true })}
    />
  ));

  return (
    <>
        {!props.apparrelData || props.apparrelData.loader ? <div className="loader-align"><Loader /></div> :
    <div className="wishlist-container">
      <h1 className="best-seller-title">My Wishlist</h1>
      <div className="complete-data whislist">{visulizeWhislist}</div>
      {props.apparrelData.whisList &&
      props.apparrelData.whisList.length === 0 ? (
        <div className="noitem-container">
          <h2>Wow!! An empty wishlist!</h2>
          <button
            type="button"
            className="button"
            onClick={() => {
              props.history.push({ pathname: '/categories' });
            }}
          >
            Let us change that..
          </button>
        </div>
      ) : null}
    </div>}
    </>
  );
};

Whislist.propTypes = {
  hitWhislist: PropTypes.func.isRequired,
  hitCartAddRemove: PropTypes.func.isRequired,
  changeSignUpBool: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  authDetails: PropTypes.objectOf(PropTypes.object).isRequired,
  apparrelData: PropTypes.objectOf(PropTypes.object).isRequired,
};

const dispatchToProps = { hitWhislist, hitCartAddRemove, changeSignUpBool };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default withAuthorization(
  connect(mapStateToProps, dispatchToProps)(Whislist)
);
