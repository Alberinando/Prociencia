"use client"

export default function noticia() {
    return (
        <>
                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28" >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            A revolução dos pacientes que pode melhorar a medicina
                        </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                        <p className="sm:text-[24px] text-[18px] ">
                            Livro 'Rebel health' ('Saúde rebelde') mostra que avanços no tratamento de doenças raras ou crônicas partiram da 
                            mobilização das próprias pessoas ou de seus cuidadores.
                        </p>
                    </div>
                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                        <p className="sm:text-[24px] text-[18px] ">
                            Com a experiência de quem esteve à frente da área de tecnologia do Departamento de Saúde e Serviços Humanos dos EUA, 
                            responsável por zelar pelo bem-estar dos norte-americanos, Susannah Fox decidiu auxiliar as pessoas a transitar no 
                            árido território que permite um melhor acesso à saúde. Ela acaba de lançar “Rebel health” (em tradução livre, “Saúde 
                            rebelde”), livro que mapeia o esforço de pacientes, familiares e cuidadores que, através de comunidades de apoio, 
                            muitas vezes conseguem produzir avanços no tratamento de enfermidades que não ganham a mesma atenção que as mais 
                            conhecidas e pesquisadas, como os diversos tipos de câncer.
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                    <img src="/assets/imagens_ciencia/Susannah_Fox.png" alt="imagem de Susannah Fox"/>
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
                            De diabetes a síndromes pouco conhecidas, a autora chama a atenção para a dedicação e persistência desses grupos 
                            que, em suas palavras, são capazes de criar a “revolução dos pacientes”. O trabalho incansável das pessoas em fóruns 
                            on-line se tornou seu objeto de estudo. Há cerca de sete mil doenças raras já mapeadas e 300 milhões de portadores 
                            dessas enfermidades no mundo, sendo que 13 milhões no Brasil.
                        </p>
                        <p>
                            “Eu me dei conta da dimensão do problema quando, há cerca de 20 anos, comecei a conversar com pacientes que não 
                            tinham um diagnóstico, ou viviam com alguma doença rara, que não tinham a oportunidade de conhecer outros com a 
                            mesma condição, nem a possibilidade de discutir alternativas de tratamento. Daí a importância da internet para 
                            conectar, trocar informações e dar apoio a essas pessoas. A necessidade dos testes genéticos começou nas comunidades 
                            on-line uns dez anos antes do sistema de saúde entrar no assunto”, afirmou em entrevista.
                        </p>
                        <p>
                            No livro, a história da Diabetes Rebel Alliance (Aliança Rebelde do Diabetes) é uma das preferidas de Susannah: 
                            “eles pesquisam, compartilham, propõem soluções, trabalham juntos em prol de mudanças e têm acesso ao círculo dos 
                            gestores de políticas públicas”. Ela também resgata o engajamento dos Panteras Negras para dar mais visibilidade à 
                            anemia falciforme, que atinge numa proporção muito maior a população negra, com bons resultados: a oferta de testes 
                            para serem feitos em casa e investimentos para o estudo da doença. “Eu acredito que a tecnologia produz coisas boas 
                            para os indivíduos. Tendo trabalhado no governo (de Barack Obama), pude ver de perto o gigantismo do sistema de 
                            saúde, as mudanças têm que acontecer lenta e cuidadosamente, para não haver uma ruptura”, finalizou.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}