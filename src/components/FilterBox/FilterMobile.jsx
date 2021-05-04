import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Modal from '../Modal';
import Sort from '../Sort';
import './index.scss';

function FilterBoxMobile(props) {
  const [openModal, setopenModal] = useState(false);
  return !openModal ? (
    <div
      className="filter-button-container"
      onClick={() => setopenModal(true)}
      aria-hidden="true"
    >
      <h1> Sort and Filter </h1>
    </div>
  ) : (
    <Modal>
      <div className="box-div-filter-mobile">
        <IoMdClose className="close" onClick={() => {}} />
        <h4>Sort and Filter</h4>
        <div className="filter-wrapper">
          <div className="category-filter">
            <h5>Category</h5>
            <ul>
              <li
                onClick={() => props.filterBox('all-products')}
                aria-hidden="true"
                className={`Category ${
                  props.currCategory.toLowerCase() === 'all products'
                    ? 'selected-category'
                    : ''
                }`}
              >
                All
              </li>
              <li
                onClick={() => props.filterBox('men clothing')}
                aria-hidden="true"
                className={`Category ${
                  props.currCategory.toLowerCase() === 'men clothing'
                    ? 'selected-category'
                    : ''
                }`}
              >
                Mens
              </li>
              <li
                onClick={() => props.filterBox('women clothing')}
                aria-hidden="true"
                className={`Category ${
                  props.currCategory.toLowerCase() === 'women clothing'
                    ? 'selected-category'
                    : ''
                }`}
              >
                Women
              </li>
              <li
                onClick={() => props.filterBox('electronics')}
                aria-hidden="true"
                className={`Category ${
                  props.currCategory.toLowerCase() === 'electronics'
                    ? 'selected-category'
                    : ''
                }`}
              >
                Electronics
              </li>
              <li
                onClick={() => props.filterBox('jewelery')}
                aria-hidden="true"
                className={`Category ${
                  props.currCategory.toLowerCase() === 'jewelery'
                    ? 'selected-category'
                    : ''
                }`}
              >
                jewelery
              </li>
            </ul>
          </div>
          <div className="sort-container">
            <h5>SORT</h5>
            <Sort
              handleDropDownValue={(event) => props.handleDropDownValue(event)}
            />
          </div>
        </div>
        <div
          className="filter-apply button"
          onClick={() => setopenModal(true)}
          aria-hidden="true"
        >
          <h1> Apply </h1>
        </div>
      </div>
    </Modal>
  );
}

FilterBoxMobile.propTypes = {
  filterBox: PropTypes.func.isRequired,
  handleDropDownValue: PropTypes.func.isRequired,
  currCategory: PropTypes.string.isRequired,
};

export default FilterBoxMobile;
