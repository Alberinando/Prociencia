"use client"

export default function noticia() {
    return (
        <>
                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 " >
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





            {/*<h1>“Cowboy Core”: Beyoncé e Ana Castela influenciam nova tendência</h1>
            <p>
                Uma das grandes apostas para 2024, a tendência traz aspectos do country e, no Brasil, do sertanejo
            </p>
            <img src="/assets/imagens_modaebeleza/Beyonce_e_Ana_Castela.png" alt="imagem de Beyonce e Ana Castela" />
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
            <div className="grid justify-items-center w-6/8 space-y-[100px]">
                <div className="w-2/8 ml-[50px]">
                        
                    <div className="w-[419px] h-[538px] mt-[400px] space-y-6">
                        <h1 className="w-[419px] h-[108px]  bg-darkgray text-[36px] text-center">NEWSLETTER HORÓSCOPO</h1>
                        <p className="w-[419px] h-[108px] text-[26px]  text-black">Toda segunda, receba no seu e-mail as previsões semanais para o seu signo.</p>
                        <p>Cadastre o seu melhor e-mail:</p>
                        <input
                        type="text"
                        className="w-[356px] h-[30px] w-full p-2 border border-gray rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Digite aqui..."
                        />
                        <button className="bg-gray mt-4 ml-[100px] w-48 h-10 font-pixels">
                            Enviar
                        </button>
                    </div>
                    <div className="h-[400px] w-[403px]">
                        <div className="w-[419px] h-[1666px]  bg-darkgray">
                            <p className=" text-[64px]">Área para Para divulgação</p>
                        </div>
                    </div>
                </div>
</div>*/}
        </>
    );
}