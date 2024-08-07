import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [noticias, setNoticias] = useState<any[]>([]);

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

        setNoticias(todasNoticias);
      })
      .catch(error => console.error('Error fetching noticias:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-black text-roxo-p08 mb-6">Vídeos</h1>
      {noticias.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:hidden gap-4">
            {noticias.slice(0, 1).map((noticia, index) => (
              <div key={index} className="relative">
                <img src={noticia.LinkImagen} alt={noticia.titulo} className="w-full h-auto" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <button className="text-4xl mb-2 flex flex-row mt-[60px]">
                      <img src="/assets/Imagens_aleatorias/play_button.png" alt="imagem de Ivete Sangalo"/>
                      <p className='text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>{noticia.titulo}</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-[20px]">
           
            {noticias.slice(0, 6).map((noticia, index) => (
              <div key={index} className="relative">
                <img src={noticia.LinkImagen} alt={noticia.titulo} className="w-full h-auto" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <button className="text-4xl mb-2 flex flex-row mt-[60px]">
                      <img src="/assets/Imagens_aleatorias/play_button.png" alt="imagem de Ivete Sangalo" />
                      <p className='text-[10px] sm:text-sm md:text-[12px] '>{noticia.titulo}</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Home;



