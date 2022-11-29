import {useState} from 'react'
import { Home } from './pages/home/home.jsx'
import {Login } from './pages/Login/Login.jsx'


function App() {

  const [login,setLogin]=useState(false)
    
  if(!login){
      return <Login setLogin={setLogin}></Login>
  }
  else{
      return <Home setLogin={setLogin}></Home>
  }

}

export default App;
