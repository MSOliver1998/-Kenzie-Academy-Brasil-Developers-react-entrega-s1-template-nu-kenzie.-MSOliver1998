import './list.css'

function Card({transaction}){
    return(
        <div>
            <h2>{transaction}</h2>
        </div>
    )
}

function List(prop){

    prop.map((transaction, index) => <Card transaction={transaction} key={index} />)

}

export{List}