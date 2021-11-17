import Image from 'next/image'
import { useState } from "react";
import {Header} from '../components/Header'
import { Container, Content, Main, Financiadores, Contato, Footer} from "./style";
import mascote from "../../public/assets/MascoteHome.svg";
import mascoteQuebracabeça from "../../public/assets/MascoteQuebraCabeça.svg";
import mascoteRitimo from "../../public/assets/MascoteRitimoMania.svg";
import Ufpa from "../../public/assets/Ufpa.png"
import Capes from "../../public/assets/Capes.png"
import Cnpq from "../../public/assets/Cnpq.png"
import Fapespa from "../../public/assets/Fapespa.png"
import {ModalDownload} from '../components/ModalDownload'





export default function Home()  {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    const [isNewTransactionModalOpenRitimo, setIsNewTransactionModalOpenRitimo] = useState(false)
    
    function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
    }

    function handleOpenNewTransactionModalRitimo() {
        setIsNewTransactionModalOpenRitimo(true);
      }
  
      function handleCloseNewTransactionModalRitimo() {
        setIsNewTransactionModalOpenRitimo(false);
      }
    return(
        <> 
            <Header />
            <Container>
                <Content id="home">
                    <div>
                        <h4>Plataforma</h4>
                        <h1>Jogos Adaptaveis</h1>
                        <p>Desevolvido para gerar relatorios sobre o desenpenho dos jogadores</p>
                    </div>
                    <Image className="Mascote" src={mascote} alt="Mascote" />
                </Content>
                <div className="Vector" style={{ backgroundImage: `url(${"assets/Vector.svg"})` }}></div>

                <Main id="jogos" data-anime="scroll">
                    <h2>Jogos</h2>
                    <div className="ContainerJogos">
                        <h3>Quebra-Cabeça</h3>
                        <div className="QuebraCabeca">
                        <Image  src={mascoteQuebracabeça} alt="Mascote" />
                            

                            <ul>
                                <h4>Caracteristicas</h4>
                                <li>
                                    <strong>01</strong>
                                    <p>Raciocínio Lógico</p>
                                </li>
                                <li>
                                    <strong>02</strong>
                                    <p>Habilidades motoras finas</p>
                                </li>
                                <li>
                                    <strong>03</strong>
                                    <p>Memória</p>
                                </li>
                                <li>
                                    <strong>04</strong>
                                    <p>Reconhecimento de objetos</p>
                                </li>
                                <li>
                                    <strong>05</strong>
                                    <p>personalização das Imagens</p>
                                </li>

                                <li className="download"><a onClick={handleOpenNewTransactionModal}>Download</a></li>
                            </ul>
                        </div>

                        <h3 className="h3RitimoMania">Ritimo Mania</h3>
                        <div className="RitmoMania">
                        <Image  src={mascoteRitimo} alt="Mascote" />
                            

                            <ul>
                                <h4>Caracteristicas</h4>
                                <li>
                                    <strong>01</strong>
                                    <p>Raciocínio Lógico</p>
                                </li>
                                <li>
                                    <strong>02</strong>
                                    <p>Habilidades motoras finas</p>
                                </li>
                                <li>
                                    <strong>03</strong>
                                    <p>Memória</p>
                                </li>
                                <li>
                                    <strong>04</strong>
                                    <p>Reconhecimento de objetos</p>
                                </li>
                                <li>
                                    <strong>05</strong>
                                    <p>personalização das Imagens</p>
                                </li>

                                <li className="download"><a onClick={handleOpenNewTransactionModalRitimo}>Download</a></li>
                            </ul>
                        </div>
                    </div>
                    <Financiadores id="financiadores" data-anime="scroll">
                    <h2>Financiadores</h2>
                    
                    <ul>
                        <li>
                            <Image src={Ufpa} alt="" />
                        </li>
                        <li>
                            <Image src={Cnpq} alt="" />
                        </li>
                        <li>
                            <Image src={Capes} alt="" />
                        </li>
                        <li>
                            <Image src={Fapespa} alt="" />
                        </li>
                    </ul>
                </Financiadores>
                </Main>
                <Contato>
                    <div>
                        <h4>Contato</h4>
                        <ul>
                            <li>jogosadaptaveis@gmail.com</li>
                        </ul>
                    </div>
                </Contato>
                <Footer>
                    <p>Projeto de jogos adaptaveis 2021 -  Todos os deritos reservados</p>
                </Footer>
            </Container>
        
            <ModalDownload
                isOpen={isNewTransactionModalOpen} 
                isOpenRitimo={isNewTransactionModalOpenRitimo}
                OnRequestClose={handleCloseNewTransactionModal}
                OnRequestCloseRitimo={handleCloseNewTransactionModalRitimo}
            />
        </>
    )
}


