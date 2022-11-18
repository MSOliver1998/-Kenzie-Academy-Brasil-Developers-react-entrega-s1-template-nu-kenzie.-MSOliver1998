import './list.css'
import noCards from '../../img/NoCard.svg'
import {Card} from '../Card/card'

function List({transations,setTransations,filtro,setFiltro}){
    if(transations.length>0){
        return(
            <div className='list'>
                {
                    filtro ? 
                    filtro.map((el,index)=><Card key={index} filtro={filtro} transations={transations} setTransations={setTransations} setFiltro={setFiltro} item={el}></Card>)
                    : 
                    transations.map((el,index)=><Card key={index} transations={transations} setTransations={setTransations} item={el}></Card>)
                }
            </div>
        )
    }
    else{
        return(
            <div className='list'>
                <h2>Vocêainda não possui nenhum lançamento</h2>
                <img src={noCards} alt="" />
            </div>
        )
    }
}

export{List}