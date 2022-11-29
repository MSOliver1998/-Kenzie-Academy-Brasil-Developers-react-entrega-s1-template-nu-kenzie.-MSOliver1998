import home from './home.module.css'
import { useState } from "react"
import { Button, ButtonDarkMode } from "../../components/Button/Button"
import { Form } from "../../components/Form/Form"
import { List } from "../../components/List/list"
import { Logo } from "../../components/logo/logo"
import { TotalMoney } from "../../components/TotalMoney/totalmoney"

function Home({setLogin}){

    function logarDeslogar(){
        setLogin((oldLogin)=>!oldLogin)
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

    return(

        <div className={home.home}>
                <header>
                    <Logo></Logo>
                    <div className={home.menu}>
                        <Button onClick={logarDeslogar}>Home</Button>
                        <ButtonDarkMode></ButtonDarkMode>
                    </div>
                </header>
                <main>
                    <div className={home.esquerda}>
                        <Form transations={listTransactions} setTransations={setListTransactions} filtro={listFiltro} setFiltro={setFiltro}></Form>
                        <TotalMoney transations={listTransactions}></TotalMoney>
                    </div>
                    <div className={home.direita}>
                        <div className={home.header}>
                            <p>Resumo financeiro</p>
                            <nav>
                                <Button className='select' onClick={filtrar}>Todos</Button>
                                <Button onClick={filtrar}>Entradas</Button>
                                <Button onClick={filtrar}>Saídas</Button>
                            </nav>
                        </div>
                        <div className={home.lancamentos}>
                            <List transations={listTransactions} setTransations={setListTransactions} filtro={listFiltro} setFiltro={setFiltro} ></List>
                        </div>
                    </div>
                </main>
            </div>
    )
}

export {Home}