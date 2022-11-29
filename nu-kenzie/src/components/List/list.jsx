import list from './list.module.css'
import noCards from '../../img/NoCard.svg'
import {Card} from '../Card/card'

function List({transations,setTransations,filtro,setFiltro}){
    if(transations.length>0){
        return(
            <div className={list.list}>
                {
                    filtro ?   

                    filtro.length>1 ? 
                    
                        filtro.map((el,index)=>{
                            if(index>0){
                                return(<Card key={index} filtro={filtro} transations={transations} setTransations={setTransations} setFiltro={setFiltro} item={el}></Card>)
                            }
                        })
                        :
                        (
                            <div className={list.list}>
                                <h2>Você ainda não possui nenhum lançamento</h2>
                                <img src={noCards} alt="" />
                            </div>
                        )
                    : 
                    transations.map((el,index)=><Card key={index} transations={transations} setTransations={setTransations} item={el}></Card>)
                }
            </div>
        )
    }
    else{
        return(
            <div className={list.list}>
                <h2>Você ainda não possui nenhum lançamento</h2>
                <img src={noCards} alt="" />
            </div>
        )
    }
}

export{List}