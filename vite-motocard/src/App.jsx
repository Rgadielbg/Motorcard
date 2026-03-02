import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Encabezado from './Encabezado'
import Tarjetas from './Tarjetas'
import Catalogo from './Catalogo'
import Inicio from './Inicio' 
import Sucursales from './Sucursales'

function App() {
  const [vista, setVista] = useState("Inicio");

  return(
    <div>
      <Encabezado cambiarVista={setVista} />
       <Tarjetas vista={vista}/>
       {vista === "Catalogo" && <Catalogo/>}
        {vista === "Inicio" && <Inicio/>}
        {vista === "Sucursales" && <Sucursales/>}
    </div>


  )

}

export default App
