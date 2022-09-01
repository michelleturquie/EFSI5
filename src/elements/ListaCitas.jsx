import React from "react";
import Cards from "./Card";

export function ListadoCitas({listaCitas, setListaCitas}) {
    return (
        listaCitas.map((cita, i) => 
        <Cards
        i={i}
        listaCitas={listaCitas}
        setListaCitas={setListaCitas}
            {...cita}

            key={i}
         /> )
     )
        
};