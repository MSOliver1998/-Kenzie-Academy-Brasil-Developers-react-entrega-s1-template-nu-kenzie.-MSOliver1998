import './form.css'

function Form({transations,set}){

    function dataForm(event){
        set({'nome':'noe','data':'12/07'})
        console.log(transations)
        event.preventDefault()
        let data={}
        let dataForm=[...event.target.parentElement]
        dataForm.forEach(el=>{
            if((el.tagName==='INPUT' || el.tagName==='SELECT') && el.value !==''){
                data[el.id]=el.value
            }
        })
    }
    return(
        <form action="">
            <div className='description'>
                <label htmlFor="">Descrição</label>
                <input placeholder='descrição' required={true} type="text" id='description'/>
                <label htmlFor="" aria-disabled>Ex: Compra de roupas</label>
            </div>
            <div className='value'>
                <div>
                    <label htmlFor="">Valor</label>
                    <div id='valor'> 
                        <p>R$:</p>
                        <input placeholder='valor' required={true} type="text" id='value'/>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Tipo de valor</label> 
                    <select name="" required={true} id="type">
                        <option value="">Selecionar</option>
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                    </select>
                </div>
            </div>
            <button onClick={dataForm}>Inserir valor</button>
        </form>
    )
}

export {Form}