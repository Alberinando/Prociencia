"use client"

export default function noticia() {
    return (
        <>
                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28" >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            Mulheres na ciência: conheça 8 cientistas que fizeram história
                        </h1>
                    </div>

                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                        <p className="sm:text-[24px] text-[18px] ">
                            No Dia Mundial das Mulheres e Meninas na Ciência, confira algumas das mulheres cientistas cujas contribuições deixaram 
                            uma marca na história da ciência.
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_ciencia/Lise_Meitner.png" alt="imagem de Lise Meitner"/>
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
                            A Organização das Nações Unidas (ONU) enfatiza que mulheres e meninas desempenham um papel vital nas comunidades 
                            científicas e tecnológicas e, por isso, sua participação deve ser fortalecida.
                        </p>
                        <h2>Quando é o Dia da Mulher e das Meninas na Ciência?</h2>
                        <p>
                            Para reconhecer o papel-chave que desempenham nesta área, a Assembleia Geral das Nações Unidas declarou o dia 11 de 
                            fevereiro como o Dia Internacional da Mulher e das Meninas na Ciência.
                        </p>
                        <p>
                            Além de reconhecer suas contribuições nas áreas de pesquisa e inovação, o dia visa quebrar estereótipos e erradicar a 
                            discriminação contra mulheres e meninas no campo, explica a ONU Mulheres, um braço das Nações Unidas dedicada a 
                            promover a igualdade de gênero e o empoderamento das mulheres.
                        </p>
                        <p>
                            Ao longo da história, muitas mulheres cientistas dedicaram suas vidas à pesquisa e conseguiram importantes avanços, 
                            reconhece o Alto Comissariado das Nações Unidas para os Refugiados (Acnur). Entre as mais destacadas, a agência 
                            menciona oito.
                        </p>
                        <h2>1. Caroline Herschel</h2>
                        <p>
                            Nascida na Alemanha, Caroline Herschel (1750-1848) foi assistente de seu irmão William, que era astrônomo e ficou 
                            famoso por sua descoberta do planeta Urano. Enquanto trabalhava com ele, ela descobriu novas nebulosas (nuvens de 
                            poeira cósmica e gases encontradas no espaço entre estrelas) e aglomerados de estrelas.
                        </p>
                        <p>
                            Entre suas contribuições à ciência, Herschel foi a primeira mulher a descobrir um cometa, a primeira mulher cujo 
                            trabalho foi publicado pela Royal Society, instituição da Inglaterra destinada à promoção do conhecimento científico 
                            fundada no século 17, e a primeira britânica a ganhar um salário por trabalho científico, diz o Acnur.
                        </p>
                        <p>
                            Em 1783, ela descobriu três novas nebulosas e, entre 1786 e 1797, descobriu oito cometas, segundo a Nasa.
                        </p>
                        <h2>2. Ada Lovelace</h2>
                        <p>
                            Ada Lovelace, que viveu entre 1815 e 1852, é considerada a primeira programadora de computadores da história e a 
                            pessoa responsável pelo que iniciou o sistema informático que conhecemos hoje, diz a agência das Nações Unidas.
                        </p>
                        <p>
                            Especificamente, segundo o Acnur, Lovelace foi colega de trabalho de Charles Babbage, matemático e cientista 
                            britânico inventor da máquina analítica, um aparato capaz de realizar cálculos de adição. O aparelho tinha uma 
                            espécie de memória e podia receber instruções através de códigos como qualquer computador.
                        </p>
                        <p>
                            Com base nas anotações de Babbage, Ada escreveu um algoritmo compatível para que a máquina fosse capaz de calcular 
                            os Números de Bernoulli, uma equação matemática útil até hoje para a programação moderna. Ele é considerado o 
                            primeiro algoritmo destinado a ser processado por uma máquina.
                        </p>
                        <p>
                            Em sua homenagem, o Departamento de Defesa dos Estados Unidos nomeou uma linguagem de programação "Ada".
                        </p>
                        <h2>3. Marie Curie</h2>
                        <p>
                            Marie Curie (1867-1934) foi uma física e química polonesa pioneira no estudo da radiação. Suas pesquisas a levaram a 
                            descobrir dois elementos radioativos: o rádio e o polônio.
                        </p>
                        <p>
                            Segundo a ONU Mulheres, as contribuições de Curie lançaram as bases da ciência nuclear moderna, desde os raios-X 
                            até a radioterapia para o tratamento do câncer.
                        </p>
                        <p>
                            Ela também fundou um instituto de pesquisa médica em Varsóvia, capital da Polônia, e inventou unidades móveis de 
                            raios-X que ajudaram mais de um milhão de soldados feridos na Primeira Guerra Mundial.
                        </p>
                        <p>
                            Por suas contribuições, ela recebeu dois prêmios Nobel e se tornou a primeira mulher a receber este reconhecimento e a 
                            primeira pessoa a ganhar dois prêmios Nobel em diferentes ciências (física, em 1903, e em química, em 1911).
                        </p>
                        <h2>4. Lise Meitner</h2>
                        <p>
                            Lise Meitner era uma física sueca nascida na Áustria que viveu entre 1878 e 1968. Junto com seu parceiro de pesquisa, 
                            Otto Hahn, ela trabalhou no estudo de elementos radioativos.
                        </p>
                        <p>
                            De acordo com a Acnur, Meitner cunhou o termo fissão nuclear ao calcular a energia liberada no fenômeno, usado na 
                            produção de energia nas usinas termonucleares. Apesar de sua contribuição, foi Hahn quem ganhou um Prêmio Nobel 
                            por esta descoberta, enquanto Meitner não foi considerada pelo comitê de premiação.
                        </p>
                        <h2>5. Rosalind Franklin</h2>
                        <p>
                            Desde bem jovem, Rosalind Franklin (1920-1958) sabia que queria seguir uma carreira na ciência. Em 1945, começou 
                            sua carreira científica depois de conquistar o doutorado em química pela Universidade de Cambridge (Reino Unido).
                        </p>
                        <p>
                            Sua pesquisa contribuiu para o entendimento do DNA. De acordo com o Acnur, ela foi capaz de tirar uma fotografia 
                            por raios-x mostrando a dupla hélice das moléculas de DNA pela primeira vez.
                        </p>
                        <p>
                            "Outro pesquisador no mesmo laboratório, Maurice Wilkins, mostrou a imagem para dois colegas e juntos publicaram a 
                            descoberta na revista Nature. Em 1962, esses três pesquisadores receberam o Prêmio Nobel pela descoberta da dupla 
                            hélice do DNA, mas Franklin tinha morrido quatro anos antes, vítima de um câncer de ovário", explica a agência da ONU.
                        </p>
                        <h2>6. Margarita Salas</h2>
                        <p>
                            A cientista espanhola Margarita Salas (1938-2019) foi doutora em biologia e concentrou suas pesquisas no campo da 
                            biologia molecular. Uma de suas principais contribuições à ciência foi a descoberta da enzima DNA polimerase, que 
                            é responsável pela replicação do DNA.
                        </p>
                        <h2>7. Elizabeth Blackburn</h2>
                        <p>
                            Esta cientista australiana, nascida em 1948, doutora em biologia molecular, descobriu a telomerase, uma enzima que 
                            prolonga os telômeros, que são as extremidades dos cromossomos e influenciam diretamente na longevidade das células. 
                            Segundo a agência das Nações Unidas Acnur, sua pesquisa sobre a telomerase contribuiu para o estudo de técnicas de 
                            tratamento do câncer.
                        </p>
                        <p>
                            Por sua descoberta, a australiana recebeu o Prêmio Nobel de Medicina de 2009, com os colegas Carol Greider e Jack 
                            Szostak, de acordo com o site do prêmio internacional.
                        </p>
                        <h2>8. Flora de Pablo</h2>
                        <p>
                            O Acnur também destaca o trabalho de Flora de Pablo, nascida em 1952, na Espanha, médica e psicóloga especializada 
                            em biologia molecular.
                        </p>
                        <p>
                            Segundo descreve a Associação Espanhola de Mulheres Pesquisadoras e Tecnólogas (Amit), uma organização que busca 
                            defender os interesses e a igualdade de direitos e oportunidades das mulheres pesquisadoras e tecnólogas, a 
                            pesquisa de Flora se concentra nos processos de proliferação, diferenciação, competição e morte celular.
                        </p>
                        <p>
                            Flora de Pablo combinou seu trabalho científico com a luta pelo reconhecimento do trabalho das mulheres na ciência. Além 
                            de ser membro-fundador da Amit e sua primeira presidente (entre 2001 e 2007), ela também é integrante da Comissão para 
                            Mulheres na Ciência do Conselho Superior de Investigações Científicas da Espanha (CSIC) desde 2001.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}