import './totalmoney.css'

function TotalMoney({transations}){
    let total=transations.map(el=>Number(el.value)).reduce((cv,pv)=>pv+cv,0)
    return(
        <div className='total'>
            <div className="valor">
                <h2>Valor Total</h2>
                <p>R$: {total.toFixed(2)}</p>
            </div>
            <p>Valor referente ao seu saldo</p>
        </div>
    )
}

export {TotalMoney}