import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MdRemoveShoppingCart } from 'react-icons/md';
import AddRemoveWhislist from '../AddRemoveWhislist';
import {
  hitWhislist,
  hitCartAddRemove,
  hitAddRemoveApparelCount,
} from '../../store/modules/apparrelData/actions';
import Tooltip from '../Tooltip';
import OrderQuantity from '../OrderQuantity';
import './index.scss';

const CartSingle = (props) => {
  const [quantity, setquantity] = useState(props.productDetail.quantity);

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
  }, [props]);

  useEffect(() => {
    props.hitAddRemoveApparelCount({ index: props.index, quantity });
  }, [quantity]);

  return (
    <>
      <div className="flex-row individual-cart-box">
        <img
          className="cart-product-image"
          src={props.productDetail.image}
          alt={props.productDetail.title}
          aria-hidden="true"
          onClick={() => {
            props.closeModal();
            props.history.push({
              pathname: `/categories/${props.productDetail.id}`,
              state: { product: props.productDetail },
            });
          }}
        />
        <div className="flex-column">
          <h3 className="title-head">{props.productDetail.title}</h3>
          <h3 className="size-info">
            {props.productDetail.size
              ? `SIZE: ${props.productDetail.size}`
              : null}
          </h3>
          <div className="flex-row">
            <AddRemoveWhislist
              whislist={false}
              handleAddWhislist={handleAddWhislist}
              handleRemoveWhislist={() => {}}
              productDetail={props.productDetail}
            />
            <Tooltip add="remove from cart">
              <div className="cart-remove">
                <MdRemoveShoppingCart onClick={handleRemoveCart} />
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="flex-column">
          <OrderQuantity
            setquantity={quantity}
            setorderQuantity={(quantityValue) => {
              setquantity(quantityValue);
            }}
          />
        </div>
        <h2>&#8377; {props.productDetail.price}</h2>
      </div>
    </>
  );
};

CartSingle.propTypes = {
  productDetail: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  closeModal: PropTypes.func.isRequired,
  hitWhislist: PropTypes.func.isRequired,
  hitCartAddRemove: PropTypes.func.isRequired,
  hitAddRemoveApparelCount: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const dispatchToProps = {
  hitWhislist,
  hitCartAddRemove,
  hitAddRemoveApparelCount,
};

const mapStateToProps = (state) => ({
  apparrelData: state.apparrelData,
});

export default connect(mapStateToProps, dispatchToProps)(CartSingle);
