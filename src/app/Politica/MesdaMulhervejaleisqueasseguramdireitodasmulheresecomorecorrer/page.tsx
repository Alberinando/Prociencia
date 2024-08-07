"use client"

export default function noticia() {
    return (
        <>
                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28 font-Arial" >
                    <div className="grow col-start-2 col-span-4 mb-[20px]">
                     <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                        Mês da Mulher: veja leis que asseguram direito das mulheres e como recorrer
                     </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 mb-[20px]">
                        <p className=" text-[18px] ">
                            Leis combatem discriminação e violência contra mulheres em diversas categorias, como doméstica, sexual e política
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_politica/mulher_em_escada.png" alt="imagem de mulher em escada" />
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
                    
                    <div className="col-start-2 col-span-4 space-y-4 text-[18px] mt-[20px]">
                        <p>
                            Daqui a cinco dias, será celebrado o Dia Internacional da Mulher. Apesar das conquistas desde antes da criação da 
                            data, em 1977, pelas Nações Unidas (ONU), o Brasil ainda está longe do ideal de igualdade entre gêneros.
                        </p>
                        <p>
                            A Constituição de 1988 consagrou a igualdade entre mulheres e homens e estabeleceu como objetivo da República o 
                            combate à discriminação por gênero. Apesar disso, segundo ranking do Fórum Econômico Mundial que mede a 
                            igualdade de gênero, o Brasil ocupou a 94ª posição em uma lista de 146 países em 2022.
                        </p>
                        <p>
                            O mais recente Anuário Brasileiro de Segurança Pública apontou que "praticamente todos os indicadores relativos à 
                            violência contra mulheres apresentaram crescimento" em 2021.
                        </p>
                        <p>
                            De 1988 para cá, leis vêm sendo criadas para reforçar o combate à violência contra a mulher e para garantir 
                            direitos. Veja abaixo algumas das principais e como podem ser aplicadas:
                        </p>
                        <h2 className="text-[20px] font-black">Lei Maria da Penha</h2>
                        <p>
                            A Lei Maria da Penha foi sancionada em 2006 com o objetivo de coibir e prevenir a violência doméstica e familiar 
                            contra as mulheres. A norma é uma homenagem à Maria da Penha Maia, que sofreu violência doméstica por parte do 
                            marido e ficou paraplégica após um atentado com arma de fogo.
                        </p>
                        <p>
                            O texto altera o Código Penal para que os agressores sejam presos em flagrante ou tenham prisão preventiva decretada.
                        </p>
                        <p>
                            A lei reconhece como violência doméstica e familiar contra a mulher os atos de violência física, violência 
                            psicológica, violência sexual, violência patrimonial, violência moral.
                        </p>
                        <p>
                            Proíbe a aplicação de penas alternativas, como pagamento de multas e cestas básicas, aos agressores.
                        </p>
                        <p>
                            Possibilita medidas protetivas contra o agressor, como a saída da residência e a restrição de aproximação à mulher.
                        </p>
                        <p>
                            Tanto o descumprimento dessas medidas quanto a prática de atos reconhecidos como violência doméstica podem ser 
                            punidos com até três anos de detenção, podendo sofrer aumentos.
                        </p>
                        <p>
                            ▶️ COMO APLICAR: as denúncias podem ser feitas por qualquer pessoa via "Disque Mulher" 180, Disque 100 e para a 
                            polícia. A partir da denúncia, a lei determina o encaminhamento das vítimas e dos dependentes das vítimas a 
                            programas e serviços de proteção e de assistência social.
                        </p>
                        <h2 className="text-[20px] font-black">Lei da Importunação Sexual</h2>
                        <p>
                            Proposta pela então senadora Vanessa Grazziotin (PCdoB-AM) em 2016, a Lei da Importunação Sexual só foi aprovada 
                            e sancionada em 2018. O texto ganhou força após a divulgação de casos de homens que se masturbaram e ejacularam 
                            em mulheres em ônibus.
                        </p>
                        <p>
                            O texto prevê como crime de importunação sexual qualquer ato libidinoso realizado na presença de alguém e sem 
                            seu consentimento, como toques inapropriados ou beijos "roubados", por exemplo.
                        </p>
                        <p>A pena é de reclusão de um a cinco anos.</p>
                        <p>
                            A lei também incluiu no Código Penal o crime de divulgação ou venda de vídeos ou fotos de estupro ou que induzam 
                            a esse crime. A pena também é de reclusão de um a cinco anos. A pena pode ser aumentada de um terço a dois terços 
                            se o crime for praticado por alguém que esteja numa relação ou tenha mantido relação com a vítima ou "com o fim 
                            de vingança ou humilhação".
                        </p>
                        <p>
                            ▶️ COMO APLICAR: assim como na Lei Maria da Penha, os casos de importunação sexual podem ser denunciados por 
                            qualquer pessoa via "Disque Mulher" 180 ou para a polícia. Segundo especialistas, ao fazer a representação, as 
                            vítimas devem citar e pedir que o caso seja enquadrado pela Lei de Importunação Sexual.
                        </p>
                        <h2 className="text-[20px] font-black">Lei do Acompanhante</h2>
                        <p>
                            A Lei do Acompanhante foi proposta pela então senadora Ideli Salvatti (PT-SC) e sancionada em 2005, durante o 
                            primeiro governo de Luiz Inácio Lula da Silva (PT).
                        </p>
                        <p>
                            Ela garante às gestantes o direito a um acompanhante durante todo o trabalho de parto.
                        </p>
                        <p>
                            O texto assegura também a presença da pessoa escolhida pela própria gestante no parto e no pós-parto, período de 
                            dez dias após o nascimento do bebê.
                        </p>
                        <p>
                            Prevê que tanto a rede privada quanto a rede pública de saúde são obrigadas a permitir a presença de um 
                            acompanhante nos partos normal e cesariana. A instituição e a equipe de saúde não podem impedir a presença do 
                            companheiro indicado pela gestante.
                        </p>
                        <p>
                            Em 2013, a lei foi alterada para incluir que todos os hospitais devem manter, em local visível, informações sobre 
                            esse direito da mulher.
                        </p>
                        <p>
                            A mulher e a pessoa escolhida, que pode ser até mesmo um adolescente, devem ser acolhidas pelo hospital ou 
                            maternidade.
                        </p>
                        <p>
                            ▶️ COMO APLICAR: qualquer violação à lei pode ser denunciada à Defensoria Pública municipal ou para a Ouvidoria do Ministério da Saúde, por meio do telefone 136.
                        </p>
                        <h2 className="text-[20px] font-black">Lei Carolina Dieckmann</h2>
                        <p>
                            A lei de combate a crimes cibernéticos, mais conhecida como lei Carolina Dieckmann, foi sancionada em maio de 2012 
                            pela ex-presidente Dilma Rousseff.
                        </p>
                        <p>
                            A legislação foi elaborada depois que fotos em que a atriz Carolina Dieckmann aparecia nua foram divulgadas na 
                            internet sem autorização. Ao todo, foram compartilhadas 36 imagens.
                        </p>
                        <p>
                            Na ocasião, o advogado de Carolina afirmou que os criminosos chegaram a pedir R$ 10 mil para não divulgar as 
                            fotos da atriz.
                        </p>
                        <p>
                            A norma altera o Código Penal e torna crime a invasão de sistemas. A legislação é considerada um primeiro passo 
                            em direção à segurança no mundo digital.
                        </p>
                        <p>
                            Em 2021, a lei sofreu importantes alterações, entre elas, o aumento das penas dos crimes tipificados na norma. 
                            A pena para o crime de invasão de dispositivos, por exemplo, passou de, no máximo, dois anos de reclusão para 
                            até cinco anos.
                        </p>
                        <p>
                            ▶️ COMO APLICAR: ao sofrer um crime cibernético, a vítima deve buscar uma delegacia de polícia para registrar um 
                            Boletim de Ocorrência. Caberá ao setor de crimes digitais da Polícia Civil local dar seguimento ao caso.
                        </p>
                        <h2 className="text-[20px] font-black">Lei Joanna Maranhão</h2>
                        <p>
                            A lei nº 12.650 de 2012, mais conhecida como Lei Joanna Maranhão, estende o prazo de prescrição – perda do direito 
                            de ação por decurso do tempo – dos crimes sexuais cometidos contra crianças e adolescentes.
                        </p>
                        <p>
                            A legislação foi proposta na Comissão Parlamentar de Inquérito (CPI) da Pedofilia, que aconteceu em março de 2018. 
                            A norma ganhou o nome da nadadora Joanna Maranhão após ela denunciar abusos que sofreu de um treinador na infância.
                        </p>
                        <p>
                            Com a lei, a contagem do prazo prescricional começa na data em que a vítima fizer 18 anos, caso o Ministério 
                            Público não tenha antes aberto ação penal contra o agressor. Até então, o tempo para prescrição era calculado a 
                            partir da data da prática do crime.
                        </p>
                        <h2 className="text-[20px] font-black">Lei do Voto</h2>
                        <p>
                            A nível nacional, a conquista das mulheres do direito ao voto foi gradual. Se tornou facultativo nos anos de 1930 
                            por meio de um decreto do então presidente Getúlio Vargas e, posteriormente, incorporado na Constituição promulgada 
                            em 1934.
                        </p>
                        <p>
                            A equiparação ao voto dos homens só ocorreu, porém, em 1965 durante o primeiro governo da ditadura militar. A lei 
                            que criou o Código Eleitoral, sancionada pelo então presidente Castello Branco, estabeleceu que o "alistamento e o 
                            voto são obrigatórios para os brasileiros de um e outro sexo".
                        </p>
                        <h2 className="text-[20px] font-black">Desafios na política</h2>
                        <p>
                            Embora tenham igual direito ao voto, as mulheres ainda seguem com desafios em relação à representação política. O 
                            Poder Legislativo, conhecido como representante do povo brasileiro, tem baixas taxas de ocupação feminina em todo 
                            país.
                        </p>
                        <p>
                            Da primeira mulher eleita deputada estadual em 1934 até os dias de hoje, as mulheres nunca conseguiram equiparar o 
                            número de cadeiras na Câmara dos Deputados e nas assembleias legislativas dos estados conquistados ao dos homens.
                        </p>
                        <p>
                            Um estudo com 193 países, divulgado pela União InterParlamentar (IPU) em 2019, apontou que o Brasil ocupa a 132ª 
                            posição no ranking de representação feminina no parlamento.
                        </p>
                        <p>
                            Levantamento da Secretaria da Mulher da Câmara dos Deputados de 2022 concluiu que as "deputadas não se fazem 
                            representar em grande parte das estruturas de funcionamento das Casas Legislativas" em todo país.
                        </p>
                        <p>
                            Em 2022, ano recorde de deputadas federais eleitas, somente 91 candidatas venceram – 17,7% do total de vagas na 
                            Câmara.
                        </p>
                        <p>
                            Nos estados, apenas 18% dos deputados estaduais eleitos são mulheres. Os números são muito menores do que o total 
                            de mulheres aptas a votar. Segundo o Tribunal Superior Eleitoral (TSE), quase 53% dos 156,4 milhões de eleitores 
                            são mulheres.
                        </p>
                        <p>
                            Novas legislações incentivam a participação feminina nas eleições entraram em vigor nas últimas décadas para 
                            tentar corrigir a distorção.
                        </p>
                        <h2 className="text-[20px] font-black">Reserva de candidaturas por gênero</h2>
                        <p>
                            Uma minirreforma eleitoral, de 2009, introduziu na Lei das Eleições uma reserva de candidaturas ao Legislativo por gênero.
                        </p>
                        <p>
                            A regra obriga os partidos a lançar, no mínimo, 30% de candidaturas de um ou de outro gênero. Dessa forma, 
                            candidatos masculinos podem somar até 70% e vice-versa.
                        </p>
                        <p>
                            Em 2022, o Congresso promulgou uma emenda à Constituição que estabelece uma reserva de 30% do fundo eleitoral, 
                            distribuído em anos eleitorais para financiamento de campanhas, para candidaturas femininas.
                        </p>
                        <p>
                            Os partidos também devem reservar no mínimo 30% do tempo de propaganda gratuita no rádio e na televisão às mulheres.
                        </p>
                        <p>
                            Uma outra emenda à Constituição, de 2021, determina que os votos dados a candidatas mulheres ou a candidatos negros 
                            para a Câmara dos Deputados nas eleições de 2022, 2026 e 2030 sejam contabilizados em dobro para fins de distribuição 
                            de recursos públicos aos partidos políticos.
                        </p>
                        <p>
                            ▶️ COMO APLICAR: denúncias sobre o descumprimento dessas regras podem ser feitas ao Ministério Público Eleitoral 
                            dos estados.
                        </p>
                        <h2 className="text-[20px] font-black">Lei da violência política contra mulheres</h2>
                        <p>
                            Em 2021, o ex-presidente Jair Bolsonaro (PL) sancionou uma lei que atualiza o Código Eleitoral brasileiro para tipificar 
                            como crime eleitoral a violência política contra as mulheres.
                        </p>
                        <p>
                            Apresentado pela deputada Rosângela Gomes (Republicanos-RJ), o texto considera violência política toda conduta ou 
                            omissão com a finalidade de impedir, obstaculizar ou restringir os direitos políticos femininos.
                        </p>
                        <p>
                            Com as mudanças, passou a ser crime "assediar, constranger, humilhar, perseguir ou ameaçar, por qualquer meio, 
                            candidata a cargo eletivo ou detentora de mandato eletivo, utilizando-se de menosprezo ou discriminação à condição 
                            de mulher ou à sua cor, raça ou etnia, com a finalidade de impedir ou de dificultar a sua campanha eleitoral ou o 
                            desempenho de seu mandato eletivo".
                        </p>
                        <p>
                            A pena será de reclusão de 1 a 4 anos, e multa. Se cometido contra gestantes, mulheres com deficiência ou idosas, 
                            a pena aumentará em um terço.
                        </p>
                        <p>
                            A lei também eleva a pena para os crimes de calúnia, difamação e injúria durante a propaganda eleitoral. O aumento 
                            será de um terço até a metade quando forem cometidos contra mulheres.
                        </p>
                        <p>
                            Em outro dispositivo, a norma determina que os partidos políticos incluam em suas regras mecanismos de combate à 
                            violência política contra a mulher.
                        </p>
                        <p>
                            ▶️ COMO APLICAR: denúncias sobre o descumprimento dessas regras podem ser feitas ao Ministério Público Eleitoral.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                 
                    </div>
                </div>
        </>
    );
}