import './home.css'
import imagem from '../../img/illustration.svg'
import {useState} from 'react'
import {Logo} from '../../components/logo/logo'
import {Form} from '../../components/Form/Form'
import {List} from '../../components/List/list'
import {TotalMoney} from '../../components/TotalMoney/totalmoney'

function Home(logado){

    const [login,setLogin]=useState(logado)
    
    function logarDeslogar(){
        setLogin(!login)
    }

    const [listTransactions,setListTransactions]=useState([
        { id:1, description: "Salário recebido", type: "entrada", value: 2500 },
        { id:2, description: "Conta de luz", type: "saída", value: -150 },
        { id:3, description: "Conta de luz", type: "saída", value: -150 },
        { id:4, description: "Salário recebido", type: "entrada", value: 2500 },
    ])
    
    const [listFiltro,setFiltro]=useState()
    function filtrar(event){
        
        let texto=event.target.innerText

        if(texto==='entradas'){
            setFiltro(listTransactions.filter(el=>el.type==='entrada'))
        }
        if(texto==='saídas'){
            setFiltro(listTransactions.filter(el=>el.type==='saída'))
        }
        if(texto==='todos'){
            setFiltro()
        }
    }

    if(login){
        return(
            <div className="home">
                <main>
                    <div className="esquerda center">
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
                        <Form transations={listTransactions} setTransations={setListTransactions} filtro={listFiltro} setFiltro={setFiltro}></Form>
                        <TotalMoney transations={listTransactions}></TotalMoney>
                    </div>
                    <div className='direita'>
                        <div className='header'>
                            <p>Resumo financeiro</p>
                            <nav>
                                <button onClick={filtrar}>todos</button>
                                <button onClick={filtrar}>entradas</button>
                                <button onClick={filtrar}>saídas</button>
                            </nav>
                        </div>
                        <div className='lancamentos'>
                            <List transations={listTransactions} setTransations={setListTransactions} filtro={listFiltro} setFiltro={setFiltro} ></List>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export {Home}