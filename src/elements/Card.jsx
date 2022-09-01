import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function Cards({listaCitas, setListaCitas, ...props}) {

    const Eliminar = (i) =>{
        const citaABorrar = [...listaCitas];
        citaABorrar.splice(i, 1)
        setListaCitas(citaABorrar)
    }
    return (
        <div className='mb-2'>
            <div className="card">
                <p><b>Mascota: </b>{props.mascota}</p>
                <p><b>Dueno: </b>{props.dueno}</p>
                <p><b>Fecha: </b>{props.fecha}</p>
                <p><b>Hora: </b>{props.hora}</p>
                <p><b>Sintomas: </b>{props.sintomas}</p>
                <Button variant="outline-dark" onClick={() => Eliminar(props.i)}>ELIMINAR</Button>
            </div>
        </div>

    )
}

