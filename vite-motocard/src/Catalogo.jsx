import './Catalogo.css';
import toyota from './assets/toyota.jpg';
import mustang from './assets/mustang.jpg';
import honda from './assets/honda.jpg';
import yamaha from './assets/yamaha.jpg';
import kawasaky from './assets/kawasaky.jpg';
import harley from './assets/harley.jpg';



const carros = [
    {
        nombre: 'Toyota Corolla',
        descripcion: 'Sedán compacto confiable y eficiente en consumo de combustible.',
        img: toyota 
    },
    {
        nombre: 'Honda Civic',
        descripcion: 'Clásico compacto con buena reputación y estilo moderno.',
        img: honda
    },
    {
        nombre: 'Ford Mustang',
        descripcion: 'Deportivo icónico con motor potente y diseño agresivo.',
        img: mustang
    }
];

const motos = [
    {
        nombre: 'Yamaha YZF-R3',
        descripcion: 'Deportiva ligera ideal para principiantes y paseos urbanos.',
        img: yamaha
    },
    {
        nombre: 'Kawasaki Ninja 400',
        descripcion: 'Motocicleta supersport de media cilindrada, ágil y rápida.',
        img: kawasaky
    },
    {
        nombre: 'Harley-Davidson Iron 883',
        descripcion: 'Cruiser clásico con estilo americano y motor V-twin.',
        img: harley
    }
];

function Catalogo() {
    return (
        <div className="catalogoDiv">
            <h2>Catálogo</h2>
            <h3>Este es el catálogo de motocicletas y automóviles</h3>

            <section>
                <h4>Carros</h4>
                <div className="cardGrid">
                    {carros.map((item) => (
                        <div key={item.nombre} className="card">
                            <img src={item.img} alt={item.nombre} />
                            <h5>{item.nombre}</h5>
                            <p>{item.descripcion}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h4>Motocicletas</h4>
                <div className="cardGrid">
                    {motos.map((item) => (
                        <div key={item.nombre} className="card">
                            <img src={item.img} alt={item.nombre} />
                            <h5>{item.nombre}</h5>
                            <p>{item.descripcion}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Catalogo;