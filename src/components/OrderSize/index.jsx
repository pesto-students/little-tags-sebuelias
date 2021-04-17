import { useState } from "react"
import "./index.scss"

const OrderSize = () => {

    const [size, setsize] = useState("")

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

export default OrderSize;
