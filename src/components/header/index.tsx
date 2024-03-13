/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from 'next/image';




const Header = () => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };
    return (
        <>
            <div className="bg-rosa  ">
                
                <div className=" text-white p-6 flex flex-row  text-sm md:text-base lg:text-lg xl:text-xl">
                    <div className="mt-1 sm:hidden w-full">
                        <div className="flex flex-row">
                            <button onClick={toggleOptions}>
                                <Image
                                    src="/assets/Header/menu-hamburguer.png"
                                    alt="Minha Imagem"
                                    width={20}
                                    height={20}
                                />
                            </button>
                            <div className=" mt-1 ml-4 ">Logo</div>
                        </div>
                       
                        {showOptions && (
                            <div className=" bg-cinza w-full">
                                <div className="w-full">
                                    <a href="#" className="block px-4 py-2 text-preto ">Notícias</a>
                                    <a href="#" className="block px-4 py-2 text-preto ">Saúde</a>
                                    <a href="#" className="block px-4 py-2 text-preto ">Comportamento</a>
                                    <a href="#" className="block px-4 py-2 text-preto ">Moda e Beleza</a>
                                    <a href="#" className="block px-4 py-2 text-preto ">Entretenimento</a>
                                </div>
                         </div>
                        )}
                            
                    </div>


                    <div className="flex flex-row space-x-8 size-full max-[640px]:hidden">
                        <div className="list-none flex flex-row w-1/5 mx-4">
                            <li className=" list-none -mt-1 max-[640px]:hidden ">Notícias</li>
                                {/* {   <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                        </li>} */}
                        </div>
                        <div className="list-none flex flex-row w-1/5 mx-4">
                            <li className=" list-none -mt-1 max-[640px]:hidden">Saúde</li>
                                {/* { <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                        </li>} */}
                        </div>
                        <div className="list-none flex flex-row w-1/5 mx-4">
                            <li className=" list-none -mt-1 max-[640px]:hidden">Comportamento</li>
                                {/* { <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                        </li>} */}
                        </div>
                        <div className=" list-none flex flex-row w-1/5 mx-4">
                            <li className="list-none -mt-1 max-[640px]:hidden">Moda e Beleza</li>
                                {/* { <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                        </li>} */}
                        </div>
                        <div className=" list-none flex flex-row w-1/5 mx-4">
                            <li className="list-none -mt-1 max-[640px]:hidden">Entretenimento</li>
                                {/* <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                        </li> */}
                        </div>
                    </div>
                </div>
                               
            </div>
        </>
    )
}

export default Header;