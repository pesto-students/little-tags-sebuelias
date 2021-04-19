import PropTypes from 'prop-types';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io"
import "./index.scss"

const OrderQuantity = ({setquantity, setorderQuantity}) => (
        <>
             <h3>QUANTITY:</h3>
                    <div className="flex-row add-substract-quantity">
                    <IoIosArrowDropdown onClick={()=>setquantity > 1 && setorderQuantity(setquantity-1)}/><p>{setquantity}</p>< IoIosArrowDropup onClick={()=>{setorderQuantity(setquantity+1)}}/>
                    </div>
        </>
    )

OrderQuantity.propTypes = {
    setorderQuantity: PropTypes.func.isRequired,
    setquantity: PropTypes.number.isRequired
  };


export default OrderQuantity;
