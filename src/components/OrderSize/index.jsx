import PropTypes from 'prop-types';
import { useState, useEffect } from "react"
import "./index.scss"

const OrderSize = ({setSize}) => {

    const [size, setsize] = useState("")

    useEffect(() => {
        setSize(size)
    }, [size])

    return (
        <>
                    <h3>SIZE:</h3>
                    <div className="flex-row">
                        <p className={`size-circle ${size === "S" ? "size-selected" : "size-unselected"}`} onClick={()=>{setsize('S')}} aria-hidden="true">S</p>
                        <p className={`size-circle ${size === "M" ? "size-selected" : "size-unselected"}`} onClick={()=>{setsize('M')}} aria-hidden="true">M</p>
                        <p className={`size-circle ${size === "L" ? "size-selected" : "size-unselected"}`} onClick={()=>{setsize('L')}} aria-hidden="true">L</p>
                        <p className={`size-circle ${size === "XL" ? "size-selected" : "size-unselected"}`} onClick={()=>{setsize('XL')}} aria-hidden="true">XL</p>
                        <p className={`size-circle ${size === "XXL" ? "size-selected" : "size-unselected"}`} onClick={()=>{setsize('XXL')}} aria-hidden="true">XXL</p>
                    </div>
        </>
    )   
}

OrderSize.propTypes = {
    setSize: PropTypes.func.isRequired,
  };



export default OrderSize;
