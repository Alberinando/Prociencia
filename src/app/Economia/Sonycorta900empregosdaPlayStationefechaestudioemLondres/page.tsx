"use client"

export default function noticia() {
    return (
        <>

                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 " >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            Sony corta 900 empregos da PlayStation e fecha estúdio em Londres
                        </h1>
                    </div>

                     <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                        <p className="sm:text-[24px] text-[18px] ">
                            Medida ocorre após companhia reduzir expectativa anual de vendas do PlayStation 5
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_economia/playstation.png" alt="imagem de playstation" />
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
                            A Sony está cortando cerca de 900 empregos em sua unidade PlayStation e fechando um estúdio em Londres, informou a 
                            companhia nesta terça-feira (27), enquanto a indústria de videogames tenta se recuperar de uma crise pós-pandemia.
                        </p>
                        <p>
                            As demissões em massa afetarão cerca de 8% do pessoal da divisão em regiões que vão das Américas à Ásia e ocorrem 
                            dias após a Sony ter reduzido a expectativa anual de vendas de seu console, o PlayStation 5.
                        </p>
                        <p>
                            “Concluímos que decisões difíceis têm se tornado inevitáveis”, disse o chefe de jogos da Sony, Jim Ryan, culpando as 
                            mudanças na forma como a indústria de videogames desenvolve, distribui e lança produtos. Ryan deve se aposentar em 
                            março.
                        </p>
                        <p>
                            As demissões em massa afetarão cerca de 8% do pessoal da divisão em regiões que vão das Américas à Ásia e ocorrem 
                            dias após a Sony ter reduzido a expectativa anual de vendas de seu console, o PlayStation 5.
                        </p>
                        <p>
                            “Concluímos que decisões difíceis têm se tornado inevitáveis”, disse o chefe de jogos da Sony, Jim Ryan, culpando 
                            as mudanças na forma como a indústria de videogames desenvolve, distribui e lança produtos. Ryan deve se aposentar 
                            em março.
                        </p>
                        <p>
                            As demissões em massa também afetarão outros estúdios da Sony, incluindo a norte-americana Insomniac Games, que 
                            trabalhou em jogos como “Marvel’s Spider-Man 2” e Naughty Dog, o estúdio por trás de “The Last of Us”.
                        </p>
                        <p>
                            A Sony havia dito mais cedo este mês que espera um declínio gradual nas vendas unitárias do PlayStation 5 a partir 
                            do próximo ano fiscal e que não planeja lançar nenhum título de franquia grande no próximo ano fiscal.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}