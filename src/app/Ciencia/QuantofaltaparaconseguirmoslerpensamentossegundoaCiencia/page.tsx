"use client"

export default function noticia() {
    return (
        <>
                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 " >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            Quanto falta para conseguirmos ler pensamentos, segundo a Ciência
                        </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                        <p className="sm:text-[24px] text-[18px] ">
                            Os testes mais recentes com um novo dispositivo implantado no cérebro buscam medir sinais nervosos relacionados ao 
                            movimento de uma pessoa com mobilidade reduzida. Mas ainda estamos longe de conseguir ler pensamentos.
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_ciencia/cerebro.png" alt="imagem de cerebro"/>
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
                            Em 29 de janeiro, Elon Musk postou em sua rede social X, antigo Twitter, sobre o sucesso da primeira intervenção 
                            cirúrgica para implante de um dispositivo desenvolvido por sua start-up Neuralink em um humano. O nome do 
                            dispositivo: Telepathy (Telepatia).
                        </p>
                        <p>
                            Na comunidade científica, estávamos atentos aos trabalhos da equipe de Elon Musk desde que, em setembro de 2023, a 
                            Food and Drug Administration (FDA) dos Estados Unidos confirmou que o dispositivo poderia ser implantado em humanos.
                        </p>
                        <p>
                            Após a aprovação da FDA, a Neuralink implantou o Telephaty em uma pessoa escolhida entre um grupo de voluntários 
                            com tetraplegia e esclerose lateral amiotrófica.
                        </p>
                        <p>
                            De início, podemos dizer que o implante foi um sucesso. Mas para conhecer os resultados será necessário acompanhar 
                            de perto um estudo que promete ser longo.
                        </p>
                        <h2>O indiscutível avanço tecnológico do Telepathy</h2>
                        <p>O que a equipe de Elon Musk conseguiu é muito revolucionário do ponto de vista tecnológico.</p>
                        <p>
                            O Telepathy carrega uma bateria que é recarregada externamente e dispõe de 1.024 eletrodos, distribuídos em 64 fios, 
                            que transmitem, de forma wireless, as medidas da atividade cerebral. O fato de ter sido aprovado pela FDA endossa o 
                            rigor com que foi produzido
                        </p>
                        <p>
                            Espera-se que o Telepathy consiga medir os sinais cerebrais relacionados ao movimento em pessoas com mobilidade 
                            reduzida, e que os sinais sirvam para comandar o movimento de uma prótese ou interagir com um computador.
                        </p>
                        <p>Mas um sinal muscular não equivale, de forma alguma, a um pensamento.</p>
                        <p>
                            É o que se conhece como interface cérebro-máquina, mas isso não é telepatia. Verdadeiramente revolucionário seria 
                            se o dispositivo Neuralink reconhecesse a atividade neuronal que o pensamento gera. E isso provavelmente nunca 
                            será alcançado.
                        </p>
                        <h2>Zona obscura</h2>
                        <p>Qual é o desafio que enfrentamos quando tentamos medir sinais do cérebro?</p>
                        <p>
                            O desafio é a escuridão em que o observador se encontra depois que um neurônio é ativado. Isso não acontece com 
                            outros tipos de células, como por exemplo uma célula muscular do coração (miócito).
                        </p>
                        <p>
                            Para medir a atividade elétrica de um neurônio e de um miócito utiliza-se a mesma tecnologia.
                        </p>
                        <p>
                            Mas quando um miócito "dispara", o observador pode relacionar diretamente o sinal elétrico com a contração da 
                            célula muscular. E, assim, entende o efeito da contração, pois observa que a contração de todos os miócitos do 
                            coração fazem com que o sangue circule pelo corpo.
                        </p>
                        <p>
                            Isso não acontece quando observamos o disparo de um neurônio. Nesse caso, o observador não verifica nenhuma mudança 
                            significativa, porque o pensamento gerado não é visível: o disparo do neurônio se perde na escuridão.
                        </p>
                        <h2>Os estimuladores cerebrais profundos</h2>
                        <p>Já existem dispositivos que são implantados dentro ou muito próximo ao cérebro e que interagem com ele.</p>
                        <p>
                            Um exemplo são os implantes cocleares, dispositivos com estimuladores localizados na cóclea (estrutura do ouvido 
                            interno). Eles são usados por pessoas que não têm as células responsáveis por transformar os sinais acústicos 
                            que chegam do exterior nos sinais elétricos que reconhecemos como sons.
                        </p>
                        <p>
                            O implante recorre a pequenos microfones localizados na orelha e envia os sons recolhidos para eletrodos espalhados 
                            ao longo da cóclea. 
                            Aí estamos agindo muito perto do cérebro, chegando ao nervo auditivo.
                        </p>
                        <p>
                            Outro dispositivo que atua, desta vez sim, dentro do cérebro - e que também está devidamente aprovado - é o 
                            estimulador cerebral profundo. Ele começou a ser usado para tratar o Parkinson e, mais tarde, teve seu uso 
                            expandido para outras patologias, como a obesidade mórbida ou a depressão.
                        </p>
                        <h2>Inutilizar neurônios sem realmente saber como funcionam</h2>
                        <p>Com estes dispositivos, atua-se em núcleos profundos do cérebro. Mas ainda sabemos bem como o órgão funciona.</p>
                        <p>
                            O dispositivo usado para controlar os distúrbios motores na doença de Parkinson (e não não para curar a doença), por 
                            exemplo, foi desenvolvido sabendo que era melhor inutilizar um grupo de neurônios do que deixá-los como estão.
                        </p>
                        <p>
                            Esse dispositivo permitiu que, em vez de praticar uma ablação (isto é, queimar as células), os neurônios fossem 
                            inutilizados através da aplicação constante de pulsos elétricos que os bloqueassem. E é possível reverter o efeito 
                            ao parar o dispositivo.
                        </p>
                        <p>
                            No entanto, o trabalho para entender em profundidade as conexões entre os diferentes núcleos relacionados ao 
                            movimento, e descobrir por que um estimulador cerebral profundo funciona, continua.
                        </p>
                        <h2>E o que há para medir o pensamento?</h2>
                        <p>
                            Neste momento estamos longe de medir o pensamento, as intenções, as memórias ou os desejos. Com esse tipo de 
                            dispositivo, não podemos saber o que as pessoas estão pensando.
                        </p>
                        <p>
                            Mesmo com dispositivos já muito reconhecidos, como os estimuladores profundos, não há clareza sobre por que 
                            funcionam (não como funcionam) e qual efeito têm.
                        </p>
                        <p>
                            As controvérsias suscitadas pelo implante do chip de Elon Musk são compreensíveis. O funcionamento do cérebro nos intriga. 
                            Parece que é no cérebro que se encontra a nossa intimidade mais profunda e queremos respeitá-lo.
                        </p>
                        <p>
                            Não desejamos que outras pessoas nos controlem. Mas, por enquanto, que leiam nossa mente ou possam influenciar nosso 
                            pensamento, não é algo para se preocupar.
                        </p>
                        <p>
                            Será que será possível relacionar a atividade neuronal com os nossos pensamentos?
                        </p>
                        <p>
                            Tudo indica que haverá progresso na interação com as máquinas, mas não será baseado na relação entre a atividade 
                            neuronal e o pensamento. Entre outras coisas, porque nem sequer temos muito claro o que é pensar.
                        </p>
                        <p>
                            Será que o pensamento escapa à física e não é possível medi-lo?


                            *Javier Díaz Dorronsoro é professor de Instrumentação Biomédica na Universidade de Navarra, Espanha. O artigo 
                            original foi publicado no The Conversation e pode ser lido aqui.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}