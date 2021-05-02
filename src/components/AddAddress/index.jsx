import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import Modal from '../Modal';
import { hitAddressAddRemove } from '../../store/modules/apparrelData/actions';
import FirebaseContext from '../../services/Firebase/context';
import './index.scss';

const AddAddress = (props) => {
  const [firstTime, setfirstTime] = useState(false);
  const [Name, setName] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Pincode, setPincode] = useState('');
  const [Country, setCountry] = useState('');
  const [State, setState] = useState('');
  const [City, setCity] = useState('');
  const [address, setaddress] = useState('');
  const [errorName, seterrorName] = useState('');
  const [errorMobile, seterrorMobile] = useState('');
  const [errorPincode, seterrorPincode] = useState('');
  const [errorCountry, seterrorCountry] = useState('');
  const [errorState, seterrorState] = useState('');
  const [errorCity, seterrorCity] = useState('');
  const [erroraddress, seterroraddress] = useState('');

  const firebase = useContext(FirebaseContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const addressString = `${address}\n${City} - ${Pincode}\n${State}, ${Country}\nMobile: ${Mobile}`;
    props.hitAddressAddRemove({
      actionType: 'add',
      address: { address: addressString, name: Name },
    });
    setfirstTime(true);
  };

  useEffect(() => {
    if (firstTime) {
      firebase.saveDataToDatabase(
        props.authDetails.uid,
        'address',
        props.apparrelData.address
      );
      props.closeModal();
    }
  }, [props]);

  return (
    <>
      <Modal>
        <div className="heading">
          <h2>Add address</h2>
          <IoMdClose className="close" onClick={() => props.closeModal()} />
          <form onSubmit={handleSubmit}>
            <div className="flex-column">
              <input
                autoComplete="off"
                onBlur={(event) =>
                  !event.target.value ? seterrorName('Required') : null
                }
                className="input-data"
                type="text"
                value={Name}
                placeholder="Name *"
                onCl
                onChange={(event) => {
                  setName(event.target.value);
                  seterrorName('');
                }}
              />
              {errorName ? (
                <span className="error-text">{errorName}</span>
              ) : (
                <br />
              )}
            </div>
            <div className="flex-column">
              <input
                autoComplete="off"
                className="input-data"
                type="text"
                onBlur={(event) =>
                  !event.target.value ? seterrorMobile('Required') : null
                }
                value={Mobile}
                placeholder="Mobile *"
                onChange={(event) => {
                  setMobile(event.target.value);
                  seterrorMobile('');
                }}
              />
              {errorMobile ? (
                <span className="error-text">{errorMobile}</span>
              ) : (
                <br />
              )}
            </div>
            <div className="flex-row">
              <div className="flex-column">
                <input
                  autoComplete="off"
                  className="input-data"
                  id="pincode"
                  type="text"
                  onBlur={(event) =>
                    !event.target.value ? seterrorPincode('Required') : null
                  }
                  value={Pincode}
                  placeholder="Pincode *"
                  onChange={(event) => {
                    setPincode(event.target.value);
                    seterrorPincode('');
                  }}
                />
                {errorPincode ? (
                  <span className="error-text">{errorPincode}</span>
                ) : (
                  <br />
                )}
              </div>
              <div className="flex-column">
                <input
                  autoComplete="off"
                  className="input-data"
                  id="country"
                  type="text"
                  onBlur={(event) =>
                    !event.target.value ? seterrorCountry('Required') : null
                  }
                  value={Country}
                  placeholder="Country *"
                  onChange={(event) => {
                    setCountry(event.target.value);
                    seterrorCountry('');
                  }}
                />
                {errorCountry ? (
                  <span className="error-text">{errorCountry}</span>
                ) : (
                  <br />
                )}
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-column">
                <input
                  autoComplete="new-password"
                  className="input-data"
                  id="state"
                  type="text"
                  onBlur={(event) =>
                    !event.target.value ? seterrorState('Required') : null
                  }
                  value={State}
                  placeholder="State *"
                  onChange={(event) => {
                    setState(event.target.value);
                    seterrorState('');
                  }}
                />
                {errorState ? (
                  <span className="error-text">{errorState}</span>
                ) : (
                  <br />
                )}
              </div>
              <div className="flex-column">
                <input
                  autoComplete="new-password"
                  className="input-data"
                  id="city"
                  type="text"
                  onBlur={(event) =>
                    !event.target.value ? seterrorCity('Required') : null
                  }
                  value={City}
                  placeholder="City *"
                  onChange={(event) => {
                    setCity(event.target.value);
                    seterrorCity('');
                  }}
                />
                {errorCity ? (
                  <span className="error-text">{errorCity}</span>
                ) : (
                  <br />
                )}
              </div>
            </div>
            <div className="flex-column">
              <textarea
                autoComplete="new-password"
                id="address"
                className="input-data"
                type="textarea"
                onBlur={(event) =>
                  !event.target.value ? seterroraddress('Required') : null
                }
                value={address}
                placeholder="Address *"
                onChange={(event) => {
                  setaddress(event.target.value);
                  seterroraddress('');
                }}
              />
              {erroraddress ? (
                <span className="error-text">{erroraddress}</span>
              ) : (
                <br />
              )}
            </div>
            <input
              autoComplete="address"
              className="input-data button"
              type="submit"
              value="ADD ADDRESS"
              id="submit-address"
            />
          </form>
        </div>
      </Modal>
    </>
  );
};

AddAddress.propTypes = {
  closeModal: PropTypes.func.isRequired,
  hitAddressAddRemove: PropTypes.func.isRequired,
  authDetails: PropTypes.objectOf(PropTypes.object).isRequired,
  apparrelData: PropTypes.objectOf(PropTypes.object).isRequired,
};

const dispatchToProps = { hitAddressAddRemove };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default connect(mapStateToProps, dispatchToProps)(AddAddress);
