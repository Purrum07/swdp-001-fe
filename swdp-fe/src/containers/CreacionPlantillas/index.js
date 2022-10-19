import Col from 'react-bootstrap/Col';
import { FaFile } from 'react-icons/fa';
import React, { Fragment, useState, useEffect } from "react";
import Stack from 'react-bootstrap/Stack';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import CanvasPlantilla from "../../components/CanvasPlantilla";
import PlantillasService from "../../services/PlantillasService";

/*
* Contenedor para VisualizadorEtiquetas
*/

function CreacionPlantillas() {
    /*
    * Renderiza el contenendor.
    * @return {string} - HTML markup para el contenedor.
    */
    
    const [plantillas, setPlantilla] = useState([{}]);
         
    useEffect(() => {
        /*
        PlantillasService.getAll()
            .then( response => {
                setPlantilla(response);
            })
        */
        setPlantilla([{nombreArchivo: "plantilla2.xlm", tamanio: "300x100", nombreProducto: "Motor Bonfiglioli o yo k se", codigoBarras: "afawgaarbtwrbawbna", cantidadPzas: 4},
                      {nombreArchivo: "plantilla3.xlm", tamanio: "640x220", nombreProducto: "Reductor Perron", codigoBarras: "obnaohtnfsobtoapajrandw", cantidadPzas: 5}]);
    });
    
    let htmlsPlan = [];
    for(let i = 0; i < plantillas.length; i++){
        htmlsPlan.push(<CanvasPlantilla plantilla={plantillas[i]}/>);
    }
    
    return (
        <Fragment>
        <Stack direction='vertical' gap='3'>
            <Container fluid className="col-md-12">
                <h1>Plantillas</h1>
            </Container>
            <Container fluid>
                <Stack direction='horizontal' gap={3} className="col-md-12 mx-auto">
                    <Button>
                    <NavLink to="/CrearPlantilla" className="text-light rounded " activeclassname="active">
                        <FaFile className="me-2"/> 
                        Crear Plantilla
                    </NavLink>
                    </Button> 
                </Stack>
            </Container>
            <Container fluid>
                <Stack direction='vertical' gap={3} className="col-md-12">
                    {htmlsPlan}
                </Stack>
            </Container>
        </Stack>
        </Fragment>
    );
}

export default CreacionPlantillas;