import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Forms from './elements/Form';
import { Container } from 'react-bootstrap';
import './index.css';
import Cards from './elements/Card';
import { listaCitas } from './elements/ListaCitas';
import { useState } from 'react';
import { ListadoCitas } from './elements/ListaCitas';


function App() {
  const [listaCitas, setListaCitas] = useState([])

  return(
    <div>
      <header><h1>ADMINISTRADOR DE PACIENTES</h1></header>
      <main>
        <div className="row col-12">
            <div className="col-md-3"></div>
            <div className="col-md-3">
            <h1>CREAR MI CITA</h1>
            <Forms setListaCitas={setListaCitas}

            />
            </div>
            <div className="col-md-3">
              <h1>ADMINISTRA TUS CITAS</h1>
              <ListadoCitas
                 listaCitas={listaCitas}
                 setListaCitas={setListaCitas}
              />

            </div>
            <div className="col-md-3"></div>
          </div>
      </main>
      <footer></footer>
         
    </div>
  )
}

export default App;

