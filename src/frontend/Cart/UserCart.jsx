import React, { useEffect, useState } from "react";
import Axios from "../../Axios";
import CartTile from "./Cart";
export default function userCart(){
    const [UserProducts,SetUserProducts]=useState([]);
    useEffect(()=>{Axios.get("/CartData").then((r)=>{
        SetUserProducts(r.data);
    })},[]);

    return <>
        {UserProducts.length!==0?(UserProducts.map((e)=>{
            <CartTile
                name={e.name}
                price={e.price}
                img={e.img}
            />
        })): <div>Cart is Empty</div>}
    </>
}

