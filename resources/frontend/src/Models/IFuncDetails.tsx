import React from "react";

export interface IFuncDetails {
    handleInputField: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

