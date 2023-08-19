import React from "react";
import "./Login_Page.css";

function Login_Page() {
    return (
        <div className="login-container-custom">
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required/>
                <button type="submit">Login</button>
            </form>
            <p className="signup-text-custom">Don't have an account? <a href="#">Signup</a></p>
        </div>
    );
}

export default Login_Page;
