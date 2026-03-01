import React from 'react'
import './Encabezado.css'
import Logo from './assets/logo.png'

function Encabezado({ cambiarVista }) {
    return (
        <div className='encabezadoDiv'>
            <h1>MotorCard</h1>
            <Logotipo />
            <Menu cambiarVista={cambiarVista} />
        </div>
    )
}

function Logotipo() {
    return (
        <div className='logotipoDiv'>
            <img src="{Logo}" alt="Logotipo" />

        </div>

    )
}

function Menu({ cambiarVista }) {
    return (
        <div className='menuDiv'>

            <ul>
                <li onClick={()=> cambiarVista("Inicio")}>Inicio</li>
                <li onClick={()=> cambiarVista("Catalogo")}>Catálogo</li>
                <li onClick={()=> cambiarVista("Sucursales")}>Sucursales</li>
                
            </ul>

        </div>
    )
}

            export default Encabezado