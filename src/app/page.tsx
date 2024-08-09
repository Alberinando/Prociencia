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
    <Imagem/>
    <Tecnologia/>
    <NoticiaSaude/>
    <NoticiaModaBeleza/>
    <Imagem/>
    <VideoGrid/>
    </div>
     
    </>
  );
}
