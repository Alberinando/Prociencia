import React, { useState, useEffect } from 'react';
import Newsletter from "@/components/Newsletter/Newsletter";

const Home: React.FC = () => {
  const [noticiaPrincipal, setNoticiaPrincipal] = useState<any>(null);
  const [noticiaCategoria1, setNoticiaCategoria1] = useState<any>(null);
  const [noticiaCategoria2, setNoticiaCategoria2] = useState<any>(null);
  const [noticiaCategoria3, setNoticiaCategoria3] = useState<any>(null);

  useEffect(() => {
    fetch('/noticias.json')
      .then(response => response.json())
      .then(data => {
        const noticiasCategoria = [
            ...data.noticiastecnologia,
            ...data.noticiasSaude,
            ...data.noticiasPolitica,
            ...data.noticiasModaEBeleza,
            ...data.noticiasEntretenimento,
            ...data['noticiasEconomia '],
            ...data['noticiasComportamento '],
            ...data.noticiasCiencia,
        ];

        // Seleciona a notícia principal
        const randomIndexPrincipal = Math.floor(Math.random() * noticiasCategoria.length);
        const noticiaPrincipalSelecionada = noticiasCategoria[randomIndexPrincipal];
        setNoticiaPrincipal(noticiaPrincipalSelecionada);

        // Remove a notícia principal da lista para evitar repetição
        const noticiasRestantes = noticiasCategoria.filter(
          (          noticia: { titulo: any; }) => noticia.titulo !== noticiaPrincipalSelecionada.titulo
        );

        // Seleciona outras 3 notícias da mesma categoria, garantindo que não sejam repetidas
        const noticiaCategoria1Selecionada = noticiasRestantes[Math.floor(Math.random() * noticiasRestantes.length)];
        const noticiasRestantes2 = noticiasRestantes.filter(
          (          noticia: { titulo: any; }) => noticia.titulo !== noticiaCategoria1Selecionada.titulo
        );

        const noticiaCategoria2Selecionada = noticiasRestantes2[Math.floor(Math.random() * noticiasRestantes2.length)];
        const noticiasRestantes3 = noticiasRestantes2.filter(
          (          noticia: { titulo: any; }) => noticia.titulo !== noticiaCategoria2Selecionada.titulo
        );

        const noticiaCategoria3Selecionada = noticiasRestantes3[Math.floor(Math.random() * noticiasRestantes3.length)];

        // Define as notícias das categorias
        setNoticiaCategoria1(noticiaCategoria1Selecionada);
        setNoticiaCategoria2(noticiaCategoria2Selecionada);
        setNoticiaCategoria3(noticiaCategoria3Selecionada);
      })
      .catch(error => console.error('Error fetching noticias:', error));
  }, []);

  const formatLink = (linkNoticia: string) => {
    return `/${linkNoticia}`;
  };

  return (
    <div className="App">
      {noticiaPrincipal ? (
        <div className='ml-[20px] mr-[20px]'>
          <div className='grid grid-cols-12 gap-4 mt-[150px] mb-[20px]'>
            <h1 className='text-roxo-p08 grid col-start-2 col-span-3 text-[20px] font-black text-4xl'>Economia</h1>
          </div>
          <div className='grid grid-cols-12 gap-4'>

            <div className='grid col-start-2 col-span-10 md:col-start-2 md:col-span-3 mb-[10px]'>
              {noticiaPrincipal && (
                <div className="relative w-full h-full">
                  <a href={formatLink(noticiaPrincipal.LinkNoticia)} rel="noopener noreferrer" className="block w-full h-full">
                    <img src={noticiaPrincipal.LinkImagen} alt={noticiaPrincipal.titulo} className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                      <div className="text-white">
                        <h2 className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 ">{noticiaPrincipal.titulo}</h2>
                        <p className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Descrição da imagem com mais detalhes.</p>
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <div className='grid col-start-2 col-span-10 md:col-start-2 md:col-span-3 mb-[20px]'>
              {noticiaCategoria1 && (
                <a href={formatLink(noticiaCategoria1.LinkNoticia)} rel="noopener noreferrer">
                  <div className='flex flex-row mb-[30px]'>
                    <div className='w-1/2'>
                      <img src={noticiaCategoria1.LinkImagen} alt={noticiaCategoria1.titulo} className='w-full h-full object-cover' />
                    </div>
                    <div className='w-1/2'>
                      <p>{noticiaCategoria1.Categoria}</p>
                      <h1 className='text-base mb-2  ml-2 font-black'>{noticiaCategoria1.titulo}</h1>
                    </div>
                  </div>
                </a>
              )}

              {noticiaCategoria3 && (
                <a href={formatLink(noticiaCategoria2.LinkNoticia)} rel="noopener noreferrer">
                  <div className='flex flex-row mb-[30px]'>
                    <div className='w-1/2'>
                      <img src={noticiaCategoria2.LinkImagen} alt={noticiaCategoria2.titulo} className='w-full h-full object-cover'/>
                    </div>
                    <div className='w-1/2'>
                      <p>{noticiaCategoria2.Categoria}</p>
                      <h1 className='text-base mb-2  ml-2 font-black'>{noticiaCategoria2.titulo}</h1>
                    </div>
                  </div>
                </a>
              )}

              {noticiaCategoria3 && (
                <a href={formatLink(noticiaCategoria3.LinkNoticia)} rel="noopener noreferrer">
                  <div className='flex flex-row'>
                    <div className='w-1/2'>
                      <img src={noticiaCategoria3.LinkImagen} alt={noticiaCategoria3.titulo} className='w-full h-full object-cover'/>
                    </div>
                    <div className='w-1/2'>
                      <p>{noticiaCategoria3.Categoria}</p>
                      <h1 className='text-base font-bold mb-2  ml-2 font-black'>{noticiaCategoria3.titulo}</h1>
                    </div>
                  </div>
                </a>
              )}
            </div>

            <div className='hidden md:block grid col-start-10 col-span-2'>
              <Newsletter/>
            </div>

          </div>

          <div className='grid grid-cols-12 gap-4 mt-[20px]'>
            <a href="/ConjuntoDeNoticias/MaisNoticias" rel="noopener noreferrer" className="text-roxo-p08 grid col-start-2 col-span-8 font-black ">
              <div className=' flex flex-row'>
                <p className='sm:text-base md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl m-2'> veja mais em notícias</p>
                <img src="/assets/Imagens_aleatorias/seta-direita.png" alt="Veja mais" className='ml-2'/>
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
