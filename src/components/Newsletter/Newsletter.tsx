
import Link from "next/link";
import React from "react";


const Conteudo = () => {
    return (
        <>
             <div className="grid col-start-10 col-span-2  md:ml-[0px] md:mr-[0px]">
                  <div className='bg-custom-pink h-3/4 rounded border order border-custom-pink'>
                    <h1 className="text-[20px] font-extrabold text-white text-center p-4">
                        NEWSLETTER HORÓSCOPO
                    </h1>
                  </div>
                  <div>
                    <p className="text-[17px] mt-[20px] font-extrabold">
                      Toda segunda, receba no seu e-mail as previsões semanais para o seu signo.
                    </p>
                    <p className="text-center mt-[40px] text-[14px]">
                      Cadastre o seu melhor e-mail:
                    </p>
                  </div>
                  
                  <div>
                  <input
                      type="text"
                      className="w-full p-2 border border-custom-pink rounded focus:outline-none focus:ring-2 focus:ring-roxo-p08"
                      placeholder="Digite aqui..."
                  />
              </div>
              <div className="flex justify-center">
                <Link href="/formulario" className="block px-4 py-2 mt-4 text-preto">
                    <button className="bg-custom-pink mt-4 w-28 h-8 font-pixels rounded border order border-custom-pink">
                      <p className='text-branco'> Enviar</p>
                    </button>
                </Link>
                  
              </div>
            </div> 
        </>
    )
}

export default Conteudo;


