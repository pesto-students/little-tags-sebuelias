import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GrAdd } from 'react-icons/gr';
import { AiOutlineDelete } from 'react-icons/ai';
import AddAddress from '../../components/AddAddress';
import { hitAddressAddRemove, hitOrderAdd } from '../../store/modules/apparrelData/actions';
import withAuthorization from "../../services/Session/withAuthorization"
import './index.scss';
import Tooltip from '../../components/Tooltip';
import FirebaseContext from '../../services/Firebase/context';

const Address = (props) => {
  const [openModal, setopenModal] = useState(false);
  const [selected, setselected] = useState('0');
  const [checkDelete, setcheckDelete] = useState(false)
  const [ proceedToPayment,] = useState(props.location.state ? props.location.state.proceedToPayment : false)

  const firebase = useContext(FirebaseContext);

  const handleRadioClick = (index) => {
    setselected(index);
  };

  const handlePayment = () => {
      props.history.push({pathname:"/payment", state:{AddIndex: Number(selected), previousLocation : "address"}})
  }

  useEffect(()=>{
      if (checkDelete) {
    firebase.saveDataToDatabase(
        props.authDetails.uid,
        'address',
        props.apparrelData.address
      );
    }
      setcheckDelete(false)
  }, [checkDelete])

  const visualizeAddress = (props.apparrelData.address || []).map(
    (value, index) => (
      <div className="add-address-content" key={index.toString()}>
        <Tooltip
          add={selected === index.toString() ? 'selected' : 'select address'}
        >
          <div>
            <input
              type="radio"
              className="cursor-pointer"
              value=""
              checked={selected === index.toString()}
              false
              onClick={()=>handleRadioClick(index.toString())}
            />
          </div>
        </Tooltip>
        <p>
          <b>{value.name}</b>
          <br />
          {value.address}
        </p>
        <Tooltip add="delete address">
          <AiOutlineDelete className="cursor-pointer" onClick={() => {
              props.hitAddressAddRemove({  actionType: 'remove', index})
              setcheckDelete(true)
      }}/>
        </Tooltip>
      </div>
    )
  );

  return (
    <>
      <div style={{ height: '100px' }} />
      {openModal ? (
        <AddAddress
          closeModal={() => {
            setopenModal(false);
          }}
        />
      ) : null}
      { proceedToPayment ?<div className="proceed-to-payment"><button type="button" onClick={handlePayment}>Proceed to payment</button> </div>: null }
      <div
        className="add-address-box"
        onClick={() => setopenModal(true)}
        aria-hidden="true"
      >
        <div>
          <GrAdd className="icon-font-size" />
          <h1>Add address</h1>
        </div>
      </div>
      {visualizeAddress}
    </>
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

export default withAuthorization(connect(mapStateToProps, dispatchToProps)(Address));
