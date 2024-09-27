"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';



const Header = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [showOptions2, setShowOptions2] = useState(false);
    const [dropdownIndex, setDropdownIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [allNews, setAllNews] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
        if (showOptions2) {
            setShowOptions2(false);
        }
    };

    const handleNoticasClick = () => {
        setShowOptions(false); // Oculta o menu principal
        setShowOptions2(true); // Exibe o menu de notícias
        
    };



    const handleLinkClick = () => {
        setShowOptions(false);
        setShowOptions2(false);
        setDropdownIndex(null); 
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
                    ...data.noticiasEntretenimento,
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
        <div className="bg-roxo-p08 relative z-10   p-2   md:mr-0">
            <div className="flex md:space-x-4 lg:space-x-8 flex-row ">
                    <div className="block md:hidden">
                        <button onClick={toggleOptions} aria-label="Toggle Menu">
                            <Image
                                src="/assets/Imagens_aleatorias/icons8-cardápio-24.png"
                                alt="Menu"
                                width={30}
                                height={30}
                            />
                        </button>

                        {showOptions && (
                            <div className="bg-branco text-center absolute top-16 left-0 right-0 w-2/3">
                                <ul>
                                <li className="flex flex-row items-center">
                                    <button onClick={handleNoticasClick} aria-label="Show Noticias Options" className="flex-grow">
                                        <Link href="" className="block px-4 py-2 mt-4 text-preto">
                                            Notícias
                                        </Link>
                                    </button>
                                    <div className="w-auto ml-2 mr-8">
                                        <Image
                                            src="/assets/Imagens_aleatorias/seta-direita-direita.png"
                                            alt="Menu"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                </li>
                                <li className="flex flex-row items-center mt-4">
                                    <Link href="/ConjuntoDeNoticias/SaudePage" className="flex-grow block px-4 py-2 text-preto" onClick={handleLinkClick}>
                                        Saúde
                                    </Link>
                                    <div className="w-auto ml-2 mr-8">
                                        <Image
                                            src="/assets/Imagens_aleatorias/seta-direita-direita.png"
                                            alt="Menu"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                </li>
                                <li className="flex flex-row items-center mt-4">
                                    <Link href="/ConjuntoDeNoticias/ComportamentoPage" className="flex-grow block px-4 py-2 text-preto" onClick={handleLinkClick}>
                                        Comportamento
                                    </Link>
                                    <div className="w-auto ml-2 mr-8">
                                        <Image
                                            src="/assets/Imagens_aleatorias/seta-direita-direita.png"
                                            alt="Menu"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                </li>
                                <li className="flex flex-row items-center mt-4">
                                    <Link href="/ConjuntoDeNoticias/ModaEBelezaPage" className="flex-grow block px-4 py-2 text-preto mb-8" onClick={handleLinkClick}>
                                        Moda e Beleza
                                    </Link>
                                    <div className="w-auto ml-2 mr-8 mb-8">
                                        <Image
                                            src="/assets/Imagens_aleatorias/seta-direita-direita.png"
                                            alt="Menu"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                </li>
                                <li className="flex flex-row items-center mt-4">
                                    <Link href="/ConjuntoDeNoticias/EntretenimentoPage" className="flex-grow block px-4 py-2 text-preto mb-8" onClick={handleLinkClick}>
                                        Entretenimento
                                    </Link>
                                    <div className="w-auto ml-2 mr-8 mb-8">
                                        <Image
                                            src="/assets/Imagens_aleatorias/seta-direita-direita.png"
                                            alt="Menu"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                </li>
                                <li className="flex flex-row items-center mt-4">
                                    <Link href="/formulario" className="flex-grow block px-4 py-2 text-preto mb-8" onClick={handleLinkClick}>
                                        Newsletter
                                    </Link>
                                    <div className="w-auto ml-2 mr-8 mb-8">
                                        <Image
                                            src="/assets/Imagens_aleatorias/seta-direita-direita.png"
                                            alt="Menu"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                </li>
                                <li className="flex flex-row items-center mt-4">
                                    <Link href="/ConjuntoDeNoticias/ViedosPage" className="flex-grow block px-4 py-2 text-preto mb-8" onClick={handleLinkClick}>
                                        Vídeos
                                    </Link>
                                    <div className="w-auto ml-2 mr-8 mb-8">
                                        <Image
                                            src="/assets/Imagens_aleatorias/seta-direita-direita.png"
                                            alt="Menu"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                </li>
                                <li className="flex flex-row items-center mt-4">
                                    <Link href="/formulario" className="flex-grow block px-4 py-2 text-preto mb-8" onClick={handleLinkClick}>
                                        Fale conosco
                                    </Link>
                                    <div className="w-auto ml-2 mr-8 mb-8">
                                        <Image
                                            src="/assets/Imagens_aleatorias/seta-direita-direita.png"
                                            alt="Menu"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                </li>
                            </ul>


                            </div>
                        )}
                        {showOptions2 && (  
                            <div className="bg-branco text-center absolute top-16 left-0 right-0 w-2/3">
                            <ul>
                                <li>
                                    <button onClick={toggleOptions} aria-label="Toggle Menu" className=" ">
                                      <div className="flex flex-row items-center">
                                        <div className=" mt-4">
                                                <Image
                                                        src="/assets/Imagens_aleatorias/seta-esquerda.png"
                                                        alt="Menu"
                                                        width={16}
                                                        height={16}
                                                    />
                                        </div>
                                        <div>
                                                <Link href="" className="block px-4 py-2 mt-4 text-preto">Menu principal</Link>
                                        </div>
                                      </div>
                                    </button>
                                </li>
                                <li>
                                    <Link href="/" className="block px-4 py-2 text-preto"onClick={handleLinkClick}>Notícias</Link>
                                </li>
                                <li>
                                    <Link href="/ConjuntoDeNoticias/EconomiaPage" className="block px-4 py-2 text-preto"  onClick={handleLinkClick}>Economia</Link>
                                </li>
                                <li>
                                    <Link href="/ConjuntoDeNoticias/PoliticaPage" className="block px-4 py-2 text-preto" onClick={handleLinkClick}>Política</Link>
                                </li>
                                <li>
                                    <Link href="/ConjuntoDeNoticias/CienciaPage" className="block px-4 py-2 text-preto" onClick={handleLinkClick}>Ciência</Link>
                                </li>
                                <li>
                                    <Link href="/ConjuntoDeNoticias/TecnologiaPage" className="block px-4 py-2 text-preto" onClick={handleLinkClick}>Tecnologia</Link>
                                </li>
                            </ul>
                        </div>
                        )}
                    </div>

                    <div className="w-1/7 p-2 ml-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-branco ">
                        Logo
                    </div>

                    <div className="relative w-1/7 p-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hidden md:block text-branco mt-1">
                        <button onClick={() => toggleDropdown(1)} className="focus:outline-none flex flex-row items-center">
                            <div className="w-5/6 md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl whitespace-normal">
                                Notícias
                            </div>
                        { /*<div className=" w-1/6">
                                <div className="relative w-5 h-5">
                                    <Image
                                        src="/assets/Imagens_aleatorias/seta-para-baixo.png"
                                        alt="Dropdown"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>*/}
                        </button>
                        {dropdownIndex === 1 && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-branco shadow-lg rounded z-20">
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-200 text-preto border-b border-deeppink">
                                        <Link href="/ConjuntoDeNoticias/EconomiaPage" onClick={handleLinkClick}>Economia</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 text-preto border-b border-deeppink">
                                        <Link href="/ConjuntoDeNoticias/PoliticaPage" onClick={handleLinkClick}>Política</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 text-preto border-b border-deeppink">
                                        <Link href="/ConjuntoDeNoticias/CienciaPage" onClick={handleLinkClick}>Ciência</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 text-preto border-b border-deeppink">
                                        <Link href="/ConjuntoDeNoticias/TecnologiaPage" onClick={handleLinkClick}>Tecnologia</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 text-preto">
                                        <Link href="/ConjuntoDeNoticias/ComportamentoPage" onClick={handleLinkClick}>Comportamento</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="w-1/7 p-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hidden md:block text-branco mt-1">
                        <div className="flex flex-row items-center">
                            <Link href="/ConjuntoDeNoticias/SaudePage" className="w-5/6 text-white md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl">Saúde</Link>
                            {/*<div className=" w-1/6">
                                <div className="relative w-5 h-5">
                                    <Image
                                        src="/assets/Imagens_aleatorias/seta-para-baixo.png"
                                        alt="Dropdown"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>*/}
                        </div>
                    </div>

                    <div className="w-1/7 p-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hidden md:block text-branco mt-1">
                        <div className="flex flex-row items-center">
                            <Link href="/ConjuntoDeNoticias/ComportamentoPage" className="w-5/6 text-white md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl ">Comportamento</Link>
                        { /*<div className=" w-1/6">
                                <div className="relative w-5 h-5">
                                    <Image
                                        src="/assets/Imagens_aleatorias/seta-para-baixo.png"
                                        alt="Dropdown"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>*/}
                        </div>
                    </div>

                    <div className="w-1/7 p-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hidden md:block text-branco mt-1">
                        <div className="flex flex-row items-center">
                            <Link href="/ConjuntoDeNoticias/ModaEBelezaPage" className="w-auto text-white md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl whitespace-nowrap">
                                Moda e Beleza
                            </Link>
                            {/*<div className=" w-1/6 flex-shrink-0">
                                <div className="relative w-5 h-5">
                                    <Image
                                        src="/assets/Imagens_aleatorias/seta-para-baixo.png"
                                        alt="Dropdown"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>*/}
                        </div>
                    </div>

                    <div className="w-1/7 p-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hidden md:block text-branco mt-1">
                        <div className="flex flex-row items-center">
                            <Link href="/ConjuntoDeNoticias/EntretenimentoPage" className="w-5/6 text-white md:text-xs lg:text-sm xl:text-xl 2xl:text-2xl">Entretenimento</Link>
                            {/*<div className=" w-1/6">
                                <div className="relative w-5 h-5">
                                    <Image
                                        src="/assets/Imagens_aleatorias/seta-para-baixo.png"
                                        alt="Dropdown"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>*/}
                        </div>
                    </div>

                    <div className="w-full">

                        <div className=" p-2 absolute right-0  w-[100px]  md:w-auto md:relative md:right-auto  md:w-3/4 mx-auto xl:md:w-2/4 ">
                        
                            <div className="  p-0.2 ">
                                <div className="relative flex items-center border border-roxo-p08 rounded-lg focus-within:ring-4 focus-within:ring-roxo-p08 bg-cinza-escuro ">
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
                                <div className="absolute top-full mt-1 bg-branco shadow-lg rounded-lg  max-h-64 overflow-y-auto">
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
            </div>
        </div>
    );
};

export default Header;






