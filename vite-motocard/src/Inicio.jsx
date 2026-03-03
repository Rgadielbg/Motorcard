import './Inicio.css'
import Carro1 from './assets/carro1.png';
import Ducati from './assets/ducati.png';





function Inicio() {
    return (

        <>
            <div className='inicioDiv'>
                <h2>En MotoCard siempre lo mejor</h2>
            </div>
            <TarjetaComponent />
            <TarjetaComponent2 />


            
        </>

    )

}

function TarjetaComponent() {
  return (
    <>
   
    <div className='TarjetaDiv'>
      <img src={Carro1} alt='Ferrari' />
      <h3>Ferrari 812 GTS: vuelve el V12 Spider</h3>
      <p>Sus 800 cv lo convierten en el descapotable de producción en serie con más potencia del mercado </p>

    </div>
    </>
  );
}
function TarjetaComponent2() {
  return(
    <>
    <div className='TarjetaDiv'>
      <img   src={Ducati} alt='Ducati' />
      <h3>Ducati Streetfighter V4: la naked más potente de la historia</h3>
      <p>Con 208 cv, es la moto de serie más potente jamás fabricada por Ducati</p>
      </div>
    </>
  )
} 

export default Inicio