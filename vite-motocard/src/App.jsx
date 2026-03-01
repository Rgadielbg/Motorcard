import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Encabezado from './Encabezado'

function App() {
  const [vista, setVista] = useState("Inicio");

  return(
    <div>
      <Encabezado cambiarVista={setVista} />
      
    </div>


  )

}

export default App
