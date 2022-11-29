import login from '../Login/Login.module.css'
import imagem from '../../img/illustration.svg'
import {Button, ButtonDarkMode} from '../../components/Button/Button'
import {Logo} from '../../components/logo/logo'

function Login({setLogin}){

    function logarDeslogar(){
        setLogin((oldLogin)=>!oldLogin)
    }

    return(
        <div className={login.home} >
                <header>
                    <div className={login.darkB}>
                        <ButtonDarkMode></ButtonDarkMode>
                    </div>
                </header>
                <main>
                    <div className={login.esquerda}>
                        <Logo></Logo>
                        <h2>
                            Centralize o controle das suas finanças
                        </h2>
                        <p>de forma rápida e segura</p>
                        <Button onClick={logarDeslogar}>Iniciar</Button>
                    </div>
                    <div className={login.direita}>
                        <img src={imagem} alt="" />
                    </div>
                </main>
            </div>
    )
}

export {Login}