"use client"
import Newsletter from "@/components/Newsletter/Newsletter"

export default function noticia() {
    return (
        <>
            <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28 font-Arial" >
                <div className="grow col-start-2 col-span-4 ">
                    <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                        Conheça o cão-robô da Xiaomi que dança e vira cambalhota
                    </h1>
                </div>

                <div className="grow col-start-2 col-span-4">
                    <img src="/assets/imagens_tecnologia/cyberdog-2-xiaomi.webp" className="w-[802px] h-[400px]" alt="imagem do cão-robô da xaomi" />
                </div>

                <div className="grow overflow-hidden   sm:col-start-6 col-span-3 col-start-2 col-span-4 space-y-4   m-0 sm:px-[50px] md:px-[60px] lg:px-[70px] xl:px-[80px]">
                    <Newsletter/>

                </div>
                    
                <div className="col-start-2 col-span-4 space-y-4 text-[18px]">
                    <p>O CyberDog 2 é o novo modelo de cão-robô lançado pela Xiaomi no fim do ano passado.</p>
                            <p>O robozinho, no formato de um cachorro, consegue fazer manobras de alta dificuldade, como dar cambalhotas para trás, além de ser resistente a quedas.</p>
                            <p>A empresa também promete um controle mais preciso nos movimentos do cachorro, que também tem um sistema de detecção e tomada de decisões com 19 sensores para visão, tato e audição.</p>
                            <p>O robô tem uma câmera inteligente e consegue identificar quem são seus donos através da voz ou da imagem, além de obedecer a comandos e gestos. Ele serve para brincar, fazer companhia e outras características dos cachorros reais.</p>
                            <p>E também tem a capacidade de andar por aí evitando obstáculos e de ficar mais inteligente conforme as interações.</p>
                            <p>Mas, além disso, segundo a Xiaomi, o cão-robô também foi criado para auxiliar na integração de uma casa inteligente, podendo executar comandos como acender ou apagar as luzes de casa.</p>
                            <p>Outra novidade, é que a Xiaomi utiliza tecnologia de fonte aberta no robô, permitindo que os usuários possam “customizar” tanto o hardware como as funções de software do cachorro.</p>
                            <p>Veja vídeo do cão-robô da Xiaomi:</p>
                            <p>O CyberDog 2 foi um dos destaques do Mobile World Congress (MWC), a maior feira de conectividade e tecnologia móvel do mundo. O evento acontece entre 26 e 29 de fevereiro em Barcelona, na Espanha.</p>
                            <br />
                    </div>

                <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                    <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                </div>
            </div>
        </>
    );
}