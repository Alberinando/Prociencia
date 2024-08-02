"use client"

export default function noticia() {
    return (
        <>
                <div className="grow grid  font-Arial space-y-8 sm:grid-cols-8 gap-4  grid-cols-6 gap-4 mb-28" >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            As dificuldades do jogo amoroso para as mulheres mais velhas
                        </h1>
                    </div>

                    <div className="grow space-y-8 sm:col-start-2 col-span-4 col-start-2 ">
                        <p className=" text-[18px] ">
                            Psicóloga que trabalha com público acima dos 50 diz que é preciso investir na autoestima e se sentir confortável 
                            consigo mesma, em vez de querer agradar a qualquer custo
                        </p>
                        <p className=" text-[18px] ">
                            É claro que há muitas mulheres acima dos 50 anos que têm relacionamentos afetivos satisfatórios e estáveis, mas as 
                            que mais interessam à psicóloga e coach Jael Klein Coaracy, que tem pós-graduação em terapia cognitiva 
                            comportamental e trabalha com esse segmento, são aquelas que se sentem solitárias e as que estão mal acompanhadas.
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_comportamento/Jael_Klein.png" alt="imagem de Jael Klein"/>
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
                            “Há mulheres que ficam sozinhas e decidem que tal situação não define suas vidas, seguindo em frente. No entanto, 
                            há também as que ficam bastante deprimidas e amarguradas porque não têm parceiro, ou se submetem a relações 
                            abusivas porque não conseguem se imaginar sem alguém. É como se o valor de uma mulher fosse medido por estar 
                            acompanhada. Com o passar dos anos, a gente ganha uma quilometragem respeitável e é preciso virar essa chave”, diz.
                        </p>
                        <p>
                            Em seus atendimentos, já ouviu diversas variações da frase “quero um homem ao meu lado, ainda que não me satisfaça, 
                            nem me deixe feliz”. Na sua avaliação, o caminho é investir na construção da autoestima e entender que o mais 
                            importante é se sentir confortável:
                        </p>
                        <p>
                            “Infelizmente, quando a mulher não está bem consigo mesma, é bastante comum que, ao conhecer alguém que lhe 
                            interessa, ache preferível criar uma personagem que se encaixe no que imagina que são os desejos do outro. É o 
                            que eu chamo de fazer um número. O problema é que isso não vai torná-la atraente. O que as pessoas procuram é 
                            uma conexão, o que não acontece com quem não é autêntica e só está preocupada em agradar”.
                        </p>
                        <p>
                            Há nove anos morando nos Estados Unidos – primeiro no estado de Nova York e agora na Flórida – Jael analisa as 
                            diferenças culturais entre os dois países. Apesar de as figuras do “sugar daddy” e da “sugar mommy” (respectivamente, 
                            o homem e a mulher mais velhos que dão presentes ou bancam jovens em troca de sexo) existirem, afirma que 
                            relacionamentos de casais na faixa dos 60 ou 70 anos são cada vez mais frequentes:
                        </p>
                        <p>
                            “São viúvos e viúvas, divorciados e divorciadas que buscam pessoas com um repertório semelhante. Querem uma boa 
                            companhia, com quem possam viajar, se divertir e compartilhar experiências, sem exigências estéticas. O apelo da 
                            aparência não é tão forte quanto aqui. Ninguém pede desculpas pelo que é. Esse nível de exigência consigo mesma 
                            impede, inclusive, que as mulheres curtam o sexo, porque estão mais preocupadas em dar prazer aos parceiros. Se 
                            ela está autoconsciente demais, não relaxa, não goza”.
                        </p>
                        <p>
                            Na sua opinião, no Brasil há uma assimetria que valoriza excessivamente atributos físicos, que não são capazes de 
                            alimentar a convivência. Não critica procedimentos estéticos, mas ressalta: “não são dobrinhas de gordura ou 
                            celulite que definem uma relação”. Para a psicóloga, ninguém deveria ter preconceito contra sites de relacionamento, 
                            que abrem um leque maior de possibilidades de encontros. Entretanto, enfatiza que o principal é o convívio de igual 
                            para igual: “não podemos perder tempo com quem não nos dá valor”.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>
        </>
    );
}