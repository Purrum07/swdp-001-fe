import React, { useState , useEffect } from "react";
import ActualizarPlantilla from "../../components/ActualizarPlantilla";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

/*
* Contenedor para ActualizarPlantilla
*/

function ModificarPlantillas() {
    /*
    * Renderiza el contenendor.
    * @return {string} - HTML markup para el contenedor.
    */

    const [atributosPlantilla, setAtributosPlantilla] = useState({});
    
    useEffect(() => {

        let atributos = {
            nombre: "",
            descripcion: false,
            codigoBarras: false,
            fecha: false,
            cliente: false,
            ordenCompra: false,
            codigoInterno: false,
            proveedor: false,
            tamano: ""
        };

        console.log(atributos);

        atributos.nombre = "Prueba 1"
        atributos.descripcion = true;
        atributos.codigoBarras = true;
        atributos.fecha = true;
        atributos.cliente = true;
        atributos.ordenCompra = true;
        atributos.codigoInterno = true;
        atributos.proveedor = true;
        atributos.tamano = "150 x 150";

        console.log(atributos);

        setAtributosPlantilla(atributos);
    }, []);

    return (
        <ActualizarPlantilla atribPlantilla={atributosPlantilla}/>
    );
};

export default ModificarPlantillas;