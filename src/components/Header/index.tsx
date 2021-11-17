import Link from 'next/link'
import { Conatent } from "./style";
import {initMenuMobile} from "./script";
import {initScrollSuave} from "./script";



export function Header(){
   
    return(
        
        <Conatent>
            <div className="divSecundaria"></div>   
            <button className="ButtonMobile" onClick={initMenuMobile}></button>
                <ul className="List">
                    <li><a onClick={initScrollSuave} className="nav"  href="#home">Home</a></li>
                    <li><a onClick={initScrollSuave}  className="nav"  href="#jogos">Jogos</a></li>
                    <li><a onClick={initScrollSuave} className="nav"  href="#financiadores">Financiadorres</a></li>
                    <li><Link   href="/Login">Login</Link></li>
                </ul> 


                <ul className="ListMobile" >
                    <li><a onClick={initMenuMobile} className="nav"  href="#home">Home</a></li>
                    <li><a onClick={initMenuMobile}  className="nav"  href="#jogos">Jogos</a></li>
                    <li><a onClick={initMenuMobile} className="nav"  href="#financiadores">Financiadorres</a></li>
                    <li><Link   href="/Login">Login</Link></li>
                </ul> 
                      
        </Conatent> 
    );
}