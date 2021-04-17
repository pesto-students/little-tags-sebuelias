import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import AddRemoveWhislist from "../../components/AddRemoveWhislist"
import OrderQuantity from '../../components/OrderQuantity';
import OrderSize from '../../components/OrderSize';

import "./index.scss"

const Product = (props) => {

    const [productDetail,] = useState(props.location.state.product || {})

    useEffect(() => {
        console.log("inside product dfetails page", props)
        console.log(productDetail)
    },[])

    return (
    <>
    <div style={{height:"100px"}}/>
    <div className="flex-row flex-one display-product">
        <div className="flex-row image-crousel-box">
        <img className="image-box" src={productDetail.image} alt={productDetail.title}  aria-hidden="true" onClick={() => {}}/>
        </div>
        <div className="flex-column content-display-box">
            <div className="flex-column">
            <h2 className="title-head">{productDetail.title}</h2>
            <h2>&#8377; {productDetail.price}</h2>
            </div>
            <div className="flex-row">
                <div className="flex-column">
                    <OrderQuantity />
                    </div>
                    <div className="flex-column" style={{margin: "0 0 0 26px"}}>
                        <OrderSize />
                    </div>
            </div>
            <div className="flex-row">
                <div className="add-to-bag"><button type="button">ADD TO BAG</button></div>
                <div className="add-to-whislist"><AddRemoveWhislist productDetail={productDetail}/></div>
            </div>
            <div className="flex-column">
                <h2>PRODUCT DESCRIPTION</h2>
                <p>{productDetail.description}</p>
            </div>
        </div>
    </div>
    </>
)
}

Product.propTypes = {
    location: PropTypes.objectOf(PropTypes.object).isRequired,
  };

export default Product;
