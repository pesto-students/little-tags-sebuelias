import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.scss';
import AddRemoveWhislist from '../AddRemoveWhislist';
import { hitWhislist } from '../../store/modules/apparrelData/actions';
import FirebaseContext from '../../services/Firebase/context';

const Card = (props) => {
  const firebase = useContext(FirebaseContext);
  const [whislist, setwhislist] = useState(false);
  const [firstTime, setfirstTime] = useState(false);

  const handleAddWhislist = () => {
    if (props.authDetails) {
      setwhislist(true);
      setfirstTime(true);
      props.hitWhislist({ actionType: 'add', productDetail: props.value });
    } else {
      props.openSignUpModal();
    }
  };

  const handleRemoveWhislist = () => {
    if (props.authDetails) {
      setwhislist(false);
      setfirstTime(true);
      props.hitWhislist({ actionType: 'remove', productDetail: props.value });
    } else {
      props.openSignUpModal();
    }
  };

  useEffect(() => {
    if (props.authDetails) {
      const checkWhislist = props.apparrelData.whisList.filter(
        ({ id }) => id === props.value.id
      );
      if (checkWhislist.length) {
        setwhislist(true);
      } else {
        setwhislist(false);
      }
    }
  }, [props]);

  useEffect(() => {
    if (props.authDetails && firstTime) {
      firebase.saveDataToDatabase(
        props.authDetails.uid,
        'whisList',
        props.apparrelData.whisList
      );
    }
  }, [whislist]);

  return (
    <div className="card-container" key={props.index.toString()}>
      <img
        className="image-box"
        src={props.value.image}
        alt={props.value.title}
        aria-hidden="true"
        onClick={() => {
          props.history.push({
            pathname: `/categories/${props.value.id}`,
            state: { product: props.value },
          });
        }}
      />
      <div
        className="card-title"
        role="button"
        tabIndex={0}
        onKeyPress={() => {}}
        onClick={() => {
          props.history.push({
            pathname: `/categories/${props.value.id}`,
            state: { product: props.value },
          });
        }}
      >
        <h3 className="item-name">{props.value.title}</h3>
        <span className="card-footer">
          <h3 className="title-price">&#8377; {props.value.price}</h3>
          <AddRemoveWhislist
            whislist={whislist}
            handleAddWhislist={handleAddWhislist}
            handleRemoveWhislist={handleRemoveWhislist}
            productDetail={props.value}
          />
        </span>
      </div>
    </div>
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  hitWhislist: PropTypes.func.isRequired,
  authDetails: PropTypes.objectOf(PropTypes.object).isRequired,
  apparrelData: PropTypes.objectOf(PropTypes.object).isRequired,
  openSignUpModal: PropTypes.func.isRequired,
};

const dispatchToProps = { hitWhislist };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default connect(mapStateToProps, dispatchToProps)(Card);
