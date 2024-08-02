"use client"

export default function noticia() {
    return (
        <>
                <div className="grow grid space-y-8 sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28" >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            Ivete Sangalo anuncia mega turnê que celebra seus 30 anos de carreira
                        </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                        <p className=" text-[18px] ">
                            ‘A Festa’ irá percorrer 30 cidades e começará em junho, em Manaus
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4 mb-[20px]">
                        <img src="/assets/imagens_entretedimento/Ivete_Sangalo.png" alt="imagem de Ivete Sangalo" />
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
                                Ivete Sangalo acaba de anunciar como será sua mega turnê que irá celebrar seus 30 anos de carreira. A Festa irá 
                                percorrer 30 cidades do Brasil.
                        </p>
                        <p>
                                O primeiro show começará no dia 1 de junho, em Manaus, e depois segue viagem, contabilizando um total de 30 shows.
                        </p>
                        <h2 className="text-[20px] font-black">Saiba tudo sobre Ivete 3.0</h2>
                        <p>
                                No playlist de Veveta, vão estar presentes seus sucessos mais antigos como “Abalou”, “Se Eu Não Te Amasse Tanto 
                                Assim”, “Arerê e os mais recentes como “Cria da Ivete”, “Rua da Saudade”, “Gigante” e, claro, seu hit “Macetando”.
                        </p>
                        <h2 className="text-[20px] font-black">Veja o cronograma dos shows para você se programar:</h2>
                        <p>
                                01 de Junho - Manaus
                                29 de Junho - Belém
                                06 de Julho - Palmas
                                13 de Julho - Brasília
                                20 de Julho - Goiânia
                                27 de Julho - Barreiras
                                03 de Agosto - Aracaju
                                10 de Agosto - Maceió
                                17 de Agosto - João Pessoa
                                24 de Agosto - Recife
                                31 de Agosto - Natal
                                07 de Setembro - São Luís
                                14 de Setembro - Teresina
                                21 de Setembro - Juazeiro do Norte
                                28 de Setembro - Vitória
                                12 de Outubro - Salvador
                                19 de Outubro - Juiz de Fora
                                26 de Outubro - Presidente Prudente
                                02 de Novembro - São José do Rio Preto
                                09 de Novembro - Londrina
                                16 de Novembro - Porto Alegre
                                23 de Novembro - Curitiba
                                30 de Novembro - Jundiaí
                                07 de Dezembro - Ribeirão Preto
                                14 de Dezembro - Belo Horizonte
                                21 de Dezembro - São Paulo
                                01 de Fevereiro de 2025 - local ainda será anunciado
                                29 de Março de 2025 - local ainda será anunciado
                                05 de Abril de 2025 - local ainda será anunciado
                                12 de Abril de 2025 - local ainda será anunciado
                        </p>
                        <h2 className="text-[20px] font-black">No Maracanã</h2>
                        <p>
                                No dia 20 de dezembro a cantora deu início as comemorações de seus 30 anos com um show inesquecível no estádio do Maracanã, no Rio.
                        </p>
                        <p>Relembre aqui alguns momentos da sua apresentação no Maracanã:</p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}