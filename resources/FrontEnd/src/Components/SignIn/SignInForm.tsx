import React, {useState} from 'react';
import SignIn from "./SignIn.tsx";
import {ISignInForm} from "../../Models/ISignInForm.tsx";

const SignInForm:React.FC = () => {

    const [SignDetails, setSignINFill] = useState<ISignInForm>(
        {
            email: '',
            password: ''
        }
    )



    return (
        <div>
           <SignIn/>
        </div>
    );
};

export default SignInForm;
