import { z } from "zod"


export type userRegistrationProps = {
    type : string
    fullName : string
    email : string
    confirmEmail : string
    password : string   
    confirmPassword : string
    otp : string
}

export const UserRegistrationSchema = z.object({
    type : z.string().min(1, { message: "Type is required" }),
    fullName : z.string().min(4, { message: "Full name is required" }),
    email : z.string().email({ message: "Invalid email address" }),
    confirmEmail : z.string().email({ message: "Invalid email address" }),
    password : z.string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(64, { message: "Password must be at most 64 characters" })
    .refine(
        (value) => /^[a-zA-Z0-9]*$/.test(value ?? ""), "Password should only contain only alphabets and numbers"),
    confirmPassword : z.string(),
    otp : z.string().min(6, { message: "You must enter a 6 digit code" })
    .refine((schema)=> schema.password === schema.confirmPassword, 
    { message: "Passwords do not match", 
    path: ["confirmPassword"] 
    })
    .refine((schema)=> schema.email === schema.confirmEmail,
    { message: "Emails do not match", 
    path: ["confirmEmail"] 
    }),
})

