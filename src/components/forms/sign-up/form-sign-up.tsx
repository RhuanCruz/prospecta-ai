import React from "react";

type Props = {
    children: React.ReactNode;
}

const FormSignUp = ({ children }: Props) => {
    return (
        <div>{children}</div>
    )
}

export default FormSignUp;
