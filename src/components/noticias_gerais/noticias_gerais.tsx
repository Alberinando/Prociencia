import React, { useState, useEffect } from 'react';

import cienciaData from '../../database/ciencia.json';
import comportamentoData from '../../database/comportamento.json';
import economiaData from '../../database/economia.json';
import entretenimentoData from '../../database/entreterimento.json';
import modaEBelezaData from '../../database/ModaEBeleza.json';
import noticiasData from '../../database/noticias.json';
import politicaData from '../../database/politica.json';
import saudeData from '../../database/saude.json';
import tecnologiaData from '../../database/tecnologia.json';
import todas from '../../database/categorias.json';

const Home: React.FC = () => {
  const [noticiaPrincipal, setNoticiaPrincipal] = useState<any>(null);
  const [noticiaSecundaria1, setNoticiaSecundaria1] = useState<any>(null);
  const [noticiaSecundaria2, setNoticiaSecundaria2] = useState<any>(null);

  useEffect(() => {
    fetch('/noticias.json')
      .then(response => response.json())
      .then(data => {
        // Combina todas as notícias em um único array
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

        const selecionarNoticiaDiferente = (noticias: any[], excluidas: any[]) => {
          let noticiaSelecionada;
          do {
            const randomIndex = Math.floor(Math.random() * noticias.length);
            noticiaSelecionada = noticias[randomIndex];
          } while (excluidas.includes(noticiaSelecionada)); 
          return noticiaSelecionada;
        };

        const primeiraNoticia = selecionarNoticiaDiferente(todasNoticias, []);
        setNoticiaPrincipal(primeiraNoticia);

        const segundaNoticia = selecionarNoticiaDiferente(todasNoticias, [primeiraNoticia]);
        setNoticiaSecundaria1(segundaNoticia);

        const terceiraNoticia = selecionarNoticiaDiferente(todasNoticias, [primeiraNoticia, segundaNoticia]);
        setNoticiaSecundaria2(terceiraNoticia);
      })
      .catch(error => console.error('Error fetching noticias:', error));
  }, []);

  const formatLink = (linkNoticia: string) => {
    return `/${linkNoticia}`;
  };

  const CategoriaBadge = () => (
    <div className="absolute top-4 left-4 bg-white text-black px-2 py-1 text-xs font-semibold rounded">
      <p>{noticiaPrincipal.Categoria}</p>
    </div>
  );

  return (
    <div className="App">
    {noticiaPrincipal ? (
      <div className='ml-[20px] mr-[20px]'>
        <div className='grid grid-cols-12 gap-4 mt-[100px]'>
          <div className="relative grid col-start-2 col-span-10 md:relative md:col-start-2 md:col-span-7">
            <a href={formatLink(noticiaPrincipal.LinkNoticia)} rel="noopener noreferrer" className="block w-full h-full">
              <img src={noticiaPrincipal.LinkImagen} alt={noticiaPrincipal.titulo} className="w-full h-full object-cover"/>
              <CategoriaBadge />
              <div className="absolute inset-0 flex items-end p-4">
                <h1 className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white font-black bg-black bg-opacity-50 p-1 sm:p-2 leading-tight sm:leading-normal">
                  {noticiaPrincipal.titulo}
                </h1>
              </div>
            </a>
          </div>
  
          <div className='grid col-start-9 col-span-3 hidden md:block'>
            {noticiaSecundaria1 && (
              <div className='relative w-full mb-[10px]'>
                <a href={formatLink(noticiaSecundaria1.LinkNoticia)} rel="noopener noreferrer">
                  <img src={noticiaSecundaria1.LinkImagen} alt={noticiaSecundaria1.titulo} className='w-full h-full object-cover'/>
                  <CategoriaBadge />
                  <div className='absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50'>
                    <p className='text-[8px] sm:text-[8px] md:text-[12px] lg:text-lg xl:text-xl 2xl:text-2xl font-black text-white'>{noticiaSecundaria1.titulo}</p>
                  </div>
                </a>
              </div>
            )}
            {noticiaSecundaria2 && (
              <div className='relative w-full mt-[10px]'>
                <a href={formatLink(noticiaSecundaria2.LinkNoticia)} rel="noopener noreferrer">
                  <img src={noticiaSecundaria2.LinkImagen} alt={noticiaSecundaria2.titulo} className='w-full h-full object-cover'/>
                  <CategoriaBadge />
                  <div className='absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50'>
                    <h1 className='text-[8px] sm:text-[8px] md:text-[12px] lg:text-lg xl:text-xl 2xl:text-2xl font-black text-white'>{noticiaSecundaria2.titulo}</h1>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    ) : (
      <p>Carregando...</p>
    )}
  </div>
  

  );
}

export default Home;












