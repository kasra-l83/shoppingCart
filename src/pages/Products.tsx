import { fetchProductsList } from "../api/products.api"
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ProductCard, ProductCardSkeleton } from "../components/ProductCard";
import { IData } from "../types/global.type";
import { fetchUsersListByIds } from "../api/users.api";
import { IUser } from "../types/users.type";
import { Controller, useForm } from "react-hook-form";
import { useAppSelector } from "../redux/hook";

export const ProductsPage: React.FC= () =>{
    const [data, setData]= React.useState<IData[]>([]);
    const {control}= useForm()
    const todoList= useAppSelector((state) => state.cart.list)

    React.useEffect(() =>{
        console.log(todoList);
    },[todoList])

    const products= useQuery({
        queryKey: ["products"],
        queryFn: () => fetchProductsList()
    })
    const users= useQuery({
        queryKey: ["usersById", (products.data?.products || []).map((el: any) => String(el.id)).join("")],
        queryFn: () => fetchUsersListByIds(
            (products.data?.products || []).map((el: any) => Number(el.id))
        )
    })
    const disable= (!products.isSuccess || !products.data || !users.isSuccess || !users.data)
    
    React.useEffect(() =>{
        if (disable) return;
        const newData: IData[]= [];
        for (const product of products.data.products) {
            const user= users.data.find(
                (el) => Number(el.id=== Number(product.id))
            ) as IUser
            newData.push({ product, user });
        }
        setData((prevState) => [...prevState, ...newData]);
    }, [products.isSuccess, products.data, users.isSuccess, users.data])

    return (
        <div className="flex justify-between px-10">
            <div className="w-64 h-[600px] bg-darkGray text-[white] p-5 space-y-5">
                <h4 className="text-3xl">Filter Products</h4>
                <Controller disabled={disable} name="radio" control={control} render={({ field }) =>(
                    <>
                        <input type="radio" {...field}/>
                        <input type="radio" {...field}/>
                    </>
                )}/>
                <button className={`text-darkGray w-full rounded h-9 py-[6px] ${disable ? "bg-lightGray" : "bg-[white]"}`} disabled={disable}>Clear Filters</button>
            </div>
            <div className="max-w-[1000px] flex flex-wrap justify-between mt-5">
                {(products.isLoading || users.isLoading) && (
                    <>
                        {Array.from({length: 9}, (_, index) =>(
                            <ProductCardSkeleton key={index}/>
                        ))}
                    </>
                )}
                {data.map((el, index) =>{
                    return (
                        <ProductCard key={index} product={el.product} user={el.user}/>
                    )
                })}
            </div>
        </div>
    )
}