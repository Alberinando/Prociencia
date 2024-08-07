"use client"

export default function noticia() {
    return (
        <>
                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28 font-Arial" >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            Governo anuncia ações permanentes em reserva Yanomami em Roraima
                        </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                         <p className="text-[18px] ">
                            Medidas englobam mudanças na atuação dos militares na região e coordenação política interministerial
                         </p>
                    </div>

                    <div className="grow col-start-2 col-span-4 mt-[20px] mb-[20px]">
                        <img src="/assets/imagens_politica/mulher_com_criança.png" alt="imagem de mulher com criança" />
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
                            O governo federal anunciou que as ações da União na Reserva Indígena Yanomami passarão de emergenciais para 
                            permanentes.

                            Entre as medidas está a criação de uma “casa de governo“, órgão que representará o executivo federal no estado de 
                            Roraima e vai congregar representantes de diversos ministérios, além de uma nova organização de logística de 
                            atendimento e segurança pública.
                        </p>
                        <p>
                            O custo das medidas para 2024 é estimado em R$1,2 bilhão de reais e deverá ser feito por meio de crédito extraordinário.
                        </p>
                        <p>
                            Segundo o Ministro da Casa Civil, Rui Costa, a “casa de governo” não é uma intervenção, mas um conceito que está 
                            em construção e também terá diálogo com municípios e o governo estadual.
                        </p>
                        <p>
                            A intenção é estudar também alternativas econômicas para a população que vive direta ou indiretamente do garimpo.
                        </p>
                        <p>
                            “Não se trata de uma intervenção, se trata de uma casa de governo que vai cotidianamente e não, esporadicamente, 
                            tratar a questão”, explicou Costa.
                        </p>
                        <p>
                            Ainda de acordo com o governo, as Forças Armadas deixarão de dar suporte logístico para envio de ajuda humanitária 
                            e saúde e devem se concentrar, em conjunto com a Polícia Federal, em ações de segurança pública.
                        </p>
                        <p>
                            Para isso, o Ministério de Gestão e Inovação de Serviços Públicos deve apresentar, até março, uma proposta de um 
                            contrato a longo prazo para retirar essas atribuições dos militares.
                        </p>
                        <p>
                            “Em 30 dias, vamos, com o Ministério da Defesa e a Polícia Federal, reestruturar a ocupação das Forças Armadas e 
                            da PF na região. Não de forma provisória, mas com presença definitiva… Será uma nova ocupação do território na 
                            fronteira do Brasil que será feita”, afirmou o ministro.
                        </p>
                        <p>
                            As ações foram divulgadas nesta terça-feira (09), depois de uma reunião de diversos ministérios e órgãos ambientais 
                            com o presidente Luiz Inácio Lula da Silva.
                        </p>
                        <p>
                            Há cerca de um ano, o governo decretou emergência em saúde pública para conter a crise de falta de assistência aos 
                            indígenas. Na época, Lula visitou um ponto da reserva.
                        </p>
                        <p>
                            O ministro Rui Costa admitiu que apesar dos números do governo apontarem para uma diminuição das invasões de 
                            garimpo e do crime organizado, o problema persiste na região.
                        </p>
                        <p>
                            O governo afirmou que no último ano, as ações emergenciais somam a apreensão e destruição do equivalente a R$ 
                            600 milhões em patrimônios utilizados em crimes, como embarcações e maquinário.
                        </p>
                        </div>

                        <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                            <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                        </div>
                    </div>
        </>
    );
}