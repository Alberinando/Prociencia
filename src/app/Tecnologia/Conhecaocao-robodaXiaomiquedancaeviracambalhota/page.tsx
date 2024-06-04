"use client"

export default function noticia() {
    return (
        <>
            <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28" >
                <div className="grow col-start-2 col-span-4 ">
                    <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                        Conheça o cão-robô da Xiaomi que dança e vira cambalhota
                    </h1>
                </div>

                <div className="grow col-start-2 col-span-4">
                    <img src="/assets/imagens_tecnologia/cyberdog-2-xiaomi.webp" className="w-[802px] h-[400px]" alt="imagem do cão-robô da xaomi" />
                </div>

                <div className="grow overflow-hidden   sm:col-start-6 col-span-3 col-start-2 col-span-4 space-y-4   m-0 sm:px-[50px] md:px-[60px] lg:px-[70px] xl:px-[80px]">
                    <div className="bg-darkgray flex justify-center ">
                        <h1 className="text-[15px] sm:text-[20px] md:text-[25px] lg:text-[27px] xl:text-[32px] text-center self-center  bg-darkgray">NEWSLETTER HORÓSCOPO</h1>
                    </div>
                        <p className=" text-[18px] ">Toda segunda, receba no seu e-mail as previsões semanais para o seu signo.</p>
                        <p className="text-center ">Cadastre o seu melhor e-mail:</p>
                       <div className="">
                        <input
                                type="text"
                                className=" w-full p-2 border border-gray rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite aqui..."
                            />
                       </div>
                        <div className="flex justify-center ">
                            <button className="bg-gray mt-4 w-48 h-10 col-start-2 col-span-1 font-pixels">
                                Enviar
                            </button>
                        </div>

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