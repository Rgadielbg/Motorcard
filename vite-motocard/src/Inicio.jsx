import './Inicio.css'
import Carro1 from './assets/carro1.png';





function Inicio() {
    return (

        <>
            <div className='inicioDiv'>
                <h2>En MotorCard siempre lo mejor</h2>
            </div>
            <TarjetaComponent />


            
        </>

    )

}

function TarjetaComponent() {
  return (
    <>
   
    <div className='TarjetaDiv'>
      <img src={Carro1} alt='Logotipo' />
      <h3>Coca-Cola</h3>
      <p>Hola, A ver si me quiere salir este </p>

    </div>
    </>
  );
}


export default Inicio