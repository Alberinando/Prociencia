/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/image';




const Header = () => {
    return (
        <>
            <div className="bg-rosa p-6">
                
                <div className=" text-white p-6 flex flex-row h-6 ">
                    <div className="hidden mt-1">
                        <Image
                            src="/assets/Header/menu-hamburguer.png"
                            alt="Minha Imagem"
                            width={20}
                            height={20}
                        />
                    </div>


                    <div className=" -mt-1 -ml-2 mr-10 hidden">Logo</div>


                    <div className="flex flex-row space-x-8 size-full">
                        <div className="list-none flex flex-row w-1/5 mx-4">
                            <li className=" list-none -mt-1 ">Notícias</li>
                                    {/* { <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                        </li>} */}
                        </div>
                        <div className="list-none flex flex-row w-1/5 mx-4">
                            <li className=" list-none -mt-1">Saúde</li>
                                        {/* { <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                            </li>} */}
                        </div>
                        <div className="list-none flex flex-row w-1/5 mx-4">
                                    <li className=" list-none -mt-1">Comportamento</li>
                                        {/* { <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                            </li>} */}
                        </div>
                        <div className=" list-none flex flex-row w-1/5 mx-4">
                                    <li className="list-none -mt-1">Moda e Beleza</li>
                                        {/* { <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                                </svg>
                                            </li>} */}
                        </div>
                        <div className=" list-none flex flex-row w-1/5 mx-4">
                                    <li className="list-none -mt-1">Entretenimento</li>
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