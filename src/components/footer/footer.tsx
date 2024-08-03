"use client"
import React from "react";

const Footer = () => {
    return (

<footer className="bottom-0 left-0 bg-roxo-p08 grid grid-cols-1 md:grid-cols-3 text-black text-sm md:text-base lg:text-lg xl:text-xl justify-center items-center space-y-1 md:space-y-0 -mr-10">
  <div className="order-last md:order-first p-4 py-8 md:py-16 text-center">
    <p className="font-pixels text-branco">Logo</p>
  </div>
  <div className="bg-gray-400 p-4 py-8 md:py-16 text-center  ">
    <p className="ordinal font-pixels text-branco">Contato</p>
    <ul className="space-y-1 py-2 md:py-6 list-none  text-branco">
      <li>(84)9999-9999</li>
      <li>contato@email.com</li>
      <li>Rua,xxx-20-yyy</li>
      <li>Parnamirim, RN</li>
      <li className="text-center">
       
      </li>
    </ul>
    <p>
      <button className="bg-rosa-claro mt-4 md:mt-8 w-48 h-10 font-pixels">
            FALE CONOSCO
          </button>
    </p>
  </div>
  <div className="bg-gray-500 py-8 md:py-16 p-4 text-center text-branco">
    <p className="font-pixels">Informações</p>
    <ul className="space-y-1 py-2 md:py-6 list-none">
      <li>Notícias</li>
      <li>Saúde</li>
      <li>Comportamento</li>
      <li>Moda e Beleza</li>
      <li>Entretenimento</li>
      <li>Vídeos</li>
      <li>Termos e Condições</li>
    </ul>
  </div>
</footer>

    );
}

export default Footer;
