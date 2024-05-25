"use client"

export default function noticia() {
    return (
        <>

                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 " >
                    <div className="grow col-start-2 col-span-4 ">
                     <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                        
                     </h1>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        
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
                    
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>



    
           {/*<h1>Jojo Todynho explica término do namoro e garante: 'Não me traiu'</h1>
           <p>
                Cantora abriu live neste domingo para 'hablar mesmo' e falou, entre outros assuntos, sobre o fim do relacionamento 
                com Renato Santiago
            </p>
            <p>
                Jojo Todynho abriu uma live, no início da tarde deste domingo (25), para "hablar mesmo". Deitada em sua cama, a 
                cantora, entre outras coisas, explicou o término do relacionamento com Renato Santiago, anunciado por ela na última 
                sexta-feira (23). Jojo afirmou que não houve traição e que os dois mantêm a amizade de mais de 10 anos. Veja vídeo 
                acima!
            </p>
            <p>
                "Renato não me traiu. Continuamos superamigos. Ele é um cara superdiscreto, não é de internet, negócio dele é ser 
                trabalhador, não pedi ninguém pra demitir ninguém", garante ela.
            </p>
            <img src="/assets/imagens_entretedimento/Jojo_Todynho.png" alt="imagem de Jojo Todynho" />
            <p>
                Jojo disse ainda que colocou um fim no relacionamento que durava quase um ano, porque está em um momento em que 
                precisa focar em sua própria vida.
            </p>
            <p>
                "Estou separada do Renato vai fazer um mês. Eu me separei, porque eu entendi que estou numa fase que preciso me 
                dedicar a mim, somente a mim, e todo mundo sabe que relacionamento é dedicação de ambas as partes", afirma ela.
            </p>
            <p>
                A cantora ainda falou sobre como conheceu o ex-namorado e que é muito grata ao que ele fez por ela no passado.
            </p>
            <p>
                "Tenho uma história longa com o Renato, de mais de 10 anos, desde a época em que eu estudava em Marechal, conheci 
                Renato namorando um amigo dele, e eu e Renato somos muito parceiros, independentemente dos erros dele", disse ela, 
                para continuar:
            </p>
            <p>
                "O problema das pessoas é que eu dei um carro pro Renato. Ele comprou batata pra mim, me deu carona, quando eu era 
                Jordana Gleise, não tinha nada. Independentemente de eu ter um relacionamento com ele ou não, eu sou grata às pessoas 
                que passaram pela minha vida."
            </p>
            <p>
                Jojo Todynho afirmou ainda que se sente alvo de racismo e comentou sobre o processo de adoção de um menino que 
                conheceu durante uma visita a uma escola em Luanda, capital da Angola.
            </p>
            <p>
                "Me sinto grávida, porque está vindo uma criança para a minha vida. E eu tenho que amadurecer em vários aspectos 
                para poder dar uma direção, porque eu tenho a responsabilidade dele nas minhas mãos, e eu vou ensiná-lo a ser um 
                homem que respeita mulheres, um homem que não abaixa a cabeça para o sistema."
            </p>
            <p>
            Cantora, apresentadora e empresária, Jojo Todynho tem 27 anos.
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