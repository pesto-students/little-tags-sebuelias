import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RiDeleteBin2Line } from 'react-icons/ri';

import AddRemoveWhislist from '../AddRemoveWhislist';
import {
  hitWhislist,
  hitCartAddRemove,
  hitAddRemoveApparelCount,
} from '../../store/modules/apparrelData/actions';
import OrderQuantity from '../OrderQuantity';
import FirebaseContext from '../../services/Firebase/context';
import './index.scss';

const CartSingle = (props) => {
  const [quantity, setquantity] = useState(props.productDetail.quantity);
  const firebase = useContext(FirebaseContext);

  const handleAddWhislist = () => {
    props.hitCartAddRemove({ actionType: 'remove', index: props.index });
    props.hitWhislist({
      actionType: 'add',
      productDetail: props.productDetail,
    });
  };

  const handleRemoveCart = (event) => {
    event.preventDefault();
    props.hitCartAddRemove({ actionType: 'remove', index: props.index });
  };

  useEffect(() => {
    setquantity(props.productDetail.quantity);
    firebase.saveDataToDatabase(
      props.authDetails.uid,
      'cart',
      props.apparrelData.cart
    );
    firebase.saveDataToDatabase(
      props.authDetails.uid,
      'whisList',
      props.apparrelData.whisList
    );
  }, [props]);

  useEffect(() => {
    props.hitAddRemoveApparelCount({ index: props.index, quantity });
  }, [quantity]);

  return (
    <>
      <div className="flex-row individual-cart-box">
        <div className="flex-row">
          <img
            className="cart-product-image"
            src={props.productDetail.image}
            alt={props.productDetail.title}
            aria-hidden="true"
            onClick={() => {
              props.history.push({
                pathname: `/categories/${props.productDetail.id}`,
                state: { product: props.productDetail },
              });
            }}
          />
          <div className="flex-column cart-title-whislist">
            <h3 className="title-head">{props.productDetail.title}</h3>
            <h3 className="size-info">
              {props.productDetail.size
                ? `SIZE: ${props.productDetail.size}`
                : null}
            </h3>
            <div className="flex-row">
              <AddRemoveWhislist
                className="icons"
                whislist={false}
                handleAddWhislist={handleAddWhislist}
                handleRemoveWhislist={() => {}}
                productDetail={props.productDetail}
              />
              <RiDeleteBin2Line className="icons" onClick={handleRemoveCart} />
            </div>
          </div>
        </div>
        <div className="flex-column quantity">
          <OrderQuantity
            setquantity={quantity}
            setorderQuantity={(quantityValue) => {
              setquantity(quantityValue);
            }}
          />
        </div>
        <h2>&#8377; {(props.productDetail.price * quantity).toFixed(2)}</h2>
      </div>
    </>
  );
};

CartSingle.propTypes = {
  productDetail: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  hitWhislist: PropTypes.func.isRequired,
  hitCartAddRemove: PropTypes.func.isRequired,
  hitAddRemoveApparelCount: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  authDetails: PropTypes.objectOf(PropTypes.object).isRequired,
  apparrelData: PropTypes.objectOf(PropTypes.object).isRequired,
};

const dispatchToProps = {
  hitWhislist,
  hitCartAddRemove,
  hitAddRemoveApparelCount,
};

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
  authDetails: state.authDetails.auth,
});

export default connect(mapStateToProps, dispatchToProps)(CartSingle);
