import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  hitCartAddRemove,
  hitWhislist,
  changeSignUpBool,
} from '../../store/modules/apparrelData/actions';
import FirebaseContext from '../../services/Firebase/context';
import Card from '../../components/Card';
import './index.scss';

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
    <div className="wishlist-container">
      <div style={{ height: '100px' }} />
      <h1 className="best-sellar-title">My Wishlist</h1>
      <div className="complete-data whislist">{visulizeWhislist}</div>
      {props.apparrelData.whisList &&
      props.apparrelData.whisList.length === 0 ? (
        <div className="noitem-container">
          <h2>Oops! No item in whislist</h2>
        </div>
      ) : null}
    </div>
  );
};

Whislist.propTypes = {
  hitWhislist: PropTypes.func.isRequired,
  hitCartAddRemove: PropTypes.func.isRequired,
  changeSignUpBool: PropTypes.func.isRequired,
  authDetails: PropTypes.objectOf(PropTypes.object).isRequired,
  apparrelData: PropTypes.objectOf(PropTypes.object).isRequired,
};

const dispatchToProps = { hitWhislist, hitCartAddRemove, changeSignUpBool };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default connect(mapStateToProps, dispatchToProps)(Whislist);
