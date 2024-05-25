"use client"

export default function noticia() {
    return (
        <>

                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 " >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            Sabrina Sato e Hello Kitty lançam coleção de beleza; saiba tudo
                        </h1>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_modaebeleza/sabrina_sato.png" alt="imagem de Sabrina Sato" />
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
                            Sabrina Sato se uniu com a personagem “Hello Kitty” para o lançamento de uma linha de produtos de beleza, realizada 
                            junto com a “Cia Beauty”.
                        </p>
                        <p>
                            Vale dizer que a colaboração tem a proposta de combinar os itens da personagem com características da famosa. Por 
                            isso, na linha, a boneca aparece cum uma pintinha na testa.
                        </p>
                        <p>
                            Nas redes sociais, a apresentadora dividiu a novidade com os fãs. “Sempre fui apaixonada pela Hello Kitty, mas 
                            nunca imaginei que um dia seríamos uma só”, começou.
                        </p>
                        <p>
                            “A Hello Kitty ganhou a minha pintinha numa co-branding inédita, que nasce com a linha de lip glitters e lip balms 
                            mais fofa e cheirosa que você já viu (e sentiu!)”, garantiu.
                        </p>
                        <p>Confira:</p>
                        <p>
                            Na sequência, Sabrina aproveitou para dar mais detalhes dos produtos. “Os lip balms tem formato de macarons e o 
                            cheirinho de cada versão: melancia, baunilha, tutti-frutti e uva”, contou.
                        </p>
                        <p>
                            “Os lip glitters de Hortelã, Suspiro, Chiclete e Algodão Doce dão brilho na medida, cada um com uma cor diferente”, 
                            continuou.
                        </p>
                        <p>
                            Vale dizer ainda que todos os produtos são veganos, não testados em animais e as vendas ocorrem somente nas redes 
                            “Drogasil” e “Droga Raia”.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>



           { /*<h1>Sabrina Sato e Hello Kitty lançam coleção de beleza; saiba tudo</h1>
            <img src="/assets/imagens_modaebeleza/sabrina_sato.png" alt="imagem de Sabrina Sato" />
            <p>
                Sabrina Sato se uniu com a personagem “Hello Kitty” para o lançamento de uma linha de produtos de beleza, realizada 
                junto com a “Cia Beauty”.
            </p>
            <p>
                Vale dizer que a colaboração tem a proposta de combinar os itens da personagem com características da famosa. Por 
                isso, na linha, a boneca aparece cum uma pintinha na testa.
            </p>
            <p>
                Nas redes sociais, a apresentadora dividiu a novidade com os fãs. “Sempre fui apaixonada pela Hello Kitty, mas 
                nunca imaginei que um dia seríamos uma só”, começou.
            </p>
            <p>
                “A Hello Kitty ganhou a minha pintinha numa co-branding inédita, que nasce com a linha de lip glitters e lip balms 
                mais fofa e cheirosa que você já viu (e sentiu!)”, garantiu.
            </p>
            <p>Confira:</p>
            <p>
                Na sequência, Sabrina aproveitou para dar mais detalhes dos produtos. “Os lip balms tem formato de macarons e o 
                cheirinho de cada versão: melancia, baunilha, tutti-frutti e uva”, contou.
            </p>
            <p>
                “Os lip glitters de Hortelã, Suspiro, Chiclete e Algodão Doce dão brilho na medida, cada um com uma cor diferente”, 
                continuou.
            </p>
            <p>
                Vale dizer ainda que todos os produtos são veganos, não testados em animais e as vendas ocorrem somente nas redes 
                “Drogasil” e “Droga Raia”.
            </p>
            <div className="grid justify-items-center w-6/8 space-y-[100px]">
                <div className="w-2/8 ml-[50px]">
                        
                    <div className="w-[419px] h-[538px] mt-[400px] space-y-6">
                        <h1 className="w-[419px] h-[108px]  bg-darkgray text-[36px] text-center">NEWSLETTER HORÓSCOPO</h1>
                        <p className="w-[419px] h-[108px] text-[26px]  text-black">Toda segunda, receba no seu e-mail as previsões semanais para o seu signo.</p>
                        <p>Cadastre o seu melhor e-mail:</p>
                        <input
                        type="text"
                        className="w-[356px] h-[30px] w-full p-2 border border-gray rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Digite aqui..."
                        />
                        <button className="bg-gray mt-4 ml-[100px] w-48 h-10 font-pixels">
                            Enviar
                        </button>
                    </div>
                    <div className="h-[400px] w-[403px]">
                        <div className="w-[419px] h-[1666px]  bg-darkgray">
                            <p className=" text-[64px]">Área para Para divulgação</p>
                        </div>
                    </div>
                </div>
</div>*/}
        </>
    );
}