"use client"

export default function noticia() {
    return (
        <>
                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28 font-Arial" >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] mb-[20px]">
                            Apenas 38% dos filmes possuem protagonistas mulheres, diz estudo     
                        </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                        <p className=" text-[18px] mb-[20px]">
                        Em contraponto, levantamento ainda mostra que homens representaram 62% dos personagens principais em 2023
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_entretedimento/mulheres_de_rosa.png" alt="imagem de mulheres de rosa" />
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
                            Um estudo realizado pelo It’s a Man’s (Celluloid) World apontou que a igualdade de gênero no cinema teve uma queda 
                            em 2023. Apesar do estrondoso sucesso de filmes como “Barbie”, entre 100 filmes lançados no ano passado, 77% deles 
                            tiveram mais homens do que mulheres em papéis com diálogos.
                        </p>
                        <p>
                            O relatório realizado pela Dra. Martha Lauzen, diretora executiva do Centro para o Estudo das Mulheres na Televisão e 
                            no Cinema da San Diego State University, ainda apontou que apenas 18% dos filmes tinham mais personagens femininas do 
                            que masculinas e somente 5% dos filmes apresentava números iguais de personagens em ambos gêneros.
                        </p>
                        <p>
                            Vale ainda mencionar que segundo o estudo, a porcentagem de filmes de maior bilheteria nos EUA com únicas 
                            protagonistas femininas diminuiu de 33% em 2022 para 28% em 2023. Em 2023, as mulheres representavam 38% dos 
                            personagens principais, enquanto os homens representavam 62% dos personagens principais.
                        </p>
                        <p>
                            O número chama atenção já que as mulheres representam apenas um pouco menos da metade da população mundial. De acordo 
                            com a pesquisa “World Population Prospects 2022” – “Projeção da População Mundial”, em tradução livre – da ONU, 
                            globalmente, o mundo conta com 50,3% de homens e 49,7% de mulheres.
                        </p>
                        <p>
                            Outro dado que é importante citar é que a idade também é fundamental para esse número. De acordo com o estudo, a 
                            porcentagem de personagens femininas despencou à medida que passaram de
                            dos 30 (33%) aos 40 (15%), enquanto o número de personagens masculinos nestas idades mantiveram-se estáveis ​​em 28%.
                        </p>
                        <p>
                            Apesar das atuações de alto nível de Jane Fonda, Diane Keaton, Rita Moreno e outras atrizes, mulheres com mais de 
                            60 anos permaneceram com apenas 7% de todas as personagens femininas, bem
                            abaixo da porcentagem de mulheres nesta faixa etária na população dos EUA.
                        </p>
                        <p>
                            Entretanto, nem tudo é negativo: quando se trata de raça e etnia, a porcentagem de personagens asiáticas cresceu de 
                            8,1% para 9,2%, enquanto de nativas americanas foi de 0 a 0,6%. A porcentagem de mulheres brancas caiu de 64,2% para 
                            56,9%, mas de negras, também, de 18% para 15,3%.
                        </p>
                        <p>
                            Por fim, mas não menos importante, a pesquisa citou que em filmes com pelo menos uma diretora e/ou escritora, as 
                            mulheres representavam 48% de protagonistas. Um caso que exemplifica isso é “Barbie”, dirigido por Greta Gerwig e 
                            produzido e estrelado por Margot Robbie. Outro caso é “Priscilla”, filme de Sofia Coppola.
                        </p>
                        <p>
                            Já em longas com diretores e/ou roteiristas exclusivamente masculinos, as mulheres representaram 19% dos protagonistas.
                        </p>
                        <p>
                            Além disso, em filmes liderados por mulheres, as personagens principais foram representadas em 48%. Porém, em longas 
                            encabeçados por homens, as mulheres representavam 33% dos papéis principais.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}