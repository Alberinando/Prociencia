"use client"

export default function noticia() {
    return (
        <>
        <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28" >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            Mercado volta a elevar previsão de crescimento da economia em 2024, aponta Focus
                        </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                        <p className="sm:text-[24px] text-[18px] ">
                            Economistas ouvidos pelo Banco Central também revisaram para baixo a expectativa de inflação neste ano
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_economia/cedulas.png" alt="imagem de cedulas" />
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
                            Os economistas ouvidos pelo Banco Central (BC) voltaram a elevar a projeção de crescimento para a economia brasileira 
                            em 2024. Agora, o mercado espera uma alta de 1,75%, ante 1,68% no relatório Focus da semana passada. Essa é a 
                            segunda revisão consecutiva para cima da atividade.
                        </p>
                        <p>
                            Para 2025, o documento trouxe manutenção na estimativa de crescimento do PIB em 2,00%, como já estava um mês atrás. O 
                            Boletim Focus, divulgado nesta terça-feira (27), é uma publicação semanal que reúne as expectativas do mercado sobre 
                            a economia doméstica.
                        </p>
                        <p>
                            Do lado da inflação, a expectativa para o IPCA caiu para 3,80% no acumulado do ano. Na semana passada, o Focus 
                            apontava para uma inflação a 3,82% em 2024.
                        </p>
                        <p>
                            O último dado divulgado do IPCA-15 mostrou um avanço de 0,31% em janeiro, após ter avançado 0,40% em dezembro. Em 12 
                            meses até janeiro, a alta foi de 4,47%, ante taxa de 4,72% até dezembro.
                        </p>
                        <p>
                            Na política monetária, as projeções foram mantidas inalteradas de que a taxa de juros encerre o ano em 9,0%. A 
                            previsão para 2025 continuou em 8,50%.
                        </p>
                        <p>
                            O Banco Central se reúne em março para a próxima decisão do Copom. A expectativa é de um novo corte de 0,5 ponto 
                            percentual na Selic, para 10,75%. Desde agosto do ano passado a instituição iniciou as reduções, quando a taxa 
                            estava a 13,75%.
                        </p>
                        <p>Da mesma forma, as estimativas para o câmbio sem mantiveram em R$ 4,93. Para 2025, a projeção é de que o dólar fique em R$ 5,00.</p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}