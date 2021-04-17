import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Tooltip from "../Tooltip"
import "./index.scss"
import { hitWhislist } from "../../store/modules/apparrelData/actions"


function AddRemoveWhislist(props) {

    useEffect(()=>{
        console.log("props", props)
    })

    const [whislist, setwhislist] = useState(false)

    const handleAddWhislist = () => {
        props.hitWhislist({actionType: "add", productDetail: props.productDetail})
        setwhislist(true)
    }

    const handleRemoveWhislist = () => {
        setwhislist(false)
        props.hitWhislist({actionType: "remove", productDetail: props.productDetail})
    }

    return (
        <>
        {whislist ? <Tooltip add="Remove from whislist"><FaHeart className="whislist-added" onClick={()=>{handleRemoveWhislist()}}/> </Tooltip>:
      <Tooltip add="Add to whislist"><FaRegHeart className="whislist-removed" onClick={()=>{handleAddWhislist()}}/></Tooltip> }
      </>
    )
}

AddRemoveWhislist.propTypes = {
    productDetail: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        category: PropTypes.string,
        image: PropTypes.string,
        id: PropTypes.number,
        price: PropTypes.number,
      }).isRequired,
    hitWhislist: PropTypes.func.isRequired
  };

const dispatchToProps = { hitWhislist };

const mapStateToProps = (state) => ({
    apparrelData: state.apparrelData,
  });

export default connect(mapStateToProps, dispatchToProps)(AddRemoveWhislist);
