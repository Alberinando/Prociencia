import React, { useState, useEffect } from 'react';
import Recomendados from "@/components/recomendados/recomendados";

const Home: React.FC = () => {
  const [noticiaPrincipal, setNoticiaPrincipal] = useState<any>(null);
  const [noticiaCategoria1, setNoticiaCategoria1] = useState<any>(null);
  const [noticiaCategoria2, setNoticiaCategoria2] = useState<any>(null);
  const [noticiaCategoria3, setNoticiaCategoria3] = useState<any>(null);
  const [noticiaCategoria4, setNoticiaCategoria4] = useState<any>(null);

  useEffect(() => {
    fetch('/noticias.json')
      .then(response => response.json())
      .then(data => {
        // Filtrar apenas as notícias de Moda e Beleza
        let noticiasModaEBeleza = data.noticiasModaEBeleza;

        const selecionarNoticiaUnica = (noticias: any[]) => {
          const randomIndex = Math.floor(Math.random() * noticias.length);
          const noticiaSelecionada = noticias[randomIndex];
          // Remove a notícia selecionada da lista de notícias disponíveis
          noticiasModaEBeleza = noticiasModaEBeleza.filter((noticia: any) => noticia !== noticiaSelecionada);
          return noticiaSelecionada;
        };

        // Seleciona a notícia principal
        setNoticiaPrincipal(selecionarNoticiaUnica(noticiasModaEBeleza));

        // Seleciona as notícias para as categorias
        setNoticiaCategoria1(selecionarNoticiaUnica(noticiasModaEBeleza));
        setNoticiaCategoria2(selecionarNoticiaUnica(noticiasModaEBeleza));
        setNoticiaCategoria3(selecionarNoticiaUnica(noticiasModaEBeleza));
        setNoticiaCategoria4(selecionarNoticiaUnica(noticiasModaEBeleza));
      })
      .catch(error => console.error('Erro ao buscar notícias:', error));
  }, []);

  const formatLink = (linkNoticia: string) => {
    return `/${linkNoticia}`;
  };

  return (
    <div className="App">
      {noticiaPrincipal ? (
        <div className="ml-[20px] mr-[20px]">
          <div className="grid grid-cols-12 gap-4 mt-[100px] mb-[20px]">
            <h1 className="text-roxo-p08 grid col-start-2 col-span-8 text-[20px] font-black text-4xl">
              Moda e Beleza
            </h1>
          </div>
          <div className=" grid grid-cols-12 gap-4">
            <div className="grid col-start-2 col-span-10 md:col-start-2 md:col-span-3 mb-[20px]">
              {noticiaCategoria1 && (
                <div className="relative w-full h-full">
                  <a
                    href={formatLink(noticiaCategoria1.LinkNoticia)}
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img
                      src={noticiaCategoria1.LinkImagen}
                      alt={noticiaCategoria1.titulo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                      <div className="text-white">
                        <h2 className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2">
                          {noticiaCategoria1.titulo}
                        </h2>
                        <p className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                          Descrição da imagem com mais detalhes.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>
            <div className="grid col-start-2 col-span-10 md:col-start-5 md:col-span-4 mb-[40px]">
              {noticiaCategoria2 && (
                <a
                  href={formatLink(noticiaCategoria2.LinkNoticia)}
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row mb-[30px]">
                    <div className="w-1/2">
                      <img
                        src={noticiaCategoria2.LinkImagen}
                        alt={noticiaCategoria2.titulo}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-1/2">
                      <p>{noticiaCategoria2.Categoria}</p>
                      <h1 className="text-base mb-2 ml-2 font-black">
                        {noticiaCategoria2.titulo}
                      </h1>
                    </div>
                  </div>
                </a>
              )}
              {noticiaCategoria3 && (
                <a
                  href={formatLink(noticiaCategoria3.LinkNoticia)}
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row mb-[30px]">
                    <div className="w-1/2">
                      <img
                        src={noticiaCategoria3.LinkImagen}
                        alt={noticiaCategoria3.titulo}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-1/2">
                      <p>{noticiaCategoria3.Categoria}</p>
                      <h1 className="text-base mb-2 ml-2 font-black">
                        {noticiaCategoria3.titulo}
                      </h1>
                    </div>
                  </div>
                </a>
              )}
              {noticiaCategoria4 && (
                <a
                  href={formatLink(noticiaCategoria4.LinkNoticia)}
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row">
                    <div className="w-1/2">
                      <img
                        src={noticiaCategoria4.LinkImagen}
                        alt={noticiaCategoria4.titulo}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-1/2">
                      <p>{noticiaCategoria4.Categoria}</p>
                      <h1 className="text-base font-bold mb-2 ml-2 font-black">
                        {noticiaCategoria4.titulo}
                      </h1>
                    </div>
                  </div>
                </a>
              )}
            </div>

            <div className="grid col-start-10 col-span-2 hidden md:block">
              <Recomendados/>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-[5px]">
            <a
              href="/ConjuntoDeNoticias/MaisNoticias"
              rel="noopener noreferrer"
              className="text-roxo-p08 grid col-start-2 col-span-8 font-black"
            >
              <div className="flex flex-row">
                <p className="sm:text-base md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl m-2">
                  Veja mais em notícias
                </p>
                <img
                  src="/assets/Imagens_aleatorias/seta-direita.png"
                  alt="Seta para direita"
                  className="ml-2"
                />
              </div>
            </a>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Home;

