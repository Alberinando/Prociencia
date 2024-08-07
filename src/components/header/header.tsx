"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';



const Header = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [dropdownIndex, setDropdownIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [allNews, setAllNews] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const toggleDropdown = (index) => {
        setDropdownIndex(dropdownIndex === index ? null : index);
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 2) {
            const results = allNews.filter(news =>
                news.titulo.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        fetch('/noticias.json')
            .then(response => response.json())
            .then(data => {
                const todasNoticias = [
                    ...data.noticiastecnologia,
                    ...data.noticiasSaude,
                    ...data.noticiasPolitica,
                    ...data.noticiasModaEBeleza,
                    ...data.noticiasEntretedimento,
                    ...data['noticiasEconomia '],
                    ...data['noticiasComportamento '],
                    ...data.noticiasCiencia,
                ];
                setAllNews(todasNoticias);
            })
            .catch(error => console.error('Error fetching noticias:', error));
    }, []);

    const handleResultClick = () => {
        setSearchQuery('');
        setSearchResults([]);
    };

    return (
        <div className="bg-roxo-p08 relative z-10 -mr-10 md:mr-0">
            <div className="p-4 grid grid-cols-12 gap-4">
                <div className="grid col-start-1 sm:col-span-1 col-span-2 block md:hidden">
                    <button onClick={toggleOptions} aria-label="Toggle Menu">
                        <Image
                            src="/assets/Imagens_aleatorias/icons8-cardápio-24.png"
                            alt="Minha Imagem"
                            width={30}
                            height={30}
                        />
                    </button>

                    {showOptions && (
                        <div className="bg-branco text-center absolute top-16 left-0 right-0 w-2/3">
                            <ul>
                                <li>
                                    <Link href="/Tecnologia/MulheresnaTIvocetambempodeserumadelas" className="block px-4 py-2 mt-4 text-preto">
                                        Notícias
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/components/noticias_saude/noticias_saude" className="block px-4 py-2 text-preto">
                                        Saúde
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/formulario" className="block px-4 py-2 text-preto">
                                        Comportamento
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="block px-4 py-2 text-preto">
                                        Moda e Beleza
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="block px-4 py-2 text-preto mb-8">
                                        Entretenimento
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="grid md:col-start-2 col-span-1 col-start-3 col-span-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-branco">
                    Logo
                </div>

                <div className="relative grid col-start-3 col-span-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hidden md:block text-branco">
                    <button onClick={() => toggleDropdown(1)} className="focus:outline-none flex flex-row">
                        <div>
                            Notícias
                        </div>
                        <div className="mt-2">
                            <Image
                                src="/assets/Imagens_aleatorias/seta-para-baixo.png"
                                alt="Minha Imagem"
                                width={24}
                                height={24}
                            />
                        </div>
                    </button>
                    {dropdownIndex === 1 && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-branco shadow-lg rounded">
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-200 text-preto">Economia</li>
                                <li className="px-4 py-2 hover:bg-gray-200 text-preto">Política</li>
                                <li className="px-4 py-2 hover:bg-gray-200 text-preto">Ciência</li>
                                <li className="px-4 py-2 hover:bg-gray-200 text-preto">Tecnologia</li>
                            </ul>
                        </div>
                    )}
                </div>

               
                <div className="grid col-start-4 col-span-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hidden md:block text-branco">
                    Saúde
                </div>

                <div className="grid col-start-5 col-span-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hidden md:block text-branco">
                    Comportamento
                </div>
                <div className="grid col-start-7 col-span-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hidden md:block text-branco">
                    Moda e Beleza
                </div>
                <div className="grid col-start-9 col-span-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hidden md:block text-branco">
                    Entretenimento
                </div>

                <div className="grid md:col-start-11 md:col-span-2 sm:col-start-9 sm:col-span-4 col-start-7 col-span-6">
                    <div className="relative flex items-center border border-roxo-p08 rounded-lg focus-within:ring-4 focus-within:ring-roxo-p08 bg-cinza-escuro p-0.2">
                        <Image
                            src="/assets/Imagens_aleatorias/lupa.png"
                            alt="Buscar"
                            className="ml-2"
                            width={20}
                            height={20}
                        />
                        <input
                            type="text"
                            className="ml-2 w-full p-0.5 focus:outline-none bg-cinza-escuro placeholder-branco rounded-lg"
                            placeholder="Buscar"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                    {searchResults.length > 0 && (
                        <div className="absolute top-full mt-1 bg-branco shadow-lg rounded-lg z-50 max-h-64 overflow-y-auto">
                            <ul className="w-full">
                                {searchResults.map((result, index) => (
                                    <li key={index} className="flex items-center p-2 hover:bg-gray-200">
                                        <Link href={`/${result.LinkNoticia}`} onClick={handleResultClick}>
                                            <div className="flex items-center">
                                                <img src={result.LinkImagen} alt={result.titulo} width={40} height={60} className="rounded-lg" />
                                                <div className="ml-2">
                                                    <p className="text-sm text-preto">{result.titulo}</p>
                                                    <p className="text-xs text-gray-600">{result.autor}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;














{/*"use client"
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className="bg-rosa   relative z-10 ">
            <div className="text-black p-6  flex flex-row text-sm md:text-base lg:text-lg xl:text-xl">
               
                <div className="mt-1 sm:hidden">
                    <div className="flex flex-row ">
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
                        <div className="bg-rosa text-center absolute top-16 left-0 right-0">
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

              
                <div className="hidden sm:flex flex-row items-center justify-center z-10 space-x-10  ">
                    <div className="ml-4 mr-4 ">Logo</div>
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

export default Header;*/}
