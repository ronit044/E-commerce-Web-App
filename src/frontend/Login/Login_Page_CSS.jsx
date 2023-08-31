import styled from "styled-components";

export const LoginContainerCustom = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
    margin-top:8em;
    margin-left:38em;
`;

export const SignupTextCustom = styled.p`
    margin-top: 20px;
`;

export const Heading1 = styled.h1`
    margin-bottom: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Label = styled.label`
    font-weight: bold;
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Link = styled.a`
    color: #007bff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Warning = styled.p`
    margin-top: 20px;
    color:red;
`;
