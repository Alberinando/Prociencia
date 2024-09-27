
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

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">NOME DA CATEGORIA</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3">
          {noticiaPrincipal ? (
            <div className="mb-4">
              <a href={formatLink(noticiaPrincipal.LinkNoticia)} className="block">
                <img src={noticiaPrincipal.LinkImagen} alt={noticiaPrincipal.titulo} className="w-full h-64 object-cover"/>
                <h2 className="text-xl font-bold mt-2">{noticiaPrincipal.titulo}</h2>
                <p>{noticiaPrincipal.data}</p>
              </a>
            </div>
          ) : (
            <p>Carregando...</p>
          )}
          {noticiaSecundaria1 && (
            <div className="mb-4">
              <a href={formatLink(noticiaSecundaria1.LinkNoticia)} className="block">
                <img src={noticiaSecundaria1.LinkImagen} alt={noticiaSecundaria1.titulo} className="w-full h-32 object-cover"/>
                <h2 className="text-lg font-bold mt-2">{noticiaSecundaria1.titulo}</h2>
                <p>{noticiaSecundaria1.data}</p>
              </a>
            </div>
          )}
          {noticiaSecundaria2 && (
            <div className="mb-4">
              <a href={formatLink(noticiaSecundaria2.LinkNoticia)} className="block">
                <img src={noticiaSecundaria2.LinkImagen} alt={noticiaSecundaria2.titulo} className="w-full h-32 object-cover"/>
                <h2 className="text-lg font-bold mt-2">{noticiaSecundaria2.titulo}</h2>
                <p>{noticiaSecundaria2.data}</p>
              </a>
            </div>
          )}
        </div>
        <div className="lg:w-1/3 lg:ml-4">
          <div className="bg-gray-200 p-4 mb-4">
            <img src="link-to-newsletter-image" alt="Newsletter" className="w-full h-32 object-cover mb-4"/>
            <h2 className="text-xl font-bold mb-2">NEWSLETTER HORÓSCOPO</h2>
            <p className="mb-2">Toda segunda, receba no seu e-mail as previsões semanais para o seu signo.</p>
            <input type="email" placeholder="Cadastre o seu melhor email" className="w-full p-2 mb-2 border border-gray-400"/>
            <button className="w-full bg-pink-500 text-white p-2">ENVIAR</button>
          </div>
          <div className="bg-gray-200 p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">POPULARES</h2>
           
          </div>
          <div className="bg-gray-200 p-4">
            <h2 className="text-xl font-bold mb-2">RECOMENDADOS</h2>
          
          </div>
        </div>
      </div>
      <button className="w-full bg-pink-500 text-white p-2 mt-4">VER MAIS</button>
    </div>
  );
}

export default Home;
