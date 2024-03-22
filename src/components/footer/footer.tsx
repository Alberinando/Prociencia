"use client"
import React from "react";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-250 flex flex-col md:flex-row text-black text-sm md:text-base lg:text-lg xl:text-xl justify-center items-center space-y-1 md:space-y-0">

            <div className="flex flex-col md:flex-row md:max-w-[640px] w-full space-x-4 md:space-x-8 justify-around text-center">
                <div className="order-last md:order-first w-full p-4 py-8 md:py-16 md:w-1/3 text-center">
                    <p className="font-pixels">Logo</p>
                </div>
                <div className="bg-gray-400 w-full p-4 py-8 md:py-16 md:w-1/3 text-center">
                    <p className="ordinal font-pixels">Contato</p>
                    <ul className="space-y-1 py-2 md:py-6 list-none">
                        <li>(84)9999-9999</li>
                        <li>contato@email.com</li>
                        <li>Rua,xxx-20-yyy</li>
                        <li>Parnamirim, RN</li>
                        <li className="text-center">
                            <button className="bg-white mt-4 md:mt-8 w-48 h-10 font-pixels">
                                FALE CONOSCO
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-500 py-8 md:py-16 w-full p-4 text-center md:w-1/3">
                    <p className="font-pixels">Informações</p>
                    <ul className="space-y-1 py-2 md:py-6 list-none">
                        <li>Notícias</li>
                        <li>Saúde</li>
                        <li>Comportamento</li>
                        <li>Moda e Beleza</li>
                        <li>Entretenimento</li>
                        <li>Vídeos</li>
                        <li>Termos e Condições</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
