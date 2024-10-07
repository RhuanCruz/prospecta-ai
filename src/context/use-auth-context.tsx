import React, { useState, useContext } from "react";

type InitialValueProps = { 
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const InitialValues: InitialValueProps = {
    currentStep: 1,
    setCurrentStep: () =>undefined
}

const authContext = React.createContext(InitialValues);

const { Provider } = authContext;

export const AuthContextProvider = ( { children }: { children: React.ReactNode }) => {
    const [currentStep, setCurrentStep] =useState<number>(InitialValues.currentStep);


    const value = {
        currentStep,
        setCurrentStep
    }

    return (
        <Provider value={value}>
            {children}
        </Provider>
    )
}

export  const useAuthContext = () => {
    const state = React.useContext(authContext);
    return state;
}


