import PropTypes from 'prop-types';
import './index.scss';

function Categories(props) {
  return (
    <div className="categories-container">
      <div className="item category-1" onClick={() => {props.history.push({pathname: '/categories', state: { QueryCategory: "women clothing"}})}} aria-hidden="true">WOMENS CLOTHING</div>
      <div className="item category-2" onClick={() => {props.history.push({pathname: '/categories', state: { QueryCategory: "men clothing"}})}} aria-hidden="true">MENS CLOTHING</div>
      <div className="item category-3" onClick={() => {props.history.push({pathname: '/categories', state: { QueryCategory: "electronics"}})}} aria-hidden="true">ELECTRONICS</div>
      <div className="item category-4" onClick={() => {props.history.push({pathname: '/categories', state: { QueryCategory: "jewelery"}})}} aria-hidden="true">JWELLERY</div>
      <div className="item category-5" onClick={() => {props.history.push({pathname: '/categories', state: { QueryCategory: "all-products"}})}} aria-hidden="true">ALL PRODUCTS</div>
    </div>
  );
}

Categories.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default Categories;
