import { currentUser } from "@clerk/nextjs";
import React from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
type Props = {
    children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
    const user = await currentUser();
    if (user) {
        redirect("/");
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-[600px] ld:w-full flex flex-col items-center items-start p-6">
                <Image 
                src="/images/logo.png" 
                alt="logo" 
                width={0} 
                height={0}
                style={{ width: '20%', height: 'auto' }}
                sizes="100vw"
                />
                {children}
            </div>
            <div className="hidden lg:flex flex-1 w-full max-h-full h-[900px] max-w-4000px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3">
                <h2 className="text-gravel md:text-4xl font-bold">Transforme Sua Equipe de Vendas com o <span className="font-bold"> poder da IA </span>
                </h2>
                <p className="text-iridium md:tex-sm mb-10">
                Descubra uma maneira mais rápida e inteligente de prospectar e qualificar leads, 
                </p>
                <Image 
                    src="/images/app-ui.png" 
                    alt="app image" 
                    loading="lazy"
                    sizes="30" 
                    className="absolute shrink-0 !w-[1600px] top-48" 
                    width={0} 
                    height={0} 
                />
            </div>
            
        </div>  
    )
}

export default Layout;
