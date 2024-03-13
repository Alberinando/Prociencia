import React from "react";


const Footer = () => {
    return (
        <>
        <div className="overflow-hidden min-[640px]:flex flex-row  bg-cinza text-preto w-full min-[640px]:h-96
        text-sm md:text-base lg:text-lg xl:text-xl">

            <div className="min-[426px]:flex flex-row max-[640px]:hidden w-full">
                <div className="max-[640px]:hidden w-full p-4 py-16 w-1/3 text-center ">
                    <p className="max-[640px]:hidden preto font-pixels">Logo</p>
                </div>
                <div className="bg-cinza  w-full p-4 py-16  w-1/3 text-center ">
                    <p className="w-full ordinal font-pixels ">Contato</p>
                        
                    <div className="space-y-1 py-6">
                        <li className="list-none">(84)9999-9999</li>
                        <li className="list-none ">contato@email.com</li>
                        <li className="list-none">Rua,xxx-20-yyy</li>
                        <li className="list-none">Parnamirim, RN</li>
                        <div className="text-center">
                            <button className=" bg-branco mt-8 w-48 h-10 font-pixels">
                                FALE CONOSCO
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-cinza py-16 w-1/3 w-full p-4 text-center ">
                    <p className=" font-pixels">Informações</p>
                    <div className="space-y-1 py-6">
                        <li className="list-none w-5/5">Notícias</li>
                        <li className="list-none  ">Saúde</li>
                        <li className="list-none ">Comportamento</li>
                        <li className="list-none">Moda e Beleza</li>
                        <li className="list-none">Entretenimento</li>
                        <li className="list-none">Vídeos</li>
                        <li className="list-none">Termos e Condições</li>
                    </div>
                </div>
            </div>

            <div className="bg-cinza  w-full p-4 py-16  w-1/3 text-center  min-[426px]:hidden ">
                <p className="w-full ordinal font-pixels ">Contato</p>
                    
                <div className="space-y-1 py-6">
                    <li className="list-none">(84)9999-9999</li>
                    <li className="list-none ">contato@email.com</li>
                    <li className="list-none">Rua,xxx-20-yyy</li>
                    <li className="list-none">Parnamirim, RN</li>
                    <div className="text-center">
                        <button className=" bg-branco mt-8 w-48 h-10 font-pixels">
                            FALE CONOSCO
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-cinza py-16 w-1/3 w-full p-4 text-center min-[426px]:hidden ">
                <p className=" font-pixels">Informações</p>
                <div className="space-y-1 py-6">
                    <li className="list-none w-5/5">Notícias</li>
                    <li className="list-none  ">Saúde</li>
                    <li className="list-none ">Comportamento</li>
                    <li className="list-none">Moda e Beleza</li>
                    <li className="list-none">Entretenimento</li>
                    <li className="list-none">Vídeos</li>
                    <li className="list-none">Termos e Condições</li>
                </div>
            </div>

            <div className=" min-[640px]:hidden py-16 min-[640px]:w-1/3 w-full p-4 text-center">
                <p className="min-[640px]:hidden preto font-pixels   ">Logo</p>
            </div>
        </div>
        </>
    )
}

export default Footer;



