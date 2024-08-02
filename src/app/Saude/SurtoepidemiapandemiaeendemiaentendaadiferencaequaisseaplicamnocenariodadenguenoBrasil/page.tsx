"use client"

export default function noticia() {
    return (
        <>
                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28 font-Arial" >
                    <div className="grow col-start-2 col-span-4 mb-[20px]">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                        Surto, epidemia, pandemia e endemia: entenda a diferença e quais se aplicam no cenário da dengue no Brasil
                        </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 mb-[20px]">
                        <p className=" text-[18px] ">Mundo viveu a pandemia de Covid-19. No Brasil, alguns locais estão declarando epidemia por causa da dengue.</p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_saude/larva_mosquito.png" alt="imagem de larva do mosquito" />
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
                            Durante a Covid-19, a palavra pandemia ficou bastante conhecida. Agora, com a dengue em alta, é normal se deparar com 
                            termos como epidemia, endemia e surto. E você sabe qual a diferença entre eles?
                        </p>
                        <h2 className="text-[20px] font-black">Surto</h2>
                        <p>
                            O surto é algo localizado. Pode ser um surto de gripe na empresa, surto de catapora em uma creche, por exemplo.
                        </p>
                        <h2 className="text-[20px] font-black">Epidemia</h2>
                        <p>
                            Uma epidemia ocorre quando temos um aumento inesperado no número de casos de uma doença em uma área geográfica 
                            específica. Febre amarela, varíola e dengue são excelentes exemplos de epidemias.
                        </p>
                        <p>
                            "A epidemia ocorre quando tem um aumento de casos acima da média, algo mais populacional. Existem pessoas que 
                            chamam surto de epidemia, mas não é. Por exemplo, não existe epidemia em escolas, existe surto", alerta Renato 
                            Kfouri, infectologista e vice-presidente da Sociedade Brasileira de Imunizações (SBIm).
                        </p>
                        <p>
                            No Brasil, alguns locais estão declarando epidemia por causa da dengue. Segundo o Centro de Operações de 
                            Emergências do governo federal, seis estados (AC, GO, MG, ES, RJ e SC) e o DF declararam emergência em saúde 
                            pública.
                        </p>
                        <p>
                            As epidemias podem referir-se a uma doença ou a outro comportamento específico relacionado com a saúde 
                            (por exemplo, tabagismo) com taxas claramente acima da ocorrência esperada numa comunidade ou região.
                        </p>
                        <h2 className="text-[20px] font-black">Pandemia</h2>
                        <p>
                            A pandemia é uma epidemia que se espalhou por todas as regiões do planeta, afetando muitas pessoas. O exemplo 
                            mais recente é a pandemia de Covid-19.
                        </p>
                        <h2 className="text-[20px] font-black">Endemia</h2>
                        <p>
                            A endemia não está relacionada a uma questão quantitativa. É a presença contínua de uma enfermidade ou de um 
                            agente infeccioso em uma zona geográfica determinada.
                        </p>
                        <p>
                            "A doença endêmica é a que circula com número de casos esperados. A meningite é uma doença endêmica no Brasil, 
                            todo ano tem X casos da doença, assim como a tuberculose. A meningite, mesmo endêmica, pode ter surtos em 
                            escolas e berçários", pontua Kfouri.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}