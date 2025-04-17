import React, { useState } from 'react';
import SignInDetails from "./SignInDetails.tsx";
import axios from "axios";
import {ISignIn} from "../Models/ISignIn.tsx";

const SignIn: React.FC = () => {
    const [signDetails, setSignDetails] = useState<ISignIn>({
        email: '',
        password: ''
    });

    const handleInputField = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;

        setSignDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        return await axios.get('/sanctum/csrf-cookie').then(res => {
            const response = axios.post('http://127.0.0.1:8000/api/sign-in',signDetails);
            console.log(response);
        });


    };




    return <SignInDetails handleInputField={handleInputField} handleSubmit={handleSubmit}/>

};

export default SignIn;
