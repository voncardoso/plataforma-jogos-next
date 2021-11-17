import  Modal  from "react-modal"; 
import  Modal1  from "react-modal"; 
import { AiFillAndroid } from "react-icons/ai";
import { IconContext } from "react-icons";
import {StyleModal} from'./style';


interface NewTransactionModal{
    isOpen: boolean,
    isOpenRitimo: boolean,
    OnRequestClose: () => void;
    OnRequestCloseRitimo: () => void;

}


export function ModalDownload({isOpen,OnRequestClose, isOpenRitimo, OnRequestCloseRitimo}: NewTransactionModal){


        const URLQuebraCabeca = "https://docs.google.com/uc?export=download&id=1N8UYA05BwNhiKRTXnvrvefuWOZZYXkGh"
        const URLRitimomania = "https://docs.google.com/uc?export=download&id=1Bo3_1UKDMQi5dGemFEFp9wr9mATaMDAf"
   

   
    return(
        <>
        
            
        <Modal 
        isOpen={isOpen}
        onRequestClose={OnRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <StyleModal>
        <strong>Donwload</strong>
        <a className="ButtonQuebraCabeca" href={URLQuebraCabeca }>
            Android
            <IconContext.Provider value={{className: 'buttonAndroid'}}>
                <AiFillAndroid/>
            </IconContext.Provider>

        </a>   
        </StyleModal>
    </Modal>

        
    <Modal1 
        isOpen={isOpenRitimo}
        onRequestClose={OnRequestCloseRitimo}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <StyleModal>
        <strong>Donwload</strong>
        <a href={URLRitimomania}>
            Android
            <IconContext.Provider value={{className: 'buttonAndroid'}}>
                <AiFillAndroid/>
            </IconContext.Provider>

        </a>  
        
        </StyleModal>
    </Modal1>    
    </>
    );
}