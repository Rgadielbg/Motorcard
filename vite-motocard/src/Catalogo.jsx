import './Catalogo.css';

const carros = [
    {
        nombre: 'Toyota Corolla',
        descripcion: 'Sedán compacto confiable y eficiente en consumo de combustible.',
        img: 'https://via.placeholder.com/200x120?text=Corolla'
    },
    {
        nombre: 'Honda Civic',
        descripcion: 'Clásico compacto con buena reputación y estilo moderno.',
        img: 'https://via.placeholder.com/200x120?text=Civic'
    },
    {
        nombre: 'Ford Mustang',
        descripcion: 'Deportivo icónico con motor potente y diseño agresivo.',
        img: 'https://via.placeholder.com/200x120?text=Mustang'
    }
];

const motos = [
    {
        nombre: 'Yamaha YZF-R3',
        descripcion: 'Deportiva ligera ideal para principiantes y paseos urbanos.',
        img: 'https://via.placeholder.com/200x120?text=Yamaha+R3'
    },
    {
        nombre: 'Kawasaki Ninja 400',
        descripcion: 'Motocicleta supersport de media cilindrada, ágil y rápida.',
        img: 'https://via.placeholder.com/200x120?text=Ninja+400'
    },
    {
        nombre: 'Harley-Davidson Iron 883',
        descripcion: 'Cruiser clásico con estilo americano y motor V-twin.',
        img: 'https://via.placeholder.com/200x120?text=Iron+883'
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