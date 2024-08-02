"use client"

import Noticias from "@/components/noticias_gerais/noticias_gerais.tsx";
import NoticiasPorCategoria from "@/components/noticias_tecnologia/noticias_tecnologia.tsx";
import Imagem from "@/components/imagem/imagem";
import NoticiaEconomia from "@/components/noticias_saude/noticias_saude.tsx";
import NoticiaModaBeleza from "@/components/noticias_modabeleza/noticias_modabeleza.tsx";
import VideoGrid from "@/components/VideoGrid/VideoGrid.tsx";
import Newsletter from "@/components/Newsletter/Newsletter.tsx";

export default function Home() {
  return (
    <>
    <div>
    <Noticias />
    <Imagem/>
    <NoticiasPorCategoria/>
    <NoticiaEconomia/>
    <NoticiaModaBeleza/>
    <Imagem/>
    <VideoGrid/>
    </div>
     
    </>
  );
}
