import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import {
  hitCartAddRemove,
  requestData,
  hitWhislist,
  changeSignUpBool,
} from '../../store/modules/apparrelData/actions';
import AddRemoveWhislist from '../../components/AddRemoveWhislist';
import OrderQuantity from '../../components/OrderQuantity';
import OrderSize from '../../components/OrderSize';
import Cart from '../../components/Cart';

import './index.scss';
import FirebaseContext from '../../services/Firebase/context';

const Product = (props) => {
  const firebase = useContext(FirebaseContext);
  const [productDetail, setproductDetail] = useState(
    props.location.state ? props.location.state.product : {}
  );
  const [quantity, setquantity] = useState(1);
  const [size, setsize] = useState('');
  const [error, seterror] = useState('');
  const [openModal, setopenModal] = useState(false);
  const [addBagString, setaddBagString] = useState(false);
  const [whislist, setwhislist] = useState(false);

  useEffect(() => {
    if (props.authDetails) {
        if (addBagString) {
      firebase.saveDataToDatabase(
        props.authDetails.uid,
        'cart',
        props.apparrelData.cart
      );
    }}
    setaddBagString(false)
  }, [addBagString]);

  useEffect(() => {
    if (props.authDetails) {
      const checkWhislist = props.apparrelData.whisList.filter(
        ({ id }) => id === productDetail.id
      );
      if (checkWhislist.length) {
        setwhislist(true);
      }
    }
  }, [props]);

  useEffect(() => {
    if (props.authDetails) {
      firebase.saveDataToDatabase(
        props.authDetails.uid,
        'whisList',
        props.apparrelData.whisList
      );
    }
  }, [whislist]);

  const handleAddWhislist = () => {
    if (props.authDetails) {
      setwhislist(true);
      props.hitWhislist({ actionType: 'add', productDetail });
    } else {
      props.changeSignUpBool({signUpModal:true})
    }
  };

  const handleRemoveWhislist = () => {
    if (props.authDetails) {
      setwhislist(false);
      props.hitWhislist({ actionType: 'remove', productDetail });
    } else {
      props.changeSignUpBool({signUpModal:true})
    }
  };

  useEffect(() => {
    if (!props.apparrelData.apparrelData) {
      props.requestData();
    }
  }, []);

  useEffect(() => {
    if (props.apparrelData.apparrelData) {
      const productGet = props.apparrelData.apparrelData.filter(
        ({ id }) => id === Number(props.match.params.id)
      );
      if (productGet.length) {
        if (!productDetail.id) {
          setproductDetail(productGet[0]);
        }
      } else {
        props.history.push({ pathname: '/error' });
      }
    }
  }, [props]);

  const handleAddBag = () => {
    if (props.authDetails) {
      if (quantity === 0) {
        seterror('Please provide the order quatity');
        return;
      }
      if (
        (productDetail.category === 'women clothing' ||
          productDetail.category === 'men clothing') &&
        !size
      ) {
        seterror('Please select the apparrel size');
        return;
      }
      props.hitCartAddRemove({
        actionType: 'add',
        productDetail: { ...productDetail, quantity, size },
      });
      setaddBagString(true);
      setsize("")
      setquantity(1)
    } else {
      props.changeSignUpBool({signUpModal:true})
    }
  };

  return (
    <>
      <div style={{ height: '100px' }} />
      {openModal ? (
        <Cart
          {...props}
          productDetail={productDetail}
          closeModal={() => {
            setopenModal(false);
            setaddBagString(false);
            setquantity(1);
          }}
        />
      ) : null}
      <div className="flex-row flex-one display-product">
        <div className="flex-row image-crousel-box">
          <img
            className="image-box"
            src={productDetail.image}
            alt={productDetail.title}
            aria-hidden="true"
            onClick={() => {}}
          />
        </div>
        <div className="flex-column content-display-box">
          <div className="flex-column title-head">
            <h2>{productDetail.title}</h2>
            <h2>&#8377; {productDetail.price}</h2>
          </div>

          {productDetail.category === 'women clothing' ||
          productDetail.category === 'men clothing' ? (
            <div className="flex-column">
              <OrderSize
              Size={size}
                setSize={(value) => {
                  setsize(value);
                  seterror('');
                }}
              />
            </div>
          ) : null}

          <div className="flex-column button-group">
            <div className="flex-column">
                <OrderQuantity
                  setquantity={quantity}
                  setorderQuantity={(value) => {
                    setquantity(value);
                    seterror('');
                  }}
                />
            </div>

            <div className="flex-row add-button">
            <div className="add-to-bag">
                <button type="button" className="button" onClick={handleAddBag}>
                  ADD TO BAG
                </button>
            </div>
              <div className="add-to-whislist">
                <AddRemoveWhislist
                  whislist={whislist}
                  handleAddWhislist={handleAddWhislist}
                  handleRemoveWhislist={handleRemoveWhislist}
                  productDetail={productDetail}
                />
              </div>
            </div>
            {error ? <span style={{ color: 'red' }}>{error}</span> : null}
          </div>

          <div className="flex-column description">
            <h2>DESCRIPTION</h2>
            <p>{productDetail.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  hitCartAddRemove: PropTypes.func.isRequired,
  requestData: PropTypes.func.isRequired,
  changeSignUpBool: PropTypes.func.isRequired,
  hitWhislist: PropTypes.func.isRequired,
  apparrelData: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  authDetails: PropTypes.objectOf(PropTypes.object).isRequired,
};

const dispatchToProps = { hitCartAddRemove, requestData, hitWhislist, changeSignUpBool };

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default connect(mapStateToProps, dispatchToProps)(Product);
