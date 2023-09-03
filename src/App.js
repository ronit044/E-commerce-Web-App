import React from "react";
import Navbar from "./frontend/Navbar/Navbar";
import Login from "./frontend/Login/Login";
import Con from "./frontend/contact/contact";
import Signup from "./frontend/signup/signup";
import ProductDisplay from "./frontend/Product_Display/ProductDisplay";
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

export {Nav,Login_Page, Contact,SignUP,Product};