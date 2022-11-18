import './home.css'
import imagem from '../../img/illustration.svg'
import noCard from '../../img/NoCard.svg'
import {useState} from 'react'
import {Logo} from '../../components/logo/logo'
import {Form} from '../../components/Form/Form'

function Home(logado){

    const [login,setLogin]=useState(logado)

    const [listTransactions,setListTransactions]=useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: -150 }
    ])

    function logarDeslogar(){
        setLogin(!login)
    }

    if(login){
        return(
            <div className="home">
                <main>
                    <div className="esquerda">
                        <Logo></Logo>
                        <h2>
                            Centralize o controle das suas finanças
                        </h2>
                        <p>de forma rápida e segura</p>
                        <button onClick={logarDeslogar}>Iniciar</button>
                    </div>
                    <div className="direita">
                        <img src={imagem} alt="" />
                    </div>
                </main>
            </div>
        )
    }
    else{
        return(
            <div className='home'>
                <header>
                    <Logo></Logo>
                    <button onClick={logarDeslogar}>Home</button>
                </header>
                <main>
                    <div className="esquerda">
                        <Form state={useState} transations={listTransactions} set={setListTransactions}></Form>
                    </div>
                    <div className='direita'>
                        <div className='header'>
                            <p>Resumo financeiro</p>
                            <nav>
                                <button>todos</button>
                                <button>entradas</button>
                                <button>saida</button>
                            </nav>
                        </div>
                        <div className='lancamentos'>
                            <h2>Você ainda não possui nenhum lançamento</h2>
                            <img src={noCard} alt="" />
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export {Home}