"use client"
import Link from "next/link";
import React from "react";


const Footer = () => {
    return (

<footer className="bottom-0 left-0 bg-roxo-p08 grid grid-cols-1 md:grid-cols-3 text-black text-sm md:text-base lg:text-lg xl:text-xl justify-center items-center space-y-1 md:space-y-0  md:mr-0">
  <div className="order-last md:order-first p-4 py-8 md:py-16 text-center">
    <p className="font-pixels text-branco">Logo</p>
  </div>
  <div className="bg-gray-400 p-4 py-8 md:py-16 text-center">
  <p className="ordinal font-pixels text-branco">Contato</p>
  <ul className="space-y-1 py-2 md:py-6 list-none text-branco">
    <li>(84)9999-9999</li>
    <li>contato@email.com</li>
    <li>Rua,xxx-20-yyy</li>
    <li>Parnamirim, RN</li>
  </ul>
  <div className="p-4 flex flex-row items-center justify-center space-x-4">
    <div>
      <img src="/assets/imagens_aleatorias/whatsapp.png" className="w-[20px] h-[20px]" alt="imagem com uma seta" />
    </div>
    <div>
      <img src="/assets/imagens_aleatorias/instagram.png" className="w-[20px] h-[20px]" alt="imagem com uma seta" />
    </div>
    <div>
      <img src="/assets/imagens_aleatorias/facebook.png" className="w-[20px] h-[20px]" alt="imagem com uma seta" />
    </div>
  </div>
  <p>
    <Link href="/formulario" className="block text-preto p-4">
      <button className="bg-rosa-claro mt-4 md:mt-2 p-2 font-pixels rounded-lg">
        <div className="flex flex-row items-center">
          <p className="text-[14px] text-marron-escuro ml-2">
            PRECISA DE AJUDA?
          </p>
          <div>
            <img src="/assets/imagens_aleatorias/mao_com_coracao.png" className="w-[20px] h-[20px]" alt="imagem com uma seta" />
          </div>
        </div>
      </button>
    </Link>
  </p>
</div>
<div className="bg-gray-500 p-4 py-8 md:py-16 text-center text-branco ">
  <p className="font-pixels -mt-8">Informações</p>
  <ul className="space-y-1 py-6 list-none">
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
