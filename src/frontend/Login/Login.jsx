import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    LoginContainerCustom,
    SignupTextCustom,
    Heading1,
    Form,
    Label,
    Input,
    Button,
    Warning
} from "./Login_Page_CSS";
import Axios from "../../Axios";

function LoginPage() {
    const [Warn, setWarn] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        var { username, password } = e.target.elements;
        const res = await Axios.post("/loginVerification", { "Username": username.value, "Password": password.value });
        const r = res.data.LoginStatus;
        if (r === true) {
            localStorage.setItem("userName",username);
            localStorage.setItem("pswd",password);
            window.location.href = "/";
        }
        else {
            setWarn(true);
        }
    }
    return (
        <LoginContainerCustom>
            <Heading1>Login</Heading1>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="username">Username:</Label>
                <Input type="text" id="username" name="username" required />
                <Label htmlFor="password">Password:</Label>
                <Input type="password" id="password" name="password" required />
                <Button type="submit">Login</Button>
            </Form>
            {Warn ? <Warning>Either Username or password is Incorrect!! try Again!!</Warning> : null}
            <SignupTextCustom>
                Don't have an account? <Link to="/signup">Signup</Link>
            </SignupTextCustom>
        </LoginContainerCustom>
    );
}

export default LoginPage;
