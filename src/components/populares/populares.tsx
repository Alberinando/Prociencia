import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [noticiaPrincipal, setNoticiaPrincipal] = useState<any>(null);
  const [noticiaCategoria1, setNoticiaCategoria1] = useState<any>(null);
  const [noticiaCategoria2, setNoticiaCategoria2] = useState<any>(null);
  const [noticiaCategoria3, setNoticiaCategoria3] = useState<any>(null);
  const [noticiaCategoria4, setNoticiaCategoria4] = useState<any>(null);

  useEffect(() => {
    fetch('/noticias.json')
      .then((response) => response.json())
      .then((data) => {
        let noticiastecnologia = data.noticiastecnologia;

        const selecionarNoticiaUnica = (noticias: any[]) => {
          const randomIndex = Math.floor(Math.random() * noticias.length);
          const noticiaSelecionada = noticias[randomIndex];
          noticiastecnologia = noticiastecnologia.filter(
            (noticia) => noticia !== noticiaSelecionada
          );
          return noticiaSelecionada;
        };

        setNoticiaPrincipal(selecionarNoticiaUnica(noticiastecnologia));
        setNoticiaCategoria1(selecionarNoticiaUnica(noticiastecnologia));
        setNoticiaCategoria2(selecionarNoticiaUnica(noticiastecnologia));
        setNoticiaCategoria3(selecionarNoticiaUnica(noticiastecnologia));
        setNoticiaCategoria4(selecionarNoticiaUnica(noticiastecnologia));
      })
      .catch((error) => console.error('Erro ao buscar notícias:', error));
  }, []);

  return (
    <div>
      <Populares
        noticiaCategoria2={noticiaCategoria2}
        noticiaCategoria3={noticiaCategoria3}
      />
      {/* Outros componentes podem ser adicionados aqui, como o Recomendados */}
    </div>
  );
};

interface PopularesProps {
  noticiaCategoria2: {
    LinkNoticia: string;
    LinkImagen: string;
    titulo: string;
  } | null;
  noticiaCategoria3: {
    LinkNoticia: string;
    LinkImagen: string;
    titulo: string;
  } | null;
}

const Populares: React.FC<PopularesProps> = ({
  noticiaCategoria2,
  noticiaCategoria3,
}) => {
  const formatLink = (linkNoticia: string) => `/${linkNoticia}`;

  return (
    <div className="grid col-start-10 col-span-2 hidden md:block">
      <div className="bg-roxo-p08 rounded border border-roxo-p08 mb-4">
        <h1 className="text-[20px] font-extrabold text-white text-center p-1">
          Populares
        </h1>
      </div>
      <div>
        {noticiaCategoria2 && (
          <a
            href={formatLink(noticiaCategoria2.LinkNoticia)}
            rel="noopener noreferrer"
          >
            <div className="flex flex-row mb-4">
              <div className="w-1/3">
                <img
                  src={noticiaCategoria2.LinkImagen}
                  alt={noticiaCategoria2.titulo}
                  className="w-16 h-16 mr-2 rounded-lg"
                />
              </div>
              <div className="w-2/3">
                <h1 className="text-xs">{noticiaCategoria2.titulo}</h1>
              </div>
            </div>
          </a>
        )}
        {noticiaCategoria3 && (
          <a
            href={formatLink(noticiaCategoria3.LinkNoticia)}
            rel="noopener noreferrer"
          >
            <div className="flex flex-row mb-4">
              <img
                src={noticiaCategoria3.LinkImagen}
                alt={noticiaCategoria3.titulo}
                className="w-16 h-16 mr-2 rounded-lg"
              />
              <h1 className="font-medium text-xs">{noticiaCategoria3.titulo}</h1>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default Home;

