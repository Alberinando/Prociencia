"use client"

import React, { useState, useEffect } from 'react';



const Home: React.FC = () => {
  const [noticias, setNoticias] = useState<any[]>([]);

  useEffect(() => {
    fetch('/noticias.json')
      .then(response => response.json())
      .then(data => {
        console.log('Dados recebidos:', data); 
        
       
        const todasNoticias = [
          ...data.noticiasTecnologia || [],
          ...data.noticiasSaude || [],
          ...data.noticiasPolitica || [],
          ...data.noticiasModaEBeleza || [],
          ...data.noticiasEntretenimento || [],
          ...data.noticiasEconomia || [],
          ...data.noticiasComportamento || [],
          ...data.noticiasCiencia || [],
        ];

        setNoticias(todasNoticias);
      })
      .catch(error => console.error('Error fetching noticias:', error));
  }, []);

  const formatLink = (linkNoticia: string) => {
    return `/${linkNoticia}`;
  };

  return (
    <>
      {noticias.length > 0 ? (
        <div className="flex flex-col gap-4 p-4">
          {noticias.map((noticia: any, index: number) => (
            <div key={index} className="flex items-center gap-4 p-4 ">
              <div className="flex-1 flex items-center gap-4 w-2/3">
                <a href={formatLink(noticia.LinkNoticia)} rel="noopener noreferrer" className="">
                  <img src={noticia.LinkImagen} alt={noticia.titulo} className="w-24 h-24 object-cover" />
                </a>
                <div className="flex-1">
                  <a href={formatLink(noticia.LinkNoticia)} rel="noopener noreferrer">
                    <h2 className="text-lg font-bold">{noticia.titulo}</h2>
                  </a>
                </div>
              </div>
              <div className="w-1/3 hidden lg:block">
                <img src="/path/to/your/image.jpg" alt="Image Sidebar" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
}

export default Home;


