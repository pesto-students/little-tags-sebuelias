// import React from 'react'
import './index.scss';
// import Men from '../../assets/categoryImages/men.jpg';
// import Women from '../../assets/categoryImages/women.jpg';

function Categories() {
  return (
    <div className="categories-container">
      <div className="item women">
        <h3 className="title">Women</h3>
        <p className="body">Lets find you something pretty</p>
      </div>

      <div className="item men">
        <h3 className="title">Men</h3>
        <p className="body">For the handsome</p>
      </div>

      <div className="item electronics">
        <h3 className="title">Electronics</h3>
        <p className="body">Gadgets are the new accessories</p>
      </div>

      <div className="item jewlery">
        <h3 className="title">Accessories</h3>
        <p className="body">Lets make you even prettier</p>
      </div>

      <div className="item all">
        <h3 className="title">All</h3>
        <p className="body">Go crazy</p>
      </div>
    </div>
  );
}

export default Categories;
