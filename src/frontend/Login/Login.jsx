import React from "react";
import {
    LoginContainerCustom,
    SignupTextCustom,
    Heading1,
    Form,
    Label,
    Input,
    Button,
    Link
} from "./Login_Page_CSS";

function LoginPage() {
    return (
        <LoginContainerCustom>
            <Heading1>Login</Heading1>
            <Form>
                <Label htmlFor="username">Username:</Label>
                <Input type="text" id="username" name="username" required />
                <Label htmlFor="password">Password:</Label>
                <Input type="password" id="password" name="password" required />
                <Button type="submit">Login</Button>
            </Form>
            <SignupTextCustom>
                Don't have an account? <Link href="#">Signup</Link>
            </SignupTextCustom>
        </LoginContainerCustom>
    );
}

export default LoginPage;
