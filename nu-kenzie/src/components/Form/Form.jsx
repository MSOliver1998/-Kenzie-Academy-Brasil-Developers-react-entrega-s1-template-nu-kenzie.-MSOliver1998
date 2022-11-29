import form from './form.module.css'
import {Button} from '../Button/Button.jsx'

function Form({transations,setTransations,filtro,setFiltro}){
    const id=transations.length-1
    function dataForm(event){
        event.preventDefault()
        const dataForm=[...event.target.elements]
        const data={}
        dataForm.forEach(el=>{
            if((el.tagName==='INPUT' || el.tagName==='SELECT') && el.value !==''){
                data[el.id]=el.value
                el.value=''
            }
            data['id']=id>0 ? (transations[id].id)+1 : 0
        })
        if(data.type==='saída'){
            data.value=Number(data.value)*-1
        }
        if(filtro){
            if(filtro.length>0){
                if(filtro[0].type===data.type){
                    setFiltro((oldFiltro)=>[...oldFiltro,data])
                }
            }
        }
        setTransations((oldTransations)=>[...oldTransations,data]) 
    }
    return(
        <form onSubmit={dataForm}>
            <div className='description'>
                <label htmlFor="description">Descrição</label>
                <input placeholder='descrição' required type="text" id='description'/>
                <label htmlFor="" aria-disabled>Ex: Compra de roupas</label>
            </div>
            <div className={form.value}>
                <div>
                    <label htmlFor="value">Valor</label>
                    <div id={form.valor}> 
                        <p>R$:</p>
                        <input placeholder='valor' required={true} type="number" min={0} id='value'/>
                    </div>
                </div>
                <div>
                    <label htmlFor="type">Tipo de valor</label> 
                    <select name="" required={true} id="type">
                        <option value="">Selecionar</option>
                        <option value="entrada">Entrada</option>
                        <option value="saída">Saída</option>
                    </select>
                </div>
            </div>
            <Button>Inserir valor</Button>
        </form>
    )
}

export {Form}