import React from "react";


const Footer = () => {
    return (
        <>
        <div className="flex flex-row bg-cinza text-preto size-full h-96 space-x-20 ">
            <div className="mx-8 py-16 w-1/3">
                <p className="preto font-pixels">Logo</p>
            </div>
            <div className="mx-8 py-16 w-1/3">
                <p className="ordinal font-pixels">Contato</p>
                    
                <div className="space-y-1 py-6">
                    <li className="list-none">(84)9999-9999</li>
                    <li className="list-none ">contato@email.com</li>
                    <li className="list-none">Rua,xxx-20-yyy</li>
                    <li className="list-none">Parnamirim, RN</li>
                    <div>
                        <button className=" bg-branco mt-8 w-48 h-8 font-pixels">
                            FALE CONOSCO
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-8 py-16 w-1/3">
                <p className=" font-pixels">Informações</p>
                <div className="space-y-1 py-6">
                    <li className="list-none">Notícias</li>
                    <li className="list-none  ">Saúde</li>
                    <li className="list-none ">Comportamento</li>
                    <li className="list-none">Moda e Beleza</li>
                    <li className="list-none">Entretenimento</li>
                    <li className="list-none">Vídeos</li>
                    <li className="list-none">Termos e Condições</li>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;



