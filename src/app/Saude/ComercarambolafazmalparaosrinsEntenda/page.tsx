"use client"

export default function noticia() {
    return (
        <>
            <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 " >
                <div className="grow col-start-2 col-span-4 ">
                    <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                        Comer carambola faz mal para os rins? Entenda
                    </h1>
                </div>

                <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                    <p className="sm:text-[24px] text-[18px] ">Comer carambola faz mal para os rins? Saiba por que ela pode ser prejudicial a pacientes renais e conheça os 
            benefícios da fruta que melhora o sistema imune</p>
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
                        Certamente você já ouviu dizer que a carambola faz mal aos rins. Em parte, a afirmativa é verdadeira, já que 
                        quem tem problemas renais deve evitar o consumo da fruta.
                    </p>
                    <p>
                        A médica Márcia Lisboa, especialista em nutrologia clínica e hemoterapia, explica que a carambola possui duas 
                        substâncias que podem ser perigosas para o paciente renal: a caramboxina, uma neurotoxina que, se não for 
                        filtrada pelos rins, vai para o sangue e atinge o sistema nervoso central, provocando agitação em algumas 
                        pessoas, e o oxalato de cálcio, que provoca a litíase renal - popularmente chamada de pedra nos rins.
                    </p>
                    <p>Em conversa com o Receitas, ela comenta:</p>
                    <p>
                        "É importante notar que a carambola contém uma substância chamada ácido oxálico, que pode ser prejudicial para 
                        pessoas com problemas renais, já que pode levar à formação de cristais nos rins. Além disso, pessoas que tomam 
                        certos medicamentos, como inibidores da enzima CYP3A4, também devem evitar o consumo de carambola, pois ela 
                        pode interagir com esses medicamentos e causar efeitos adversos."
                    </p>
                    <p>
                        Lembre-se sempre de consultar um médico e um nutricionista para adequar sua alimentação!
                    </p>
                </div>

                <div className="grow col-start-2 col-span-4">
                    <img src="/assets/imagens_saude/carambola.png" alt="imagem de carambola" />
                </div>

                <div className="col-start-2 col-span-4 space-y-4 text-[18px]">
                    <h2>Os benefícios da carambola para a saúde</h2>
                    <p>
                        Mas isso não faz da fruta uma vilã para a saúde. A carambola é um alimento extremamente benéfico e rico em 
                        vitamina C, potássio e fibras. Em conjunto, esses elementos fazem com que o nossos sistemas cardíaco, imune 
                        e digestório funcionem ainda melhor.
                    </p>
                    <h2>Quantas carambolas podemos comer por dia?</h2>
                    <p>
                        Em média, uma carambola tem 31 calorias por porção: sem exagero, ela é uma ótima opção para incluir na 
                        alimentação do dia a dia.
                    </p>
                    <p>
                        "A quantidade de carambolas que se pode consumir por dia pode variar dependendo de diversos fatores, incluindo a 
                        saúde geral da pessoa e qualquer condição médica específica que ela possa ter. No entanto, para a maioria das 
                        pessoas saudáveis, consumir uma ou duas carambolas por dia geralmente não representa nenhum problema", aponta a 
                        médica Márcia Lisboa.
                    </p>
                    <p>
                        Além de comer a fruta in natura, você pode fazer em casa a compota de carambola, um carpaccio de carambola ou 
                        uma salada de folhas com carambola. Ficam uma delícia!
                    </p>
                </div>

                <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                    <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                </div>
            </div>
        </>
    );
}
