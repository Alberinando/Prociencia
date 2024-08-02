"use client"

export default function noticia() {
    return (
        <>
                <div className="grow grid font-Arial text-[20px] sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28" >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            Gravidez de arraia sem contato com macho surpreende em aquário dos EUA; entenda
                        </h1>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_ciencia/Arraia.png" alt="imagem de Arraia"/>
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
                    
                    <div className="col-start-2 col-span-4 space-y-8 text-[18px]">
                        <p>
                            Charlotte, como é conhecida, apareceu grávida mesmo sem ter contato com macho da mesma espécie há oito anos. Caso 
                            chamou atenção e transformou peixe em estrela
                        </p>
                        <p>
                            Uma arraia que está grávida no Aquarium & Shark Lab Team ECCO na Carolina do Norte, nos Estados Unidos, está gerando 
                            discussões na comunidade científica com relação à paternidade dos quatro filhotes. Isso porque a nova mãe não tem 
                            contato com machos da mesma espécie há oito anos. Charlotte, como é chamada pelos funcionários do aquário, divide o 
                            tanque com tubarões, o que iniciou as especulações sobre híbridos das duas espécies.
                        </p>
                        <p>
                            Maristela Peres Rangel, bióloga professora e mentora do Colégio Mackenzie - Tamboré, explica que o cruzamento e 
                            fecundação entre animais distintos é possível, mas a tendência é que este não seja o caso dos animais do aquário 
                            americano. “Só conseguimos filhotes híbridos com espécies muito próximas como leões e tigres, mas o que sai dessa 
                            reprodução é infértil, a espécie não se perpetua. Não é o que aconteceu entre a arraia e o tubarão”.
                        </p>
                        <p>
                            No caso de Charlotte, nos Estados Unidos, Maristela acredita se tratar de um caso de reprodução por partenogênese. 
                            “É um processo de reprodução assexuada em que algumas fêmeas, em função do ambiente em que estão, acabam gerando 
                            descendentes sozinhas”, explica.
                        </p>
                        <p>
                            Ronaldo Christofoletti, professor do Instituto Mar da Universidade Federal de São Paulo (Unifesp), acrescenta que 
                            em casos de partenogênese “apenas o óvulo da fêmea é capaz de, nas suas divisões, acabar gerando um novo indivíduo. 
                            É raro para espécies que se reproduzem com machos e fêmeas, mas nessa raridade é possível acontecer”, afirma.
                        </p>
                        <p>
                            Os animais tendem a preterir este tipo de reprodução pela baixa chance de manutenção da vida dos filhotes. “Os 
                            animais que vão ser gerados à partir da partenogênese não tem variabilidade genética, se tiver é uma variação 
                            mínima, a falta dessa variabilidade é um problema de sobrevivência com a passagem dos anos”, segundo Maristela.
                        </p>
                        <p>
                            O anúncio da gravidez foi feito no início do mês nas redes sociais do aquário que realizou transmissões ao vivo 
                            para compartilhar o ultrassom do animal. Os biólogos responsáveis atualizam as redes com informações de Charlotte 
                            que ainda não deu à luz aos filhotes, evento que é aguardado para realização de testes genéticos.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}