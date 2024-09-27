import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Populares from "@/components/populares/populares";

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
        let todasNoticias = [
          ...data.noticiastecnologia,
          ...data.noticiasSaude,
          ...data.noticiasPolitica,
          ...data.noticiasModaEBeleza,
          ...data.noticiasEntretenimento,
          ...data['noticiasEconomia '],
          ...data['noticiasComportamento '],
          ...data.noticiasCiencia,
        ];
  
        // Selecionar a notícia principal e removê-la da lista
        const randomIndexPrincipal = Math.floor(Math.random() * todasNoticias.length);
        const noticiaPrincipalSelecionada = todasNoticias.splice(randomIndexPrincipal, 1)[0];
        setNoticiaPrincipal(noticiaPrincipalSelecionada);
  
        // Selecionar as notícias para cada categoria
        const noticiasCategoria1 = [...data.noticiasSaude];
        const randomIndexCategoria1 = Math.floor(Math.random() * noticiasCategoria1.length);
        const noticiaCategoria1Selecionada = noticiasCategoria1.splice(randomIndexCategoria1, 1)[0];
        setNoticiaCategoria1(noticiaCategoria1Selecionada);
  
        const randomIndexCategoria2 = Math.floor(Math.random() * noticiasCategoria1.length);
        const noticiaCategoria2Selecionada = noticiasCategoria1.splice(randomIndexCategoria2, 1)[0];
        setNoticiaCategoria2(noticiaCategoria2Selecionada);
  
        const randomIndexCategoria3 = Math.floor(Math.random() * noticiasCategoria1.length);
        const noticiaCategoria3Selecionada = noticiasCategoria1.splice(randomIndexCategoria3, 1)[0];
        setNoticiaCategoria3(noticiaCategoria3Selecionada);
  
        const randomIndexCategoria4 = Math.floor(Math.random() * noticiasCategoria1.length);
        const noticiaCategoria4Selecionada = noticiasCategoria1.splice(randomIndexCategoria4, 1)[0];
        setNoticiaCategoria4(noticiaCategoria4Selecionada);
      })
      .catch(error => console.error('Error fetching noticias:', error));
  }, []);
  

  const formatLink = (linkNoticia: string) => {
    return `/${linkNoticia}`;
  };

  const CategoriaBadge = () => (
    <div className="absolute top-4 left-4 bg-white text-black px-2 py-1 text-xs font-semibold rounded">
      <p>{noticiaCategoria2.Categoria}</p>
    </div>
  );

  return (
    <div className="App">
      {noticiaPrincipal ? (
        <div className='ml-[20px] mr-[20px]'>
          <div className='grid grid-cols-12 gap-4 mt-[100px] mb-[20px]'>
            <h1 className='text-roxo-p08 grid col-start-2 col-span-3 text-[20px] font-black text-4xl'>Saúde</h1>
          </div>
          <div className='grid grid-cols-12 gap-4'>
            <div className='grid col-start-2 col-span-10 md:col-start-2 md:col-span-3 mb-[20px]'>
              {noticiaCategoria1 && (
                <div className="relative w-full h-full">
                  <a href={formatLink(noticiaCategoria1.LinkNoticia)} rel="noopener noreferrer" className="block w-full h-full">
                    <CategoriaBadge/>
                    <img src={noticiaCategoria1.LinkImagen} alt={noticiaCategoria1.titulo} className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                      <div className="text-white">
                        <h2 className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2">{noticiaCategoria1.titulo}</h2>
                        <p className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Descrição da imagem com mais detalhes.</p>
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>
            <div className='grid col-start-2 col-span-10 md:col-start-5 md:col-span-4 mb-[40px]'>
              {noticiaCategoria2 && (
                <a href={formatLink(noticiaCategoria2.LinkNoticia)} rel="noopener noreferrer">
                  <div className='flex flex-row mb-[30px]'>
                    <div className='w-1/3'>
                      <img src={noticiaCategoria2.LinkImagen} alt={noticiaCategoria2.titulo} className='w-full h-full object-cover' />
                    </div>
                    <div className='w-2/3'>
                      <p>{noticiaCategoria2.Categoria}</p>
                      <h1 className='text-base mb-2 ml-2 font-black'>{noticiaCategoria2.titulo}</h1>
                    </div>
                  </div>
                </a>
              )}
              {noticiaCategoria3 && (
                <a href={formatLink(noticiaCategoria3.LinkNoticia)} rel="noopener noreferrer">
                  <div className='flex flex-row mb-[30px]'>
                    <div className='w-1/3'>
                      <img src={noticiaCategoria3.LinkImagen} alt={noticiaCategoria3.titulo} className='w-full h-full object-cover'/>
                    </div>
                    <div className='w-2/3'>
                      <p>{noticiaCategoria3.Categoria}</p>
                      <h1 className='text-base ml-2 font-black'>{noticiaCategoria3.titulo}</h1>
                    </div>
                  </div>
                </a>
              )}
              {noticiaCategoria4 && (
                <a href={formatLink(noticiaCategoria4.LinkNoticia)} rel="noopener noreferrer">
                  <div className='flex flex-row'>
                    <div className='w-1/3'>
                      <img src={noticiaCategoria4.LinkImagen} alt={noticiaCategoria4.titulo} className='w-full h-full object-cover'/>
                    </div>
                    <div className='w-2/3'>
                      <p>{noticiaCategoria3.Categoria}</p>
                      <h1 className='text-base font-bold mb-2 ml-2 font-black'>{noticiaCategoria4.titulo}</h1>
                    </div>
                  </div>
                </a>
              )}
            </div>

            <div className="grid col-start-10 col-span-2 hidden md:block">
              <Populares/>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-4 mt-[5px]'>
            <a href="/ConjuntoDeNoticias/MaisNoticias" rel="noopener noreferrer" className="text-roxo-p08 grid col-start-2 col-span-8 font-black">
              <div className='flex flex-row'>
                <p className='sm:text-base md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl m-2'>veja mais em notícias</p>
                <img src="/assets/Imagens_aleatorias/seta-direita.png" alt="imagem de Ivete Sangalo" className='ml-2'/>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Home;
