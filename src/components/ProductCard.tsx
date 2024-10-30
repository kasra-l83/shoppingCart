import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useAppDispatch } from "../redux/hook";
import { addTodo, removeTodo } from "../redux/cartSlice";

export const ProductCardSkeleton: React.FC= () =>{
  return (
    <div className="flex flex-col justify-around border border-[#e2dfdf] h-52 w-72 mb-8 rounded px-5">
      <div className="size-10 bg-lightGray rounded-full"></div>
      <div className="h-7 bg-lightGray rounded-lg"></div>
      <div className="h-6 bg-lightGray rounded-lg w-14"></div>
      <div className="h-4 bg-lightGray rounded w-20"></div>
      <div className="h-10 bg-lightGray rounded-lg w-28"></div>
    </div>
  )
}
export const ProductCard: React.FC<any>= ({product, user}) =>{
  const [add, setAdd]= useState<boolean>(false);
  const dispatch= useAppDispatch();
  const star= Math.floor(product.rating);

  const toggleButton= () =>{
    if(add=== false){
      dispatch(addTodo(product.title));
    }else {
      dispatch(removeTodo(product.title));
    }
    setAdd(!add);
  }

  return (
    <div className="flex flex-col justify-around border border-[#e2dfdf] h-52 w-72 mb-8 rounded font-semibold pl-5">
      <img src={user.image} className="size-10"/>
      <h2 className="text-lg">{product.title}</h2>
      <p>${product.price}</p>
      <span className="flex">
        {[...Array(star)].map((_, index) =>(
          <FaStar key={index}/>
        ))}
        {[...Array(5- star)].map((_, index) =>(
          <FaRegStar key={index+ star}/>
        ))}
      </span>
      <button onClick={toggleButton} className={`text-[white] px-4 py-2 rounded-lg font-light ${!add? "bg-[#0069D9] hover:bg-[#32577d] w-28" : "bg-[#C82333] hover:bg-[#902b35] w-40"}`}>{!add? "Add to Cart" : "Remove from Cart"}</button>
    </div>
  )
}