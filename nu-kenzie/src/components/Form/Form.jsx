import './form.css'

function Form({transations,setTransations,filtro,setFiltro}){
    let id=transations.length-1
    function dataForm(event){
        event.preventDefault()
        let dataForm=[...event.target.elements]
         let data={}
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
                    setFiltro([...filtro,data])
                }
            }
        }
        setTransations([...transations,data]) 
    }
    return(
        <form onSubmit={dataForm}>
            <div className='description'>
                <label htmlFor="">Descrição</label>
                <input placeholder='descrição' required type="text" id='description'/>
                <label htmlFor="" aria-disabled>Ex: Compra de roupas</label>
            </div>
            <div className='value'>
                <div>
                    <label htmlFor="">Valor</label>
                    <div id='valor'> 
                        <p>R$:</p>
                        <input placeholder='valor' required={true} type="number" min={0} id='value'/>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Tipo de valor</label> 
                    <select name="" required={true} id="type">
                        <option value="">Selecionar</option>
                        <option value="entrada">Entrada</option>
                        <option value="saída">Saída</option>
                    </select>
                </div>
            </div>
            <button>Inserir valor</button>
        </form>
    )
}

export {Form}