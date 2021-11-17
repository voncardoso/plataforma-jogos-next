import Image from 'next/image'
import { Container} from "./loginStyle";
import IlustracaoLogin from "../../public/assets/IlustracaoLogin.png"


export default function Login() {
    return(
        <>
        <Container>
            <div className="Login">
            <h2>Faça o login na sua conta</h2>
                <strong>Usuário</strong>
                <input type="text" />

                <strong>Senha</strong>
                <input type="password" />

                    <div className="ExtrasLogin">
                        <div>
                            <input type="checkbox" />
                            <label >Lembre-me</label>
                        </div>
                        <a>Esqueceu a senha</a>
                    </div>

                    <button>Login</button>
                    
            </div>

            <div className="Ilustracao">
                <Image src={IlustracaoLogin} alt="" />
            </div>                

        </Container>
    </>
    )
}