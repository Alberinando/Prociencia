"use client"
import Newsletter from "@/components/Newsletter/Newsletter"

export default function noticia() {
    return (
        <>
                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28 font-Arial" >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            “Cowboy Core”: Beyoncé e Ana Castela influenciam nova tendência
                        </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                        <p className="sm:text-[24px] text-[18px] ">
                            Uma das grandes apostas para 2024, a tendência traz aspectos do country e, no Brasil, do sertanejo
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_modaebeleza/Beyonce_e_Ana_Castela.png" alt="imagem de Beyonce e Ana Castela" />
                    </div>

                    <div className="grow overflow-hidden   sm:col-start-6 col-span-3 col-start-2 col-span-4 space-y-4   m-0 sm:px-[50px] md:px-[60px] lg:px-[70px] xl:px-[80px]">
                        <Newsletter/>

                    </div>
                    
                    <div className="col-start-2 col-span-4 space-y-4 text-[18px]">
                        <p>
                            Enquanto Beyoncé entrou em uma nova era, assumindo uma personalidade country para combinar com o lançamento de seu 
                            novo álbum  “Act II”, continuação do projeto “Renaissance”, Ana Castela foi uma das percursoras no Brasil da 
                            tendência que hoje é conhecida como “Cowboy Core”.
                        </p>
                        <p>
                            Através de seu Instagram, além dos eventos em que participou nas últimas semanas, a cantora norte-americana se mostrou 
                            muito apegada ao chapéu country, elegendo diversas cores do acessório para compor seus looks.
                        </p>
                        <p>
                            Por sua vez, desde que se lançou na música, a cantora brasileira ficou conhecida como “boiadeira”, por carregar um estilo sertanejo glam.
                        </p>
                        <p>
                            Com direito a botas, chapéus, cintos de fivela, roupas com franja, muito couro e muito brilho, a tendência vem 
                            chamando cada vez mais atenção e ganhando muito espaço desde meados de 2022, quando começou a viralizar entre as 
                            celebridades.
                        </p>
                        <p>
                            Nos últimos tempos, nomes como Bella Hadid, Kim Kardashian, Harry Styles e Pharrell Williams também aderiram à 
                            tendência, escolhendo roupas e acessórios que remetem aos grandes rodeios.
                        </p>
                        <p>
                            Em uma mistura de estilos, até mesmo o filme “Barbie” levou o visual para as telonas, em uma mistura com a tendência 
                            barbiecore, na qual a cor rosa ganha destaque.
                        </p>
                        <p>
                            Um verdadeiro sucesso entre os famosos, sendo visto, inclusive, nas passarelas, tudo indica que o “Cowboy Core” 
                            ganhará ainda mais força nos próximos meses.
                        </p>
                        <p>
                            Ainda que pareça um estilo clichê, as botas western, os chapéus com estilo country, além de peças que misturam 
                            franjas e brilho, deverão compor cada vez mais os looks.
                        </p>
                        <p>
                        Confira algumas inspirações do “Cowboy Core”:
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}