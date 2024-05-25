"use client"

export default function noticia() {
    return (
        <>
               <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 " >
                    <div className="grow col-start-2 col-span-4 ">
                         <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                              Dados de filiação partidária revelam baixa participação política de jovens e mulheres
                         </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                         <p className="sm:text-[24px] text-[18px] ">Um ano após as Eleições 2022, número de filiados entre 16 e 24 anos caiu 14%. Maioria do eleitorado, mulheres 
                              correspondem a apenas 46% dos filiados
                         </p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                         <img src="/assets/imagens_politica/pessoas.png" alt="imagem de pessoas" />
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
                              Embora a participação de jovens nas eleições tenha aumentado de forma significativa entre os anos de 2018 e 2022, 
                              as estatísticas de filiadas e filiados a partidos políticos brasileiros revelam que apenas 1% das eleitoras e dos 
                              eleitores jovens até 24 anos integra agremiações partidárias. Atualmente, pouco mais de 170 mil pessoas compõem 
                              esse grupo. Além disso, um ano após as Eleições Gerais de 2022, houve uma queda de 14% no quantitativo de filiações 
                              entre o eleitorado de 16 a 24 anos.
                         </p>
                         <p>Veja reportagem no canal do TSE no YouTube.</p>
                         <p>
                              Disponíveis na página de estatísticas eleitorais do Tribunal Superior Eleitoral (TSE), os dados de filiação 
                              partidária atualizados até outubro deste ano também mostram que a presença de mulheres nas legendas é bastante 
                              inferior ao esperado para o gênero, que representa 53% do eleitorado nacional. Hoje, pelo menos 82 milhões de 
                              mulheres constam do cadastro da Justiça Eleitoral. Entretanto, nos partidos, elas correspondem a menos da metade 
                              dos filiados: somente 46% (7,3 milhões).
                         </p>
                         <p>
                              Secretário Judiciário do TSE, Bruney Brum afirma que, diante dessa realidade, os dados justificam as medidas 
                              legislativas e judiciais de incentivo à participação de jovens na política. “Também justificam essas ações 
                              afirmativas que têm sido tomadas para a viabilização de uma maior participação feminina no cenário político. 
                              Como exemplo, podemos citar a cota de gênero, que é a reserva de uma parte das candidaturas a um determinado 
                              gênero”, acrescenta o secretário.
                         </p>
                         <h2>Quantidade de filiados</h2>
                         <p>
                              Ainda de acordo com os dados atualizados, existem pouco mais de 15,8 milhões de pessoas registradas em partidos 
                              políticos no Brasil. A legenda com a maior quantidade de filiados é o Movimento Democrático Brasileiro (MDB), 
                              com, aproximadamente, 2 milhões, seguida pelo Partido dos Trabalhadores (PT), que tem 1,6 milhão, pelo Partido 
                              da Social Democracia Brasileira (PSDB), que contabiliza 1,3 milhão, e pelo Progressistas (PP), com 1,2 milhão.
                         </p>
                         <p>
                              Além dessas, outras três agremiações registraram mais de 1 milhão de filiados: Partido Democrático Trabalhista 
                              (PDT), União Brasil e Partido Trabalhista Brasileiro (PTB). Somados, esses sete partidos concentram 59,6% do 
                              eleitorado filiado. Em contrapartida, os sete com menos associados reúnem, ao todo, 117 mil filiações. O Partido 
                              Social Cristão (PSC) tem apenas 31 filiados, o menor número entre todas as 30 legendas registradas junto ao TSE.
                         </p>
                         <h2>Evolução</h2>
                         <p>
                              A quantidade de filiadas e filiados a partidos políticos no Brasil caiu 5,7% nos últimos cinco anos. Em 2018, 
                              havia 16,8 milhões. Já em 2023, o número diminuiu para pouco mais de 15,8 milhões. A queda é contínua desde 
                              2019 e, apesar do aumento observado em 2020, a tendência de diminuição continuou nos anos seguintes. Confira 
                              no gráfico abaixo os valores absolutos:
                         </p>
                         <h2>Perfil de filiação</h2>
                         <p>
                              As estatísticas mostram que a presença feminina na composição dos partidos é inferior à masculina, ainda que 
                              elas sejam a maioria entre os eleitores. Do total de filiados a agremiações partidárias no país, 8.524.714 
                              são homens e 7.318.025 são mulheres. Em termos proporcionais, as siglas com maior representação feminina são o 
                              MDB, com 13% de filiadas, seguida pelo PT, com 10,33%, e pelo PSDB, com 8,34%.
                         </p>
                         <p>
                              Outro dado que chama atenção é o tempo de filiação partidária, que mostra que sete a cada dez pessoas com filiação 
                              partidária mantêm o vínculo com a legenda há mais de dez anos – cerca de 11 milhões de filiados estão nesse grupo; 
                              pelo menos 2,2 milhões de eleitores estão inscritos em agremiações partidárias por um período entre cinco e dez anos; e apenas 2% estão filiados há menos de um ano.
                         </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
               </div>
        </>
    );
}