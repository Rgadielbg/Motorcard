

    function Tarjetas({ vista }) {
    const vistas={
        "Inicio": <Inicio/>,
        "Catalogo": <Catalogo/>,
        "Sucursales": <Sucursales/> 
    }
    return(
        <div className="ContenedorDiv">
            {vistas[vista]}
        </div>
    )
}   

function Inicio() {
return (
    <>
  
   </>
)
}
    function Catalogo() {
   return (
    <>
   
    </>
   )
}

function Sucursales() {

    return (
    <>

    </>
    )
}




export default Tarjetas 