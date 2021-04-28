import PropTypes from 'prop-types';
import Sort from '../Sort';
import './index.scss';

function FilterBox(props) {
  return (
    <div className="box-div-filter">
      <h4>Filter</h4>
      <div>
        <h5>Category</h5>
        <ul>
          <li
            onClick={() => props.filterBox('all-products')}
            aria-hidden="true"
            className="Category"
          >
            All Products
          </li>
          <li
            onClick={() => props.filterBox('men clothing')}
            aria-hidden="true"
            className="Category"
          >
            Mens Clothing
          </li>
          <li
            onClick={() => props.filterBox('women clothing')}
            aria-hidden="true"
            className="Category"
          >
            Women Clothing
          </li>
          <li
            onClick={() => props.filterBox('electronics')}
            aria-hidden="true"
            className="Category"
          >
            Electronics
          </li>
          <li
            onClick={() => props.filterBox('jewelery')}
            aria-hidden="true"
            className="Category"
          >
            Jewlery
          </li>
        </ul>
      </div>
      <div>
        <h5>SORT</h5>
        <Sort handleDropDownValue={(event)=>props.handleDropDownValue(event)}/>
      </div>
    </div>
  );
}

FilterBox.propTypes = {
  filterBox: PropTypes.func.isRequired,
  handleDropDownValue: PropTypes.func.isRequired,
};

export default FilterBox;
