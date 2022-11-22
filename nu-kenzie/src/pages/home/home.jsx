import './home.css'
import imagem from '../../img/illustration.svg'
import {useState} from 'react'
import {Logo} from '../../components/logo/logo'
import {Form} from '../../components/Form/Form'
import {List} from '../../components/List/list'
import {TotalMoney} from '../../components/TotalMoney/totalmoney'
import {Button} from '../../components/Button/Button'

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
        
        let texto=(event.target.innerText).toLowerCase()
        let nav=(event.target.parentElement).childNodes
        nav.forEach(el=>{
            el.classList.remove('select')
        })

        if(texto==='entradas'){
            setFiltro([{ id:0, description: "", type: "entrada", value: 0 },...listTransactions.filter(el=>el.type==='entrada')])
            event.target.className='select'
        }
        if(texto==='saídas'){
            setFiltro( [{ id:0, description: "", type: "saída", value: 0 },...listTransactions.filter(el=>el.type==='saída')])
            event.target.className='select'
        }
        if(texto==='todos'){
            setFiltro()
            event.target.className='select'
        }
    }


    function darkMode(event){
        event.target.innerText==='Dark'? event.target.innerText='Ligth' : event.target.innerText='Dark'
        let body=document.querySelector('body')
        body.classList.toggle('darkMode')
    }

    if(login){
        return(
            <div className="home">
                <header className='dark-d'>
                    <Button onClick={darkMode}>Ligth</Button>
                </header>
                <main>
                    <div className="esquerda center">
                        <Logo></Logo>
                        <h2>
                            Centralize o controle das suas finanças
                        </h2>
                        <p>de forma rápida e segura</p>
                        <Button onClick={logarDeslogar}>Iniciar</Button>
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
                    <div className='menu'>
                        <Button onClick={logarDeslogar}>Home</Button>
                        <Button onClick={darkMode}>Ligth</Button>
                    </div>
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
                                <Button className='select' onClick={filtrar}>Todos</Button>
                                <Button onClick={filtrar}>Entradas</Button>
                                <Button onClick={filtrar}>Saídas</Button>
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