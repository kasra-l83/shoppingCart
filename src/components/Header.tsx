import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import {Link} from "react-router-dom"
import { useAppSelector } from "../redux/hook";
import { useState } from "react";

export const Header: React.FC = () =>{
  const todoList= useAppSelector((state) => state.cart);
  const [open, setOpen]= useState<boolean>(false);

  const toggleButton= () =>{
    setOpen(!open)
  }

  return (
    <div className="flex justify-around items-center h-16 bg-darkGray mb-5">
      <Link to="/"><h1 className="text-xl text-[white]">Shopping Cart</h1></Link>
      <input type="text" placeholder="Search a product..." className="w-[500px] h-9 px-3 py-[6px] text-base font-normal rounded"/>
      <button onClick={toggleButton} className="flex justify-around items-center w-20 h-10 bg-lightGreen hover:bg-[green] text-[white] rounded">
      <FaCartShopping className="size-6"/>
      {todoList.list.length}
      <FaCaretDown />
      </button>
      {open && todoList.list.length===0 && (
        <div className="w-[368px] h-10 rounded absolute flex items-center border-lightGray bg-[white] border right-32 top-14 py-2 pl-2">Cart is Empty!</div>
      )}
      {open && todoList.list.length>0 && (
        <div className="w-[368px] rounded absolute flex flex-col border-lightGray bg-[white] border right-32 top-14 px-2 py-1 space-y-1">
          <p>Please go to cart page</p>
          <Link to="/addCart" className="w-full"><button className="bg-[#0069D9] hover:bg-[#32577d] w-full h-9 rounded text-[white]">Click</button></Link>
        </div>
      )}
    </div>
  )
}