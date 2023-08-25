import React from "react";
import Navbar from "./frontend/Navbar/Navbar";
import Login from "./frontend/Login/Login";
import Con from "./frontend/contact/contact";
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


export {Nav,Login_Page, Contact};