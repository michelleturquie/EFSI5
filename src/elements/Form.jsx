import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import { Alert } from 'react-bootstrap';

export default function Forms({ setListaCitas }) {

    const [mascota, setMascota] = useState("");
    const [dueno, setDueno] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [sintomas, setSintomas] = useState("")

    const Enviar = (e) => {
        if (!mascota || !dueno || !fecha || !hora || !sintomas) {
            console.log("Ingresar todos los datos")
        } else {
            e.preventDefault();
            setListaCitas(prev => [...prev, {
                mascota,
                dueno,
                fecha,
                hora,
                sintomas
            }])
            setMascota("");
            setDueno("");
            setFecha("");
            setHora("");
            setSintomas("");
        }
       
    }

    return (
        <Form>
            <Form.Label className="label">Nombre Mascota</Form.Label>
            <Form.Control type="text" placeholder="Nombre Mascota" required name="mascota" value={mascota} onChange={e => setMascota(e.target.value)} />
        
            <Form.Label className="label margen">Nombre Dueño</Form.Label>
            <Form.Control type="text" placeholder="Nombre dueño de la mascota" required name="dueno" value={dueno} onChange={e => setDueno(e.target.value)} />

            <Form.Label className="label margen">Fecha</Form.Label>
            <Form.Control type="date" name="fecha" required value={fecha} onChange={e => setFecha(e.target.value)} />

            <Form.Label className="label margen">Hora</Form.Label>
            <Form.Control type="time" name="hora" required value={hora} onChange={e => setHora(e.target.value)} />

            <Form.Label className="label margen">Sintomas</Form.Label>
            <Form.Control type="text" name="sintomas" required value={sintomas} onChange={e => setSintomas(e.target.value)} />

            <div className="d-grid pt-4 boton">
                <Button variant="primary" type="submit" size="lg" onClick={(Enviar)} >
                    AGREGAR CITA
                </Button>
            </div>
        </Form>
    );
}
