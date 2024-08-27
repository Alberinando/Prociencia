"use client";

import React, { useState, useEffect } from "react";
import Newsletter from "@/components/Newsletter/Newsletter";
import Image from 'next/image';
import Imagem from "@/components/imagem/imagem";
import ImagemMegaFone from "@/components/ImagemFone/ImagemFone";
import Recomendados from "@/components/recomendados/recomendados";
import Populares from "@/components/populares/populares";

const Home: React.FC = () => {
  const [noticiaPrincipal, setNoticiaPrincipal] = useState<any>(null);
  const [noticiaCategoria1, setNoticiaCategoria1] = useState<any>(null);
  const [noticiaCategoria2, setNoticiaCategoria2] = useState<any>(null);
  const [noticiaCategoria3, setNoticiaCategoria3] = useState<any>(null);
  const [noticiaCategoria4, setNoticiaCategoria4] = useState<any>(null);
  const [noticiasRestantes, setNoticiasRestantes] = useState<any[]>([]);
  const [noticiasVisiveis, setNoticiasVisiveis] = useState<number>(3);

  useEffect(() => {
    fetch("/noticias.json")
      .then((response) => response.json())
      .then((data) => {
        let todasNoticias = [
          ...data.noticiastecnologia,
          ...data.noticiasSaude,
          ...data.noticiasPolitica,
          ...data.noticiasModaEBeleza,
          ...data.noticiasEntretenimento,
          ...data["noticiasEconomia "],
          ...data["noticiasComportamento "],
          ...data.noticiasCiencia,
        ];

        // Selecionar notícia principal
        const randomIndexPrincipal = Math.floor(
          Math.random() * todasNoticias.length
        );
        const noticiaPrincipal = todasNoticias[randomIndexPrincipal];
        setNoticiaPrincipal(noticiaPrincipal);
        todasNoticias = todasNoticias.filter(
          (_, index) => index !== randomIndexPrincipal
        );

        // Selecionar notícia para categoria 1
        const noticiasCategoria1 = todasNoticias.filter(
          (noticia) => noticia.Categoria === "Tecnologia"
        );
        const randomIndexCategoria1 = Math.floor(
          Math.random() * noticiasCategoria1.length
        );
        const noticiaCategoria1 = noticiasCategoria1[randomIndexCategoria1];
        setNoticiaCategoria1(noticiaCategoria1);
        todasNoticias = todasNoticias.filter(
          (noticia) => noticia !== noticiaCategoria1
        );

        // Selecionar notícia para categoria 2
        const noticiasCategoria2 = todasNoticias.filter(
          (noticia) => noticia.Categoria === "Tecnologia"
        );
        const randomIndexCategoria2 = Math.floor(
          Math.random() * noticiasCategoria2.length
        );
        const noticiaCategoria2 = noticiasCategoria2[randomIndexCategoria2];
        setNoticiaCategoria2(noticiaCategoria2);
        todasNoticias = todasNoticias.filter(
          (noticia) => noticia !== noticiaCategoria2
        );

        // Selecionar notícia para categoria 3
        const noticiasCategoria3 = todasNoticias.filter(
          (noticia) => noticia.Categoria === "Tecnologia"
        );
        const randomIndexCategoria3 = Math.floor(
          Math.random() * noticiasCategoria3.length
        );
        const noticiaCategoria3 = noticiasCategoria3[randomIndexCategoria3];
        setNoticiaCategoria3(noticiaCategoria3);
        todasNoticias = todasNoticias.filter(
          (noticia) => noticia !== noticiaCategoria3
        );

        // Selecionar notícia para categoria 4
        const noticiasCategoria4 = todasNoticias.filter(
          (noticia) => noticia.Categoria === "Tecnologia"
        );
        const randomIndexCategoria4 = Math.floor(
          Math.random() * noticiasCategoria4.length
        );
        const noticiaCategoria4 = noticiasCategoria4[randomIndexCategoria4];
        setNoticiaCategoria4(noticiaCategoria4);
        todasNoticias = todasNoticias.filter(
          (noticia) => noticia !== noticiaCategoria4
        );

        // Guardar o restante das notícias para carregar mais tarde
        setNoticiasRestantes(todasNoticias);
      })
      .catch((error) => console.error("Error fetching noticias:", error));
  }, []);

  const formatLink = (linkNoticia: string) => {
    return `/${linkNoticia}`;
  };

  const handleLoadMore = () => {
    setNoticiasVisiveis((prevVisiveis) => prevVisiveis + 3);
  };

  return (
    <div className="App grid grid-cols-12 gap-4">
      <div className="mt-[100px] grid col-start-4 col-span-6">
        <p className="text-center text-[40px] font-bold mb-[100px]">
          Todas as notícias
        </p>
      </div>

      {noticiaPrincipal ? (
        <div className="ml-[20px] mr-[20px] grid col-start-2 col-span-10 md:col-start-2 md:col-span-6">
          <div className="">
            <div className="">
              {[noticiaCategoria1, noticiaCategoria2, noticiaCategoria3, noticiaCategoria4].map(
                (noticia, index) =>
                  noticia && (
                    <a
                      key={index}
                      href={formatLink(noticia.LinkNoticia)}
                      rel="noopener noreferrer"
                    >
                      <div className="flex flex-row mb-[30px]">
                        <div className="w-1/2">
                          <img
                            src={noticia.LinkImagen}
                            alt={noticia.titulo}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-1/2">
                          <p>{noticia.Categoria}</p>
                          <h1 className="text-base mb-2 ml-2 font-black">
                            {noticia.titulo}
                          </h1>
                        </div>
                      </div>
                    </a>
                  )
              )}
            </div>
          </div>

          {/* Exibir mais três notícias */}
          <div className=" mt-[20px]">
            {noticiasRestantes
              .slice(0, noticiasVisiveis)
              .map((noticia, index) => (
                <div
                  key={index}
                  className="grid col-start-2 col-span-6 mb-[30px]"
                >
                  <div className="flex flex-row">
                    <div className="w-1/2">
                      <img
                        src={noticia.LinkImagen}
                        alt={noticia.titulo}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-1/2">
                      <p>{noticia.Categoria}</p>
                      <h1 className="text-base font-bold mb-2 ml-2 font-black">
                        {noticia.titulo}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Botão para carregar mais notícias */}
          
        </div>
      ) : (
        <p>Carregando...</p>
      )}

      <div className="hidden md:block grid col-start-9 col-span-3 space-y-16 lg:col-start-10 lg:col-span-2">
        <div className="grid col-span-6 h-[300px]  md:w-full object-cover">
          <ImagemMegaFone/>
        </div>
        <div className="hidden md:block grid col-start-10 col-span-2">
          <Newsletter />
        </div>
        <div className="hidden md:block grid col-start-10 col-span-2">
          <Recomendados />
        </div>
        <div className="hidden md:block grid col-start-10 col-span-2">
          <Populares />
        </div>
      </div>

      <div className="grid col-start-4 col-span-6 md:col-start-4 md:col-span-6 mb-16">
          {noticiasVisiveis < noticiasRestantes.length && (
            <div className="grid grid-cols-12 gap-4 mt-[20px]">
              <button
                onClick={handleLoadMore}
               className="text-preto grid col-start-4 col-span-8 font-black bg-white border border-custom-pink p-2 font-pixels rounded-lg"
              >
                <div className="flex flex-row justify-center">
                  <p className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl m-2">
                    Ler mais
                  </p>
                  <div className="relative w-5 h-5 mt-2 md:mt-4">
                    <Image
                      src="/assets/Imagens_aleatorias/seta-para-baixo-preta.png"
                      alt="Dropdown"
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
              </button>
            </div>
          )}
      </div>
    </div>
  );
};

export default Home;









