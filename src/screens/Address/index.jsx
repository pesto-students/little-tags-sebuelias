import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BiPlus } from 'react-icons/bi';

import { AiOutlineDelete } from 'react-icons/ai';
import AddAddress from '../../components/AddAddress';
import {
  hitAddressAddRemove,
  hitOrderAdd,
} from '../../store/modules/apparrelData/actions';
import withAuthorization from '../../services/Session/withAuthorization';
import './index.scss';
import FirebaseContext from '../../services/Firebase/context';

const Address = (props) => {
  const [openModal, setopenModal] = useState(false);
  const [selected, setselected] = useState('0');
  const [checkDelete, setcheckDelete] = useState(false);
  const [proceedToPayment] = useState(
    props.location.state ? props.location.state.proceedToPayment : false
  );

  const firebase = useContext(FirebaseContext);

  const handleRadioClick = (index) => {
    setselected(index);
  };

  const handlePayment = () => {
    props.history.push({
      pathname: '/payment',
      state: { AddIndex: Number(selected), previousLocation: 'address' },
    });
  };

  useEffect(() => {
    if (checkDelete) {
      firebase.saveDataToDatabase(
        props.authDetails.uid,
        'address',
        props.apparrelData.address
      );
    }
    setcheckDelete(false);
  }, [checkDelete]);

  const visualizeAddress = (props.apparrelData.address || []).map(
    (value, index) => (
      <div className="add-address-content" key={index.toString()}>
        <div>
          <input
            type="radio"
            className="icon"
            value=""
            checked={selected === index.toString()}
            false
            onClick={() => handleRadioClick(index.toString())}
          />
        </div>

        <div className="name-address">
          <b>{value.name}</b>
          <p>{value.address}</p>
        </div>

        <AiOutlineDelete
          className="icon-delete"
          onClick={() => {
            props.hitAddressAddRemove({ actionType: 'remove', index });
            setcheckDelete(true);
          }}
        />
      </div>
    )
  );

  return (
    <div className="container">
      <div style={{ height: '100px' }} />
      {openModal ? (
        <AddAddress
          closeModal={() => {
            setopenModal(false);
          }}
        />
      ) : null}
      
        <div className="proceed-to-payment">
          <div
            className="add-address"
            onClick={() => setopenModal(true)}
            aria-hidden="true"
          >
            <BiPlus className="icon" />
            <h1>Add address</h1>
          </div>
          {proceedToPayment ? ( <button className="button" type="button" onClick={handlePayment}>
            Proceed to payment
          </button>) : null }
        </div>
      
      <div className="flex-row address-wrap">{visualizeAddress}</div>
    </div>
  );
};

Address.propTypes = {
  apparrelData: PropTypes.objectOf(PropTypes.object).isRequired,
  authDetails: PropTypes.objectOf(PropTypes.object).isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  hitAddressAddRemove: PropTypes.func.isRequired,
};

const dispatchToProps = { hitAddressAddRemove, hitOrderAdd };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default withAuthorization(
  connect(mapStateToProps, dispatchToProps)(Address)
);
