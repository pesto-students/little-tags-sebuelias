import PropTypes from 'prop-types';
import './index.scss';
import womenCategory from '../../assets/categoryImages/women.jpg';
import menCategory from '../../assets/categoryImages/men.jpg';
import accessories from '../../assets/categoryImages/accessories.jpg';
import electronics from '../../assets/categoryImages/electronics.jpg';
import all from '../../assets/categoryImages/all.jpg';

function Categories(props) {
  return (
    <div className="categories-container">
      <div
        className="item women"
        onClick={() => {
          props.history.push({
            pathname: '/categories',
            state: { QueryCategory: 'women clothing' },
          });
        }}
        aria-hidden="true"
      >
        <img src={womenCategory} alt="Womens Category" />
        <div className="image-overlay">
          <h3 className="title">Women</h3>
          <p className="body">Lets find you something pretty</p>
        </div>
      </div>

      <div
        className="item men"
        onClick={() => {
          props.history.push({
            pathname: '/categories',
            state: { QueryCategory: 'men clothing' },
          });
        }}
        aria-hidden="true"
      >
        <img src={menCategory} alt="Mens Category" />
        <div className="image-overlay">
          <h3 className="title">Men</h3>
          <p className="body">For the handsome</p>
        </div>
      </div>

      <div
        className="item electronics"
        onClick={() => {
          props.history.push({
            pathname: '/categories',
            state: { QueryCategory: 'electronics' },
          });
        }}
        aria-hidden="true"
      >
        <img src={electronics} alt="Electronics Category" />
        <div className="image-overlay">
          <h3 className="title">Electronics</h3>
          <p className="body">Gadgets are the new accessories</p>
        </div>
      </div>

      <div
        className="item jewelery"
        onClick={() => {
          props.history.push({
            pathname: '/categories',
            state: { QueryCategory: 'jewelery' },
          });
        }}
        aria-hidden="true"
      >
        <img src={accessories} alt="Accessories Category" />
        <div className="image-overlay">
          <h3 className="title">Accessories</h3>
          <p className="body">Lets make you even prettier</p>
        </div>
      </div>

      <div
        className="item all"
        onClick={() => {
          props.history.push({
            pathname: '/categories',
            state: { QueryCategory: 'all-products' },
          });
        }}
        aria-hidden="true"
      >
        <img src={all} alt="All Category" />
        <div className="image-overlay">
          <h3 className="title">All</h3>
          <p className="body">Go crazy</p>
        </div>
      </div>
    </div>
  );
}

Categories.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Categories;
