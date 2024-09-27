"use client"

import Noticias from "@/components/noticias_gerais/noticias_gerais";
import Tecnologia from "@/components/noticias_tecnologia/noticias_tecnologia";
import Imagem from "@/components/imagem/imagem";
import NoticiaSaude from "@/components/noticias_saude/noticias_saude";
import NoticiaModaBeleza from "@/components/noticias_modabeleza/noticias_modabeleza";
import VideoGrid from "@/components/VideoGrid/VideoGrid";
import Newsletter from "@/components/Newsletter/Newsletter";

export default function Home() {
  return (
    <>
    <div>
    <Noticias />
    <div className="grid grid-cols-12 gap-4 mt-[50px]">
      <div className=" w-full h-full object-cover grid col-start-2 col-span-10 sm:col-start-2 sm:col-span-10  md:col-start-2 md:col-span-10">
        <Imagem/>
      </div>
    </div>

    <div className="grid grid-cols-12 gap-4 mt-[50px] block md:hidden">
      <div className=" w-full h-full object-cover grid col-start-2 col-span-10 sm:col-start-2 sm:col-span-10  md:col-start-2 md:col-span-10">
        <Newsletter/>
      </div>
    </div>
    
    <Tecnologia/>
    <NoticiaSaude/>
    <div className="grid grid-cols-12 gap-4 mt-[50px]">
      <div className=" w-full h-full object-cover grid col-start-2 col-span-10 sm:col-start-2 sm:col-span-10  md:col-start-2 md:col-span-10">
        <Imagem/>
      </div>
    </div>
    <NoticiaModaBeleza/>
    <div className="grid grid-cols-12 gap-4 mt-[50px]">
      <div className=" w-full h-full object-cover grid col-start-2 col-span-10 sm:col-start-2 sm:col-span-10  md:col-start-2 md:col-span-10">
        <Imagem/>
      </div>
    </div>
      <div className="grid grid-cols-12 gap-4 mt-[50px]">
        <div className=" w-full h-full object-cover grid col-start-2 col-span-10 sm:col-start-2 sm:col-span-10  md:col-start-2 md:col-span-10">
          <VideoGrid/>
        </div>
      </div>
    </div>
     
    </>
  );
}
