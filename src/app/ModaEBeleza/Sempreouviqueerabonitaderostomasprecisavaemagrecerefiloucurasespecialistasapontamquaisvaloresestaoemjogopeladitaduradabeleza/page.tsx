"use client"

export default function noticia() {
    return (
        <>

                <div className="grow grid sm:grid-cols-8 gap-4  grid-cols-6 gap-4 " >
                    <div className="grow col-start-2 col-span-4 ">
                        <h1 className="grow sm:col-start-2 col-span-4 col-start-1 text-black sm:text-[40px] text-[28px] mt-[5rem] ">
                            ‘Sempre ouvi que era bonita de rosto, mas precisava emagrecer e fiz loucuras’: especialistas apontam quais valores 
                            estão em jogo pela ditadura da beleza
                        </h1>
                    </div>
                    <div className="grow sm:col-start-2 col-span-4 col-start-2 ">
                        <p className="sm:text-[24px] text-[18px] ">
                            No Dia Internacional das Mulheres, o g1 ouviu três mulheres que por conta do sobrepeso correram contra o tempo para 
                            se encaixarem em padrões sociais estéticos e com o tempo passaram a se aceitar como são. Veja o que psicólogos de 
                            Divinópolis dizem sobre o tema.
                        </p>
                    </div>

                    <div className="grow col-start-2 col-span-4">
                        <img src="/assets/imagens_modaebeleza/mulher_busca_emagrecimento.png" alt="imagem foto de mulher apoiada em pedra" />
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
                            O mundo globalizado na palma da mão e ao alcance de todos por um clique, permite a quebra de limites territoriais no 
                            espaço cibernético e se apresenta como uma arma poderosa dentro das relações sociais, pessoais e de consumo. No 
                            entanto, o que parece libertador para muitos, pode significar uma prisão para outros, já que, a mesma globalização 
                            que liberta dita de forma veemente os padrões a serem seguidos, especialmente os padrões de beleza.
                        </p>
                        <p>
                            No Dia Internacional das Mulheres, o g1 conversou com três mulheres que por conta do sobrepeso, já correram contra o 
                            tempo para se encaixarem em padrões sociais estéticos, mas decidiram pela aceitação própria e agora seguem em busca 
                            das melhores versões.
                        </p>
                        <p>
                            A reportagem também ouviu dois psicólogos clínicos que falaram sobre os valores que estão em jogo dentro da chamada 
                            ditadura da beleza. Confira.
                        </p>
                        <h2>Busca por padrões de beleza</h2>
                        <p>
                            A busca incansável pelo padrão de beleza imposto socialmente faz com que muitas mulheres se arrisquem com recursos 
                            perigosos para alcançarem corpos magros, torneados, peles jovens e sem marcas do tempo.
                        </p>
                        <p>
                            A gerente comercial, Elaine Cristina, que recentemente completou 40 anos, é um exemplo de busca constante pelo corpo 
                            estabelecido como perfeito. Ao g1, ela relatou que já fez loucuras para perder peso e se ver melhor no espelho, mas, 
                            assim como as outras mulheres da reportagem, ela passou a se aceitar, antes de mais nada, para então ter tranquilidade 
                            na buscar pela melhor versão.
                        </p>
                        <p>
                            “Quando a gente está diante de um padrão que define que devemos ter um corpo magro e malhado, é como se inconscientemente 
                            a gente fosse obrigado a correr atrás desse formato de corpo. Já fiz loucuras. Fiquei sem comer 24 horas em jejum, já 
                            tomei água quente com limão, muito chá, já fiz cirurgia e ainda coloquei minha vida em risco com remédios de tarja preta 
                            para emagrecer. Hoje em dia, tenho total consciência que tudo isso foi para que eu me encaixasse no padrão e hoje a 
                            maturidade me mostrou que estarmos bem com o nosso corpo é estarmos de bem com a vida. Por isso, não me cobro tanto e 
                            agora vou com mais calma em busca do que eu posso ser de melhor”, contou.
                        </p>
                        <p>
                            Ao ler o depoimento de Elaine, o psicólogo Everton Costa avalia a importância da tolerância com o próprio tempo. 
                            "Saber construir algo bom pode ser demorado e entender isso é a chave. Se nos desesperamos para conquistarmos bons 
                            resultados em qualquer âmbito que seja, podemos nos frustrar e nos colocar como incapazes, se não alcançamos os 
                            objetivos estabelecidos. Isso pode ser adoecedor e, com certeza, desencadear uma série de conflitos internos", 
                            apontou.
                        </p>
                        <p>
                            “No mais, me tranquiliza muito estar diante de um depoimento como o de Elaine, pois isso significa que foi entendido 
                            e absorvido o real valor da melhor versão. O conceito de beleza é muito amplo e é bem mais significativo do que este 
                            que nos é apresentado, no padrão social e que inevitavelmente sempre nos deparamos nas redes sociais. Não colocar a 
                            vida em risco com automedicação é fundamental. Não sou primeiro e nem serei o último a afirmar com convicção de que 
                            a beleza não se restringe a um belo e harmonioso rosto, ou um corpo escultural. Muito mais além e importante que 
                            isso, a beleza se apresenta quando a pessoa se aceita e faz as pazes consigo mesma. Essa beleza transcende a deixa 
                            mais evidente o brilho interior”, completou.
                        </p>
                        <p>
                            Por falar em fazer as pazes, foi exatamente isso que Samanhta Tavares Rocha fez quando ainda era uma adolescente. 
                            Hoje aos quase 30 anos de idade, a agente financeira se libertou dos preconceitos que tinha consigo própria por 
                            conta dos mais de 110 quilos.
                            Ela aprendeu a ver a obesidade como fator que poderia prejudicar a saúde e não como algo que a excluísse socialmente.
                        </p>
                        <p>
                            “Eu me aceito completamente. Sou bem resolvida com meu corpo, uso minhas roupas curtas, meus shorts, croppeds. Coloco 
                            biquíni, vou para piscina com meu filho e meu marido feliz da vida. Sei que emagrecer hoje significa um gesto de amor 
                            com a minha saúde, com os meus joelhos que doem muito, mas não sou movida pela vontade de estar igual às mulheres que 
                            se matam na academia. Tenho sobrepeso desde os 15 anos de idade, então desde muito nova eu luto para emagrecer. 
                            Quando tive meu filho engordei mais ainda, mas o amadurecimento me mostrou que não deveria fazer loucuras comigo 
                            mesma para perder peso e agradar a sociedade, eu estou feliz e é isso que importa”, enfatizou.
                        </p>
                        <p>
                            A comerciante Maria Tereza Vargas, já ouviu diversas vezes "Nossa, você é tão bonita de rosto, porque não emagrece?". 
                            Aos 26 anos ela lida com o sobrepeso desde 2019, quando deu à luz ao segundo filho. Na primeira gestação ela quase não 
                            ganhou peso, mas há quase três anos, quando a filha Helena Vargas nasceu, ela saltou do manequim 40 para o 52. Desde 
                            então, já correu contra o tempo para emagrecer e, segundo ela, já fez até tratamento medicamentoso. Tudo para voltar 
                            ao que era antes e se encaixar nos padrões atuais de beleza.
                        </p>
                        <p>
                            "Sempre ouvi que era bonita de rosto e que precisava emagrecer, e por isso fiz loucuras. A sociedade nos mostra o 
                            tempo inteiro que é saudável e bonito ser magra. Quando me vejo há mais de três anos tentando emagrecer percebo que 
                            estou aprisionada nessa situação e isso muitas vezes até me prejudica, pois a ansiedade para emagrecer é tanta, que 
                            não consigo. Mas este ano eu dei uma virada de chave e disse que será o meu ano. Quero voltar ao meu manequim 40, 
                            quero voltar a ter dois dígitos na balança e vou conseguir por questão de saúde, não mais para ficar escultural para 
                            essa sociedade hipócrita que nos prende a padrões que poucas conseguem alcançar. Somos diferentes e ser diferente é 
                            normal. Sou linda do jeito que sou e se eu melhorar será por saúde", pontuou.
                        </p>
                        <p>
                            Para buscar melhorar a versão, Maria Tereza tem praticado atividades físicas como caminhadas, atividades aeróbicas e 
                            luta. Além disso, ela tem investido em melhores escolhas na alimentação. Reduziu o consumo de carboidratos, açúcares, 
                            refrigerantes e frituras. Os hábitos mais saudáveis demonstram a cada dia, que não importa o tempo, mas um dia ela 
                            estará de frente com a melhor versão, que já está sendo construída.
                        </p>
                        <p>
                            "Importantíssimo todos fazermos esse movimento de irmos atrás de melhorar e de termos o prazer do encontro com 
                            nossas melhores versões. Se não fazemos nada nesse sentido, estagnados e frustrados permanecemos. Mas se estamos 
                            lutando para melhorar, esse sentimento por si só já nos garante mais autoestima e força. A mulher é forte por si 
                            só, justamente porque batalha diariamente em busca do que quer e esse é o real valor da beleza: insistir 
                            constantemente em sermos melhores", avaliou a psicóloga Amanda paz Amaral.
                        </p>
                    </div>

                    <div className="grow ml-[100px] sm:mr-[50px] sm:ml-[50px] sm:col-start-6 col-span-3 col-start-2 col-span-4   ">
                        <div className=" hidden sm:block h-[1666px]  bg-darkgray "></div>
                    </div>
                </div>



            {/*<h1>‘Sempre ouvi que era bonita de rosto, mas precisava emagrecer e fiz loucuras’: especialistas apontam quais valores 
                estão em jogo pela ditadura da beleza</h1>
            <p>
                No Dia Internacional das Mulheres, o g1 ouviu três mulheres que por conta do sobrepeso correram contra o tempo para 
                se encaixarem em padrões sociais estéticos e com o tempo passaram a se aceitar como são. Veja o que psicólogos de 
                Divinópolis dizem sobre o tema.
            </p>
            <img src="/assets/imagens_modaebeleza/mulher_busca_emagrecimento.png" alt="imagem foto de mulher apoiada em pedra" />
            <p>
                O mundo globalizado na palma da mão e ao alcance de todos por um clique, permite a quebra de limites territoriais no 
                espaço cibernético e se apresenta como uma arma poderosa dentro das relações sociais, pessoais e de consumo. No 
                entanto, o que parece libertador para muitos, pode significar uma prisão para outros, já que, a mesma globalização 
                que liberta dita de forma veemente os padrões a serem seguidos, especialmente os padrões de beleza.
            </p>
            <p>
                No Dia Internacional das Mulheres, o g1 conversou com três mulheres que por conta do sobrepeso, já correram contra o 
                tempo para se encaixarem em padrões sociais estéticos, mas decidiram pela aceitação própria e agora seguem em busca 
                das melhores versões.
            </p>
            <p>
                A reportagem também ouviu dois psicólogos clínicos que falaram sobre os valores que estão em jogo dentro da chamada 
                ditadura da beleza. Confira.
            </p>
            <h2>Busca por padrões de beleza</h2>
            <p>
                A busca incansável pelo padrão de beleza imposto socialmente faz com que muitas mulheres se arrisquem com recursos 
                perigosos para alcançarem corpos magros, torneados, peles jovens e sem marcas do tempo.
            </p>
            <p>
                A gerente comercial, Elaine Cristina, que recentemente completou 40 anos, é um exemplo de busca constante pelo corpo 
                estabelecido como perfeito. Ao g1, ela relatou que já fez loucuras para perder peso e se ver melhor no espelho, mas, 
                assim como as outras mulheres da reportagem, ela passou a se aceitar, antes de mais nada, para então ter tranquilidade 
                na buscar pela melhor versão.
            </p>
            <p>
                “Quando a gente está diante de um padrão que define que devemos ter um corpo magro e malhado, é como se inconscientemente 
                a gente fosse obrigado a correr atrás desse formato de corpo. Já fiz loucuras. Fiquei sem comer 24 horas em jejum, já 
                tomei água quente com limão, muito chá, já fiz cirurgia e ainda coloquei minha vida em risco com remédios de tarja preta 
                para emagrecer. Hoje em dia, tenho total consciência que tudo isso foi para que eu me encaixasse no padrão e hoje a 
                maturidade me mostrou que estarmos bem com o nosso corpo é estarmos de bem com a vida. Por isso, não me cobro tanto e 
                agora vou com mais calma em busca do que eu posso ser de melhor”, contou.
            </p>
            <p>
                Ao ler o depoimento de Elaine, o psicólogo Everton Costa avalia a importância da tolerância com o próprio tempo. 
                "Saber construir algo bom pode ser demorado e entender isso é a chave. Se nos desesperamos para conquistarmos bons 
                resultados em qualquer âmbito que seja, podemos nos frustrar e nos colocar como incapazes, se não alcançamos os 
                objetivos estabelecidos. Isso pode ser adoecedor e, com certeza, desencadear uma série de conflitos internos", 
                apontou.
            </p>
            <p>
                “No mais, me tranquiliza muito estar diante de um depoimento como o de Elaine, pois isso significa que foi entendido 
                e absorvido o real valor da melhor versão. O conceito de beleza é muito amplo e é bem mais significativo do que este 
                que nos é apresentado, no padrão social e que inevitavelmente sempre nos deparamos nas redes sociais. Não colocar a 
                vida em risco com automedicação é fundamental. Não sou primeiro e nem serei o último a afirmar com convicção de que 
                a beleza não se restringe a um belo e harmonioso rosto, ou um corpo escultural. Muito mais além e importante que 
                isso, a beleza se apresenta quando a pessoa se aceita e faz as pazes consigo mesma. Essa beleza transcende a deixa 
                mais evidente o brilho interior”, completou.
            </p>
            <p>
                Por falar em fazer as pazes, foi exatamente isso que Samanhta Tavares Rocha fez quando ainda era uma adolescente. 
                Hoje aos quase 30 anos de idade, a agente financeira se libertou dos preconceitos que tinha consigo própria por 
                conta dos mais de 110 quilos.
                Ela aprendeu a ver a obesidade como fator que poderia prejudicar a saúde e não como algo que a excluísse socialmente.
            </p>
            <p>
                “Eu me aceito completamente. Sou bem resolvida com meu corpo, uso minhas roupas curtas, meus shorts, croppeds. Coloco 
                biquíni, vou para piscina com meu filho e meu marido feliz da vida. Sei que emagrecer hoje significa um gesto de amor 
                com a minha saúde, com os meus joelhos que doem muito, mas não sou movida pela vontade de estar igual às mulheres que 
                se matam na academia. Tenho sobrepeso desde os 15 anos de idade, então desde muito nova eu luto para emagrecer. 
                Quando tive meu filho engordei mais ainda, mas o amadurecimento me mostrou que não deveria fazer loucuras comigo 
                mesma para perder peso e agradar a sociedade, eu estou feliz e é isso que importa”, enfatizou.
            </p>
            <p>
                A comerciante Maria Tereza Vargas, já ouviu diversas vezes "Nossa, você é tão bonita de rosto, porque não emagrece?". 
                Aos 26 anos ela lida com o sobrepeso desde 2019, quando deu à luz ao segundo filho. Na primeira gestação ela quase não 
                ganhou peso, mas há quase três anos, quando a filha Helena Vargas nasceu, ela saltou do manequim 40 para o 52. Desde 
                então, já correu contra o tempo para emagrecer e, segundo ela, já fez até tratamento medicamentoso. Tudo para voltar 
                ao que era antes e se encaixar nos padrões atuais de beleza.
            </p>
            <p>
                "Sempre ouvi que era bonita de rosto e que precisava emagrecer, e por isso fiz loucuras. A sociedade nos mostra o 
                tempo inteiro que é saudável e bonito ser magra. Quando me vejo há mais de três anos tentando emagrecer percebo que 
                estou aprisionada nessa situação e isso muitas vezes até me prejudica, pois a ansiedade para emagrecer é tanta, que 
                não consigo. Mas este ano eu dei uma virada de chave e disse que será o meu ano. Quero voltar ao meu manequim 40, 
                quero voltar a ter dois dígitos na balança e vou conseguir por questão de saúde, não mais para ficar escultural para 
                essa sociedade hipócrita que nos prende a padrões que poucas conseguem alcançar. Somos diferentes e ser diferente é 
                normal. Sou linda do jeito que sou e se eu melhorar será por saúde", pontuou.
            </p>
            <p>
                Para buscar melhorar a versão, Maria Tereza tem praticado atividades físicas como caminhadas, atividades aeróbicas e 
                luta. Além disso, ela tem investido em melhores escolhas na alimentação. Reduziu o consumo de carboidratos, açúcares, 
                refrigerantes e frituras. Os hábitos mais saudáveis demonstram a cada dia, que não importa o tempo, mas um dia ela 
                estará de frente com a melhor versão, que já está sendo construída.
            </p>
            <p>
                "Importantíssimo todos fazermos esse movimento de irmos atrás de melhorar e de termos o prazer do encontro com 
                nossas melhores versões. Se não fazemos nada nesse sentido, estagnados e frustrados permanecemos. Mas se estamos 
                lutando para melhorar, esse sentimento por si só já nos garante mais autoestima e força. A mulher é forte por si 
                só, justamente porque batalha diariamente em busca do que quer e esse é o real valor da beleza: insistir 
                constantemente em sermos melhores", avaliou a psicóloga Amanda paz Amaral.
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