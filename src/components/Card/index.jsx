import PropTypes from 'prop-types';
import "./index.sass"
import AddRemoveWhislist from '../AddRemoveWhislist';

const Card = ({ index, value, history }) => (
  <>
    <div className="individual-content-box" key={index.toString()}>
      <div className="whislist-div"><AddRemoveWhislist productDetail={value}/></div>
    <img className="image-box" src={value.image} alt={value.title}  aria-hidden="true" onClick={() => {history.push({pathname: `/categories/${value.id}`, state: {product :value}})}}/>
    <h3 className="title-head">{value.title}</h3>
    <h3>&#8377; {value.price}</h3>
    </div>
    </>
  )

Card.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.objectOf(PropTypes.string).isRequired,
    history: PropTypes.objectOf(PropTypes.object).isRequired,
  };

export default Card;
