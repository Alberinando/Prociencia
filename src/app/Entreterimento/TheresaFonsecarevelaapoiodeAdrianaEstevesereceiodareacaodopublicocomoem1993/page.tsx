"use client"

export default function noticia() {
    return (
        <>
                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28" >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            Theresa Fonseca revela apoio de Adriana Esteves e receio da reação do do público como em 1993
                        </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                        <p className="sm:text-[24px] text-[18px] ">
                            Mariana na primeira versão da novela, Adriana Esteves viveu crise após críticas à personagem e chegou a rejeitar 
                            trabalhos depois da novela. 'Tô com medo até agora', disse Theresa.
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_entretedimento/noivas.png" alt="imagem de noivas se casando" />
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
                            Após fazer sucesso como a Labibe de Mar do Sertão, Theresa Fonseca estreou na faixa das 9 como a Mariana de Renascer. 
                            Vivendo um triângulo amoroso entre pai e filho, a personagem está longe de ser uma queridinha do público. Mas Theresa 
                            defende Mariana e diz que entende a desconfiança dos telespectadores em relação à jovem. No Encontro com Patrícia 
                            Poeta desta terça-feira (27), Theresa contou recebeu o apoio de Adriana Esteves, que interpretou Mariana na primeira 
                            versão da novela.
                        </p>
                        <p>
                            "Adriana é uma pessoa admirável em todos os aspectos e ela se demonstrou uma parceria"
                        </p>
                        <p>
                            Em 1993, quando a primeira versão de Renascer foi ao ar, Adriana Esteves foi muito criticada justamente pela rejeição 
                            do público à personagem. Ao podcast Papo de Novela, a atriz contou sobre a crise profissional que teve durante a 
                            trama e que a afastou de outros projetos.
                        </p>
                        <p>
                            "Minha personagem era muito sofrida, e como eu sou uma atriz que se dedica muito, fiquei muito envolvida com a 
                            história. Ela era uma menina muito sozinha, muito sofrida. E isso foi de um impacto muito grande pra mim. Acho 
                            que eu misturei muito o personagem... eu me dediquei tanto, pra buscar, pra entender... e eu fiquei durante aquele 
                            tempo da novela sofrida com sofrimentos que eram da Mariana, não eram pra ser meus. Tudo isso é a maturidade. Algumas 
                            coisas nunca mais foram feitas e repetidas por mim enquanto atriz. Dá pra ter a mesma dedicação, o mesmo 
                            aprofundamento, sem você misturar muito o que é ficção e o que é realidade", disse Adriana.
                        </p>
                        <p>
                            Nesse sentido, Theresa agradeceu o apoio de Adriana no que diz respeito à pressão que a personagem carrega.
                        </p>
                        <p>
                        "Ela foi muito fofa. Ela aumentou minha moral"
                        </p>
                        <p>Theresa Fonseca também contou que assim como Adriana Esteves tem receio do que o público vai achar da personagem.</p>
                        <p>
                        "Tô com medo até agora. Não passou ainda, não. Mas eu gosto de desafio e eu acredito muito em Deus", disse.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}