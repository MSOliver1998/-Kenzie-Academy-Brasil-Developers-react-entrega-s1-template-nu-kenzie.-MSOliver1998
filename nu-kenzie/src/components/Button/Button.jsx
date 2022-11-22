import './button.css'

function Button({className,id,onClick,children}){
    return(
        <button className={className} id={id} onClick={onClick}>{children}</button>
    )
}

export {Button}