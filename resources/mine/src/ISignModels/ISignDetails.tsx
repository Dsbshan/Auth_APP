import React from "react";

export interface ISignDetails {
    handleInputField: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event: React.FormEvent<HTMLInputElement>) => void

}
