import PropTypes from 'prop-types';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Tooltip from "../Tooltip"
import "./index.scss"


function AddRemoveWhislist(props) {

    return (
        <>
        {props.whislist ? <Tooltip add="Remove from whislist"><FaHeart className="whislist-added" onClick={()=>{props.handleRemoveWhislist()}}/> </Tooltip>:
      <Tooltip add="Add to whislist"><FaRegHeart className="whislist-removed" onClick={()=>{props.handleAddWhislist()}}/></Tooltip> }
      </>
    )
}

AddRemoveWhislist.propTypes = {
    whislist: PropTypes.bool.isRequired,
    handleAddWhislist: PropTypes.func.isRequired,
    handleRemoveWhislist: PropTypes.func.isRequired,
  };

export default AddRemoveWhislist;
