import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Modal from '../Modal';
import Sort from '../Sort';
import './index.scss';

function FilterBoxMobile(props) {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openSortModal, setOpenSortModal] = useState(false);

  const filterContent = (filter) => {
    props.filterBox(filter);
    setOpenFilterModal(false);
  };
  return (
    <>
      <div className="filter-button-container">
        <h1 onClick={() => setOpenSortModal(true)} aria-hidden="true">
          Sort
        </h1>
        <h1 onClick={() => setOpenFilterModal(true)} aria-hidden="true">
          Filter
        </h1>
      </div>
      {openSortModal ? (
        <Modal>
          <div className="box-div-filter-mobile">
            <IoMdClose
              className="close"
              onClick={() => {
                setOpenSortModal(false);
              }}
            />
            <div className="sort-container">
              <h4>SORT</h4>
              <Sort
                handleDropDownValue={(event) => {
                  props.handleDropDownValue(event);
                  setOpenSortModal(false);
                }}
              />
            </div>
          </div>
        </Modal>
      ) : null}
      {openFilterModal ? (
        <Modal>
          <div className="box-div-filter-mobile">
            <IoMdClose
              className="close"
              onClick={() => {
                setOpenFilterModal(false);
              }}
            />
            <h4>Filter</h4>
            <div className="category-filter">
              <h5>Category</h5>
              <ul>
                <li
                  onClick={() => {
                    filterContent('all-products');
                  }}
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
                  onClick={() => {
                    filterContent('men clothing');
                  }}
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
                  onClick={() => {
                    filterContent('women clothing');
                  }}
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
                  onClick={() => {
                    filterContent('electronics');
                  }}
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
                  onClick={() => {
                    filterContent('jewelery');
                  }}
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
          </div>
        </Modal>
      ) : null}
      ;
    </>
  );
}

FilterBoxMobile.propTypes = {
  filterBox: PropTypes.func.isRequired,
  handleDropDownValue: PropTypes.func.isRequired,
  currCategory: PropTypes.string.isRequired,
};

export default FilterBoxMobile;
