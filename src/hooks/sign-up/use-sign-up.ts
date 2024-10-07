import { useForm } from "react-hook-form";
import { useSignUp } from "@clerk/nextjs";
import { toast, useToast } from "../use-toast"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { userRegistrationProps, UserRegistrationSchema } from "@/schemas/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

export const useSignUpForm = () => {
    const { toast } = useToast();
    const[loading, setLoading ] = useState<boolean>(false);
    
    const { signUp, isLoaded, setActive } = useSignUp();
    const router = useRouter();

    const methods = useForm<userRegistrationProps>({
        resolver: zodResolver(UserRegistrationSchema),
        defaultValues: { 
            type: "owner",
        },
        mode: "onChange",

    })
    
const onGenerateOTP = async (
    email: string,
    password: string,
    onNext: React.Dispatch<React.SetStateAction<number>>
) => {
    if(!isLoaded) return
    try {
        await signUp.create({
            emailAddress: email,
            password: password
        })

        await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
        onNext((prev) => prev + 1);
    } catch (error) {
        toast({
            title: "Error",
            description: (error as any).errors[0].longMessage,
        })
    }
}

}
