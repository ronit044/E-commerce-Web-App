import React from "react";
import Navbar from "./frontend/Navbar/Navbar";
import Login from "./frontend/Login/Login";
import Con from "./frontend/contact/contact";
import Signup from "./frontend/signup/signup";
import ProductDisplay from "./frontend/Product_Display/ProductDisplay";
import CartTile from "./frontend/Cart/Cart";
import UserCart from "./frontend/Cart/UserCart";
function Nav(){
    return <>
        <Navbar/>
    </>
}

function Login_Page(){
    return <>
        <Navbar/>
        <Login/>
    </>
}

function Contact(){
    return <>
        <Navbar/>
        <Con/>
    </>
}

function SignUP(){
    return <>
        <Navbar/>
        <Signup/>
    </>
}

function Product(){
    return <>
        <Navbar/>
        <ProductDisplay/>
    </>
}

function Cart(){
    return <>
        <Navbar/>
        {/* <CartTile/> */}
        <UserCart/>
            </>
}

export {Nav,Login_Page, Contact,SignUP,Product,Cart};