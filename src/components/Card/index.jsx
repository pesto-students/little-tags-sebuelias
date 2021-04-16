import PropTypes from 'prop-types';
import "./index.sass"

const Card = (props) => (
  <>
    <div className="individual-content-box" key={props.index.toString()}>
    <img className="image-box" src={props.value.image} alt="test" />
    <h3 className="title-head">{props.value.title}</h3>
    <h3>&#8377; {props.value.price}</h3>
    </div>
    </>
)

Card.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.objectOf(PropTypes.string).isRequired,
  };

export default Card;
