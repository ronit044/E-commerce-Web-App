import React from "react";
import Navbar from "./frontend/Navbar/Navbar";
import Login from "./frontend/Login/Login";
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

export {Nav,Login_Page};