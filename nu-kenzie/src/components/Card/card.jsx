import './card.css'
//import trash from '../../img/trash.svg'
import {FaTrash} from 'react-icons/fa'

function Card({item,transations,setTransations,filtro,setFiltro}){

    function deletarTransations(){
        const indexTransations=transations.indexOf(item)
        if(filtro){
            const indexFiltro=filtro.indexOf(item)
            setFiltro((oldFiltro)=>oldFiltro.filter((el,index)=>index!==indexFiltro))
        }
        setTransations((oldTransitions)=>oldTransitions.filter((el,index)=>index!==indexTransations))
    }

    return(
        <div className={`card ${item.type}`} id={item.id}>
            <div>
                <h2>{item.description}</h2>
                <p>R$: {item.type==='entrada'? Number(item.value).toFixed(2) : Number(item.value*-1).toFixed(2)}</p>
                <FaTrash id='lixo' onClick={deletarTransations}></FaTrash>
            </div>
            <p>{item.type}</p>
        </div>
    )
}

export {Card}