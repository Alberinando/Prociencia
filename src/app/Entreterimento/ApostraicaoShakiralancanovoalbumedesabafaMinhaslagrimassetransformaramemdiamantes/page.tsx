"use client"
import Newsletter from "@/components/Newsletter/Newsletter"

export default function noticia() {
    return (
        <>
                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28 font-Arial" >
                    <div className="grow col-start-2 col-span-4 mb-[20px]">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            Após traição, Shakira lança novo álbum e desabafa: 'Minhas lágrimas se transformaram em diamantes'
                        </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 mb-[20px]">
                        <p className="text-[18px] ">
                            Cantora anunciou a data de lançamento de seu novo disco e falou sobre o processo de composição das músicas: 'Enquanto 
                            escrevia cada música, eu estava me reconstruindo'
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4 mb-[20px]">
                        <img src="/assets/imagens_entretedimento/Shakira.png" alt="imagem de Shakira" />
                    </div>

                    <div className="grow overflow-hidden   sm:col-start-6 col-span-3 col-start-2 col-span-4 space-y-4   m-0 sm:px-[50px] md:px-[60px] lg:px-[70px] xl:px-[80px]">
                        <Newsletter/>

                    </div>
                    
                    <div className="col-start-2 col-span-4 space-y-8 text-[18px]">
                        <p>
                                Shakira acaba de anunciar seu mais novo álbum "Las Mujeres Ya No Lloran" ("As mulheres já não choram"). Em suas redes 
                                sociais, ela também divulgou a data de lançamento do disco, que classificou como "processo alquímico", para o dia 
                                22 de março.
                        </p>
                        <p>
                                Esse é o primeiro álbum de estúdio que a cantora grava em sete anos. O último foi o "El Dorado", de 2017. "O meu novo 
                                álbum, eu criei junto com todos vocês que estiveram lá para mim a cada passo do caminho. Tornar este corpo de 
                                trabalho tem sido um processo alquímico".
                        </p>
                        <p>
                                "Enquanto escrevia cada música, eu estava me reconstruindo. Enquanto as cantava, minhas lágrimas se transformaram em 
                                diamantes, e minha vulnerabilidade em força", descreveu Shakira no post.
                        </p>
                        <p>
                                Nelly Furtado, uma das grandes cantoras do início dos anos 2000, colocou emojis de coroa (👑) nos comentários do 
                                post. Shakira foi casada com o ex-jogador de futebol Gerard Piqué por 11 anos e teve dois filhos, Sasha e Milan.
                        </p>
                        <h2 className="text-[20px] font-black">Relembre a separação:</h2>
                        <p>
                                Shakira e Piqué emitiram um comunicado em conjunto no dia 4 de junho de 2022 anunciando a separação. "Lamentamos 
                                confirmar que estamos nos separando. Pelo bem-estar de nossos filhos, que são nossa máxima prioridade, pedimos 
                                respeito à privacidade", diz o texto.
                        </p>
                        <p>
                                Os rumores de traição logo vieram à tona. Segundo o portal americano "Page Six", a colombiana teria ficado "devastada" 
                                ao descobrir que Clara Marti esteve em sua residência em 2021, quando ela ainda era casada com o espanhol. A revelação 
                                se deu após fãs notarem que, por descuido, a jovem de 23 anos teria aparecido no fundo do vídeo enquanto o ex-jogador 
                                concedia uma entrevista via Zoom.
                        </p>
                        <p>
                                Em novembro de 2022, Shakira e Piqué chegaram a um acordo sobre a guarda de Milan e Sasha, frutos do casamento entre 
                                os dois.
                        </p>
                        <p>
                                Atualmente, Piqué está namorando Clara Chía Marti (saiba quem é ela clicando aqui), apontada como o pivô da 
                                separação do atleta com a artista. Já Shakira teve alguns supostos affairs apontados nos últimos meses, de Tom 
                                Cruise a Lewis Hamilton.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}