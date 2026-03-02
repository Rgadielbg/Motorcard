import './Inicio.css'
import Carro1 from './assets/carro1.png';





function Inicio() {
    return (

        <>
            <div className='inicioDiv'>
                <h2>En MotorCard siempre lo mejor</h2>
            </div>
            <TarjetaComponent />
             <TarjetaComponent />
              <TarjetaComponent />


            
        </>

    )

}

function TarjetaComponent() {
  return (
    <>
   
    <div className='TarjetaDiv'>
      <img src={Carro1} alt='Logotipo' />
      <h3>Ferrari 812 GTS: vuelve el V12 Spider</h3>
      <p>Sus 800 cv lo convierten en el descapotable de producción en serie con más potencia del mercado </p>

    </div>
    </>
  );
}


export default Inicio