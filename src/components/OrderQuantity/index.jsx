import { useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io"
import "./index.scss"

const OrderQuantity = () => {

    const [orderQuantity, setorderQuantity] = useState(0)

    return (
        <>
             <h3>QUANTITY:</h3>
                    <div className="flex-row add-substract-quantity">
                    <IoIosArrowDropdown onClick={()=>{setorderQuantity((value)=> value+1)}}/><p>{orderQuantity}</p>< IoIosArrowDropup onClick={()=>orderQuantity > 0 && setorderQuantity((value)=> value-1)}/>
                    </div>
        </>
    )
}

export default OrderQuantity;