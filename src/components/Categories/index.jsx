import PropTypes from 'prop-types';
import './index.scss';

function Categories(props) {
  return (
    <div className="categories-container">
      <div className="item women" onClick={() => {props.history.push({pathname: '/categories', state: { QueryCategory: "women clothing"}})}} aria-hidden="true">
        <h3 className="title">Women</h3>
        <p className="body">Lets find you something pretty</p>
      </div>

      <div className="item men" onClick={() => {props.history.push({pathname: '/categories', state: { QueryCategory: "men clothing"}})}} aria-hidden="true">
        <h3 className="title">Men</h3>
        <p className="body">For the handsome</p>
      </div>

      <div className="item electronics" onClick={() => {props.history.push({pathname: '/categories', state: { QueryCategory: "electronics"}})}} aria-hidden="true">
        <h3 className="title">Electronics</h3>
        <p className="body">Gadgets are the new accessories</p>
      </div>

      <div className="item jewlery" onClick={() => {props.history.push({pathname: '/categories', state: { QueryCategory: "jewelery"}})}} aria-hidden="true">
        <h3 className="title">Accessories</h3>
        <p className="body">Lets make you even prettier</p>
      </div>

      <div className="item all" onClick={() => {props.history.push({pathname: '/categories', state: { QueryCategory: "all-products"}})}} aria-hidden="true">
        <h3 className="title">All</h3>
        <p className="body">Go crazy</p>
      </div>
    </div>
  );
}

Categories.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default Categories;
