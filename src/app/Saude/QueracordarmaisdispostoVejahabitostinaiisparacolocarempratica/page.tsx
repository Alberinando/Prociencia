"use client"

export default function noticia() {
    return (
        <>
               <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 " >
                    <div className="grow col-start-2 col-span-4 ">
                     <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                         Quer acordar mais disposto? Veja hábitos matinais para colocar em prática
                     </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                    <p className="sm:text-[24px] text-[18px] ">Especialistas dão dicas de cardápio matinal e rotina de autocuidados que vão ajudá-lo a ter mais foco e produtividade durante o dia</p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                         <img src="/assets/imagens_saude/acordar_mais_disposto.png" alt="imagem de mulher acordando" />
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
                              Enrolar mais cinco minutinhos na cama? Colocar diversos alarmes seguidos? Mexer no celular antes de qualquer 
                              tarefa do dia? Alguns hábitos matinais podem estar prejudicando seu foco e produtividade ao longo do dia e você 
                              nem imagina!
                         </p>
                         <p>
                              Mas algumas técnicas podem deixar a sua rotina mais equilibrada e ativa! Quer saber como? Um time de especialistas 
                              reuniu sugestões de como montar um cardápio matinal rico em nutrientes, dicas de autocuidado e atividades físicas, 
                              além da importância da prática para a saúde mental.
                         </p>
                         <h2>Alimentação</h2>
                         <p>
                              Serena Del Favero é nutricionista do Espaço Einstein Esporte e Reabilitação, do Hospital Albert Einstein. Ela 
                              destaca que a primeira refeição do dia precisa ser variada e deve, preferencialmente, ser rica em proteínas 
                              e boas fontes de carboidratos: frutas como papaia, banana e abacaxi, pães integrais, granolas, aveias, iogurtes 
                              e ovos são bem-vindos.
                              “Pode-se consumir o café, assim como o chá verde ou outros chás com cafeína. Sucos ou chás com gengibres também 
                              podem ajudar. Além disso, um suco ou smoothie de frutas também fornecerá nutrientes e energia para começar o dia. 
                              Lembrando que a energia não vem apenas destes alimentos, mas, sim, de um café da manhã equilibrado e de uma boa 
                              noite de sono.”
                         </p>
                         <h2>Exercícios</h2>
                         <p>
                              Já está comprovado que a prática de exercícios traz inúmeros benefícios para a saúde mental e física direta ou 
                              indiretamente. A profissional de educação física do Espaço Einstein Esporte e Reabilitação Carla Giuliano de 
                              Sá Pinto Montenegro comenta mais alguns motivos para você repensar sua rotina fitness!
                         </p>
                         <p>
                              Processo de angiogenese cerebral: “Criação de novos vasos sanguíneos para irrigar melhor nosso cérebro, já que 
                              melhorando a vascularização melhoramos a memória, atenção, produtividade e foco.”
                         </p>
                         <p>
                              Liberação de hormônios, como dopamina e endorfina: “Elas auxiliam no controle de estresse, prevenção e 
                              tratamento de ansiedade, pois são responsáveis por promover sensação de bem-estar para o indivíduo.”
                         </p>
                         <p>
                              Auxilia em casos de transtornos mentais como burnout e depressão: “Muitas empresas e até universidades promovem momentos
                              ativos para suas equipes e alunos a fim de melhorar produtividade e aprendizado de seus colaboradores e alunos.”
                         </p>
                         <p>
                              E se você não sabe como começar a treinar, já listamos aqui várias dicas para driblar a indisposição e acrescentar, 
                              aos poucos, alguns exercícios na sua rotina!
                         </p>
                         <h2>Bem-estar</h2>
                         <p>
                              Praticar esportes e ter uma alimentação saudável são itens essenciais para começar o dia bem. Mas existem alguns 
                              pontos que merecem ainda mais atenção, como a qualidade do sono, hábitos noturnos prejudiciais e outros cuidados 
                              com a saúde. Quem explica os detalhes é Sley Tanigawa Guimarães, especialista em acupuntura e medicina preventiva 
                              do Hospital Albert Einstein.
                         </p>
                         <p>Dicas para melhorar a qualidade do sono</p>
                         <p>
                              Para acordar mais disposto e sem a sensação de cansaço, a médica aponta que o ideal é dormir por sete a nove 
                              horas: “Pouquíssimas pessoas no mundo precisam dormir menos do que sete ou mais do que nove!”
                         </p>
                         <p>
                              Tente, ao máximo, dormir e acordar no mesmo horário: isso ajuda o cérebro a entender melhor a sua rotina. “Se 
                              estiver com alguma preocupação na cabeça, cerca de uma hora antes de dormir, faça uma lista de tarefas para o 
                              dia seguinte. Isso faz o cérebro entrar que você tem coisas para realizar, mas este é momento de descanso.”
                         </p>
                         <p>
                              Experimente se expor bastante à luz do sol, se possível, durante o dia e com protetor solar: o hábito ajuda a 
                              manter os níveis de vitamina D e de serotonina necessários para o corpo.
                         </p>
                         <p>
                              Atenção à quantidade de café: “Evite tomar mais do que três xícaras por dia e que seja consumido até às 15 horas, 
                              para evitar que a bebida prejudique o nosso sono. Afinal, tudo que prejudica o sono nos faz acordar menos dispostos 
                              no dia seguinte.”
                         </p>
                         <p>
                              Crie um ritual de sono: “Assim, o cérebro vai entendendo que está se aproximando da hora de dormir. Ou seja, não é 
                              bom ficar o dia inteiro na cama ou mexendo no computador, principalmente nesse período de home office. Use a cama 
                              só para dormir e namorar!”
                              Durante o sono, mantenha o quarto o mais escuro possível: “Isso vale, inclusive, em relação às luzes de aparelhos 
                              eletrônicos! Além disso, mantenha o quarto silencioso e em uma temperatura agradável.”
                         </p>
                         <p>
                              Evite comer muito antes de dormir: ao invés de diminuir a atividade corporal na hora do sono, o processo de 
                              digestão vai mantê-lo ativo e, possivelmente, causar insônia.
                         </p>
                         <p>
                              Praticar atividade física durante o dia ajuda a melhorar a qualidade de sono: isso vai deixar o corpo mais 
                              cansado e preparado para descansar.
                         </p>
                         <p>
                         Hidrate-se ao longo do dia: “Quando a gente dorme, a nossa pressão baixa e isso pode dar algum desconforto, fazendo 
                         com que as pessoas acordem no meio da noite. Mas não tome muita água a ponto de ter de se levantar várias vezes para 
                         ir ao banheiro.”
                         Aposte nos chás: o chá de camomila é mais relaxante e ajuda a acalmar.
                         </p>
                         <p>
                              Banho morno: esta tática também estimula o corpo a relaxar e começar a “desligar” para a hora de dormir.
                         </p>
                         <h2>Os prejuízos de usar o celular antes de dormir</h2>
                         <p>
                              Sley explica que, neste caso, existem dois pontos problemáticos que causam prejuízos à saúde e interferem no 
                              tempo de sono: a luz dos aparelhos e o tempo gasto nos eletrônicos. Ela também desmistifica a falsa sensação 
                              que se tem de que o uso do celular ajuda a relaxar: “Muitas vezes a gente tem tanta preocupação na cabeça que 
                              usamos o celular como um escape para nos distrair um pouquinho dessas preocupações e acabamos adormecendo porque 
                              estamos exaustos.”
                         </p>
                         <p>
                              A luz diminui a produção de melatonina pelo nosso cérebro: "Esta proteína é importante tanto para a gente 
                              adormecer, pegar no sono, mas também tem um pico de melatonina que acontece no meio da noite, por volta das 
                              2 ou 3 horas da madrugada. Se a gente usa o celular [nesse momento], a gente não permite que o cérebro produza 
                              a quantidade necessária de melatonina, não atinge esse pico e desperta no meio da noite.”
                         </p>
                         <p>
                              O tempo de uso do celular deixa o cérebro mais ativo: "Seja vendo redes sociais, lendo notícias ou mexendo em 
                              joguinhos. Isso gera o contrário do que a gente deseja para o processo de adormecer, que é deixar o nosso 
                              cérebro cada vez mais calminho e com menos ruído.”
                         </p>
                         <h2>Banho frio pela manhã</h2>
                         <p>
                              A técnica, certamente, ajuda a dar aquela despertada ao acordar... Mas será que isso faz bem mesmo? Para responder 
                              a esta pergunta, a especialista cita um estudo publicado na Biblioteca Nacional de Medicina dos Estados Unidos.
                         </p>
                         <p>
                              A metodologia envolvia grupos que tomaram banho gelado por 30, 60 ou 90 segundos – seguido do banho quente – 
                              durante 90 dias consecutivos. O resultado apresentou que estas pessoas tiveram uma taxa de ausência por doença 
                              29% menor no trabalho do que quem tomou apenas banhos quentes.
                         </p>
                         <p>
                              “Quando vem aquela água fria é um desconforto muito grande! O nosso corpo tem que se adaptar, ou seja, é uma 
                              resposta de estresse agudo e bem forte. Aí o nosso corpo libera noradrenalina [que atua em situações de estresse] 
                              e cortisol, isso dá uma acordada no corpo e nos coloca em estado de alerta. Então, para algumas pessoas, isso 
                              pode dar uma sensação boa", explica a médica.
                         </p>
                         <p>
                              Passado o susto inicial da água gelada, Sley detalha que o corpo libera dopamina, serotonina e norepinefrina 
                              (neurotransmissor que aumenta a pressão arterial), dando a sensação de bem-estar. Mas a médica faz um alerta 
                              para grupos de risco:
                         </p>
                         <p>
                              “Pessoas que têm problema cardiovascular ou uma tendência à doença cardiovascular precisam tomar cuidado, porque 
                              tem uma mudança de frequência cardíaca e de pressão arterial muito grande e pode dar problema.”
                         </p>
                         <h2>Cuidados com a pele</h2>
                         <p>
                              O inverno é o período com maior tendência a tomar banhos quentes, se hidratar menos e, consequentemente, 
                              ficar com a pele mais ressecada. Para evitar esse tipo de situação, ela cita algumas dicas práticas:
                         </p>
                         <p>
                              Tome banhos menos demorados
                              Hidrate a pele logo em seguida
                              Não se esquece de hidratar os lábios também
                              Tire a maquiagem antes de dormir
                              Não deixe de usar protetor solar mesmo em dias nublados
                         </p>
                         <p>
                              “Muitas vezes, a pele muito ressecada acaba sendo porta de entrada para desenvolver algum problema de pele", 
                              finaliza.
                         </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
               </div>
        </>
    );
}