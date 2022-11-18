import './card.css'
import trash from '../../img/trash.svg'
//import trashWhite from '../../img/trash.white.svg'

function Card({item,transations,setTransations,filtro,setFiltro}){
    return(
        <div className={`card ${item.type}`} id={item.id}>
            <div>
                <h2>{item.description}</h2>
                <p>R$: {item.type==='entrada'? item.value : item.value*-1.}</p>
                <img id='lixo' src={trash} alt="" onClick={()=>{
                        let index=transations.indexOf(item)
                        if(filtro){
                            let indexFiltro=filtro.indexOf(item)
                            filtro.splice(indexFiltro,1)
                            setFiltro([...filtro])
                        }
                        transations.splice(index,1)
                        setTransations([...transations])
                    }
                }/>
            </div>
            <p>{item.type}</p>
        </div>
    )
}

export {Card}