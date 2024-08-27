import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [noticiaPrincipal, setNoticiaPrincipal] = useState<unknown>(null);
  const [noticiaCategoria1, setNoticiaCategoria1] = useState<unknown>(null);
  const [noticiaCategoria2, setNoticiaCategoria2] = useState<unknown>(null);
  const [noticiaCategoria3, setNoticiaCategoria3] = useState<unknown>(null);
  const [noticiaCategoria4, setNoticiaCategoria4] = useState<unknown>(null);

  useEffect(() => {
    fetch('/noticias.json')
      .then(response => response.json())
      .then(data => {
        // Filtrar apenas as notícias de tecnologia
        let noticiastecnologia = data.noticiastecnologia;

        const selecionarNoticiaUnica = (noticias: unknown[]) => {
          const randomIndex = Math.floor(Math.random() * noticias.length);
          const noticiaSelecionada = noticias[randomIndex];
          // Remove a notícia selecionada da lista de notícias disponíveis
          noticiastecnologia = noticiastecnologia.filter(
            (noticia: unknown) => noticia !== noticiaSelecionada
          );
          return noticiaSelecionada;
        };

        // Seleciona a notícia principal
        setNoticiaPrincipal(selecionarNoticiaUnica(noticiastecnologia));

        // Seleciona as notícias para as categorias
        setNoticiaCategoria1(selecionarNoticiaUnica(noticiastecnologia));
        setNoticiaCategoria2(selecionarNoticiaUnica(noticiastecnologia));
        setNoticiaCategoria3(selecionarNoticiaUnica(noticiastecnologia));
        setNoticiaCategoria4(selecionarNoticiaUnica(noticiastecnologia));
      })
      .catch(error => console.error('Erro ao buscar notícias:', error));
  }, []);

  return (
    <div>
      {/* Outras partes do componente Home */}
      <Recomendados
        noticiaCategoria2={noticiaCategoria2}
        noticiaCategoria3={noticiaCategoria3}
        noticiaCategoria4={noticiaCategoria4}
      />
    </div>
  );
};

interface RecomendadosProps {
  noticiaCategoria2: unknown;
  noticiaCategoria3: unknown;
  noticiaCategoria4: unknown;
}

const Recomendados: React.FC<RecomendadosProps> = ({
  noticiaCategoria2,
  noticiaCategoria3,
  noticiaCategoria4,
}) => {
  const formatLink = (linkNoticia: string) => {
    return `/${linkNoticia}`;
  };

  return (
    <div className="grid col-start-10 col-span-2 hidden md:block">
      <div className="bg-roxo-p08 rounded border border-roxo-p08 mb-4">
        <h1 className="text-[20px] font-extrabold text-white text-center p-1">
          Recomendados
        </h1>
      </div>
      <div>
        {[noticiaCategoria2, noticiaCategoria3, noticiaCategoria4].map(
          (noticia: any, index) =>
            noticia && (
              <a
                href={formatLink(noticia.LinkNoticia)}
                rel="noopener noreferrer"
                key={index}
              >
                <div className="flex flex-row mb-4">
                  <img
                    src={noticia.LinkImagen || '/path/to/default/image.jpg'}
                    alt={noticia.titulo || 'Imagem sem descrição'}
                    className="w-16 h-16 mr-2 rounded-lg"
                  />
                  <h1 className="text-xs">
                    {noticia.titulo || 'Título não disponível'}
                  </h1>
                </div>
              </a>
            )
        )}
      </div>
    </div>
  );
};

export default Home;

