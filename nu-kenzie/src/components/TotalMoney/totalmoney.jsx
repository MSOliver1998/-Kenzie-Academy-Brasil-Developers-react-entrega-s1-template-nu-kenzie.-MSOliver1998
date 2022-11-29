import total from  './totalmoney.module.css'

function TotalMoney({transations}){
    const Total=transations.map(transation=>Number(transation.value)).reduce((currentValue,previusValue)=>previusValue+currentValue,0)
    return(
        <div>
            <div className={total.valor}>
                <h2>Valor Total</h2>
                <p>R$: {Total.toFixed(2)}</p>
            </div>
            <p>Valor referente ao seu saldo</p>
        </div>
    )
}

export {TotalMoney}