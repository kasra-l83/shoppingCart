import { useState } from "react";
import { useAppSelector } from "../redux/hook"
import { Link } from "react-router-dom";

export const AddCartPage: React.FC= () =>{
    const [quantity, setQuantity] = useState(0);
    const todoList= useAppSelector((state) => state.cart.list);

    const increase = () => {
        setQuantity(quantity+ 1);
    }
    const decrease = () => {
        if (quantity > 0) {
            setQuantity(quantity- 1);
        }
    }

    return (
        <div className="flex justify-between px-10">
            <div>
                {todoList.map((el, index) =>(
                    <div key={index} className="h-24 w-[756px] mx-auto border flex justify-around items-center">
                        <h2>{el.id}</h2>
                        <h2>{el.title}</h2>
                        <div className="flex">
                            <button onClick={decrease} className="size-5 bg-lightGray flex items-center justify-center">-</button>
                            <div className="size-5 flex items-center justify-center">{quantity}</div>
                            <button onClick={increase} className="size-5 bg-lightGray flex items-center justify-center">+</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-[350px] h-[600px] bg-darkGray p-5 text-[white]">
                <h4 className="text-3xl mb-5">{`Subtotal (${todoList.length}) items`}</h4>
                <Link to="/registration"><button disabled={todoList.length===0} className={`bg-[#0069D9] rounded w-full py-[6px] ${todoList.length!==0 ? "hover:bg-[#32577d]": ""}`} >Proceed to Checkout</button></Link>
            </div>
        </div>
    )
}