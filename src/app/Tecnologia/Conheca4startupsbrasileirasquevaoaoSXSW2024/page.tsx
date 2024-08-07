"use client"

export default function noticia() {
    return (
        <>
            <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28 font-Arial" >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] mb-[50px]">
                            Conheça 4 startups brasileiras que vão ao SXSW 2024
                        </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 mb-[30px]">
                        <p className=" text-[18px] ">O evento que reúne tecnologia, música, inovações e cultura acontece de 08 a 16 de março de 2024</p>
                    </div>
                    
                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_tecnologia/image.png" className="w-[802px] h-[400px]" alt="imagem com uma ceta" />
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
                                className=" p-2 border border-gray rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite aqui..."
                            />
                       </div>
                        <div className="flex justify-center ">
                            <button className="bg-gray mt-4 w-48 h-10 col-start-2 col-span-1 font-pixels">
                                Enviar
                            </button>
                        </div>

                    </div>
                    
                    <div className=" col-start-2 col-span-4 space-y-4 text-[18px] mt-[50px]">
                        <p>O South by Southwest, mais conhecido como SXSW, acontece anualmente em março, em Austin, nos Estados Unidos e é 
                            considerado um dos maiores eventos de tecnologia, música, inovações e cultura do mundo, trazendo ainda, atrações 
                            de diferentes países.
                        </p>
                        <p>
                            Em 2024, o SXSW acontece de 8 a 16 de março. O evento foi fundado em 1987 com uma série de longas discussões 
                            sobre o futuro do entretenimento e da mídia. Desde então, foi responsável por trazer palestras, filmes e shows 
                            icônicos, marcados na memória do evento.
                        </p>
                        <p>
                            Neste ano, após duas fases eliminatórias, quatro startups brasileiras foram selecionadas para participarem do 
                            evento. Com todos os custos pagos, o Instituto Caldeira em parceria com a Dell Technologies e a Intel foram 
                            responsáveis por anunciar as vencedoras.
                        </p>
                        <p>
                            School Guardian, Yours Bank, Dadosfera e Pix Force foram as startups campeãs dessa competição inédita. Além do 
                            acesso ao evento, os empreendedores terão a oportunidade de se conectar com parceiros das instituições que 
                            estarão presentes no evento e na Casa Dell, sediada em Austin.
                        </p>
                        <div>
                            <h2 className="text-[24px] mt-[80px] mb-[20px] font-black">Conheça as startups que irão ao SXSW 2024:</h2>
                        </div>
                       
                        <h3 className="text-[20px] font-black">School Guardian</h3>
                        <p>
                            A tecnologia da School Guardian aumenta a segurança de estudantes, pais e equipes escolares, ao oferecer pacotes 
                            completos de funcionalidades que vão desde rastreamento de transporte escolar, gestão de autorizações de saída, 
                            registros de entrada e saída de estudantes e visitantes, até detecção de armas e botões digitais de emergência.
                        </p>
                        <p>
                            A plataforma permite ainda que as escolas e famílias reduzam em até 75% o tempo gasto com a rotina diária de 
                            buscar os filhos na escola. Atualmente, a School Guardian atende mais de 400 instituições de ensino em países 
                            como Brasil, Estados Unidos, Portugal, Peru, Bahamas, Uruguai, Paraguai, Egito e Malásia. Mais de 300 mil 
                            alunos, pais ou responsáveis utilizam o aplicativo.
                        </p>
                        <h3 className="text-[20px] font-black">Yours Bank</h3>
                        <p>
                            A Yours é a primeira empresa a desenvolver soluções bancárias digitais para crianças e adolescentes no Brasil. 
                            Criada em 2021, a fintech foi premiada no Startup Challenge do primeiro South Summit Brazil, no ano seguinte. 
                            De lá para cá recebeu aporte de R$ 5 milhões do Banco do Brasil e ultrapassou os 100 mil usuários ativos 
                            oferecendo inteligência financeira e soluções digitais para nativos digitais.
                        </p>
                        <p>
                            Em 2024, a startup vai mergulhar ainda mais na missão de transformar o país através da educação, levando conteúdo 
                            de qualidade para pais e filhos que se preocupam com o futuro financeiro da família.
                        </p>
                        <h3 className="text-[20px] font-black">Dadosfera</h3>
                        <p>
                            A Dadosfera é uma Plataforma de Data, AI e Analytics focada no negócio. Através da Inteligência de Dados, a 
                            plataforma integra etapas de Coleta, Processamento, Exploração e Análise, toda a jornada apoiada em uma gestão 
                            de acesso que promove a governança dos dados da sua organização e entrega aplicativos para o negócio, tudo 
                            isso sem depender de um time de dados especializado.
                        </p>
                        <h3 className="text-[20px] font-black">Pix Force</h3>
                        <p>
                            A Pix Force desenvolve inteligência artificial capaz de interpretar imagens e vídeos para a tomada de decisão nas 
                            indústrias. Com sedes no Brasil, Estados Unidos e Finlândia e com um portfólio de clientes que conta com gigantes 
                            como Shell e Petrobras, foi eleita por 5 anos consecutivos a startup líder em Inteligência Artificial no Brasil 
                            pelo ranking 100 Open Startups.
                        </p>
                        <p>
                            A empresa tem como destaque produtos pautados nos princípios ESG. O Pix Grid é uma plataforma de IA destinada a 
                            garantir o crescimento da eletrificação do planeta. Com ela, diversas imagens são usadas para identificar desde 
                            risco de queimadas sob linhas de transmissão até anomalias térmicas e falhas em subestações que podem causar 
                            apagões.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
            </div>
        </>
    );
}
