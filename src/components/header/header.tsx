"use client"
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className="bg-rosa relative z-10">
            <div className="text-black p-6 flex flex-row text-sm md:text-base lg:text-lg xl:text-xl">
                {/* Menu hamburguer para dispositivos móveis */}
                <div className="mt-1 sm:hidden w-full">
                    <div className="flex flex-row">
                        <button onClick={toggleOptions} aria-label="Toggle Menu">
                            <Image
                                src="/assets/Header/menu-hamburguer.png"
                                alt="Minha Imagem"
                                width={20}
                                height={20}
                            />
                        </button>
                        <div className="mt-1 ml-4">Logo</div>
                    </div>
                    {showOptions && (
                        <div className="bg-rosa w-full text-center absolute top-16 left-0 right-0">
                            <ul>
                                <li>
                                    <Link href="../../Ciencia/Conheça4startupsbrasileirasquevaoaoSXSW2024" className="block px-4 py-2 mt-4 text-preto">
                                        Notícias
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="block px-4 py-2 text-preto">
                                        Saúde
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="block px-4 py-2 text-preto">
                                        Comportamento
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="block px-4 py-2 text-preto">
                                        Moda e Beleza
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="block px-4 py-2 text-preto  mb-8">
                                        Entretenimento
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Navegação para dispositivos maiores */}
                <div className="hidden sm:flex flex-row items-center justify-center z-10"> {/* Adicionando 'z-10' para definir o z-index */}
                    <div className="ml-4 mr-4">Logo</div>
                    <ul className="flex space-x-10 justify-items-center items-center">
                        <li>
                            <Link href="/" className="text-preto">
                                Notícias
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-preto">
                                Saúde
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-preto">
                                Comportamento
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-preto">
                                Moda e Beleza
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-preto">
                                Entretenimento
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
