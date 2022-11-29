import './button.css'

function Button({className,id,onClick,children}){
    return(
        <button className={className} id={id} onClick={onClick}>{children}</button>
    )
}

function ButtonDarkMode(){

    const body=document.querySelector('body')
    const DarkMode=[...body.classList].includes('darkMode')

    function darkMode(event){
        
        event.target.innerText==='Dark'? event.target.innerText='Ligth' : event.target.innerText='Dark'
        body.classList.toggle('darkMode')
    }
    return(
        <Button onClick={darkMode}>{!DarkMode ? 'Ligth' : 'Dark'}</Button>
    )
}

export {Button,ButtonDarkMode}