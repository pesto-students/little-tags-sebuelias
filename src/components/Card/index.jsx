import { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import "./index.sass"
import AddRemoveWhislist from '../AddRemoveWhislist';
import { hitWhislist } from "../../store/modules/apparrelData/actions"

const Card = (props) => {

  const [whislist, setwhislist] = useState(false)

  const handleAddWhislist = () => {
    props.hitWhislist({actionType: "add", productDetail: props.value})
    setwhislist(true)
}

const handleRemoveWhislist = () => {
    setwhislist(false)
    props.hitWhislist({actionType: "remove", productDetail: props.value})
}

  return (
  <>
    <div className="individual-content-box" key={props.index.toString()}>
      <div className="whislist-div"><AddRemoveWhislist whislist={whislist} handleAddWhislist={handleAddWhislist} handleRemoveWhislist={handleRemoveWhislist} productDetail={props.value}/></div>
    <img className="image-box" src={props.value.image} alt={props.value.title}  aria-hidden="true" onClick={() => {props.history.push({pathname: `/categories/${props.value.id}`, state: {product :props.value}})}}/>
    <h3 className="title-head">{props.value.title}</h3>
    <h3>&#8377; {props.value.price}</h3>
    </div>
    </>
  )
  }

Card.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.objectOf(PropTypes.string).isRequired,
    history: PropTypes.objectOf(PropTypes.object).isRequired,
    hitWhislist: PropTypes.func.isRequired
  };

const dispatchToProps = { hitWhislist };

const mapStateToProps = (state) => ({
    apparrelData: state.apparrelData,
  });
  
export default connect(mapStateToProps, dispatchToProps)(Card);
