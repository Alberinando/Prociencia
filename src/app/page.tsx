"use client"
import Link from "next/link";
import Footer from '../components/footer/index';
import Header from "@/components/header";
import Conteudo from "@/components/main/conteudo";

export default function Home() {
  return (
    <>
    <Header/>
    <Conteudo/>
    <Footer/>
    </>
  );
}
