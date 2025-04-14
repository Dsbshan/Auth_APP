import React, { useState } from "react";
import SignIn from "./SignIn.tsx";
import { ISignInForm } from "../../Models/ISignInForm.tsx";

const SignInForm: React.FC = () => {
    const [SignDetails, setSignINDetails] = useState<ISignInForm>({
        email: "",
        password: "",
    });

    const handleInputField = (event) => {
        const { name, value } = event.target;

        setSignINDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div>
            <SignIn handleInputField={handleInputField} />
        </div>
    );
};

export default SignInForm;
