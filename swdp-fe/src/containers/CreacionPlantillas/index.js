import Col from 'react-bootstrap/Col';
import { FaFile } from 'react-icons/fa';
import React, { Fragment, useState, useEffect } from "react";
import Stack from 'react-bootstrap/Stack';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import CanvasPlantilla from "../../components/CanvasPlantilla";
import PlantillasService from "../../services/PlantillasService";
import crearImagen from "../../utilities/CrearImagen";

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
        const ps = new PlantillasService();
        ps.getAll()
            .then( response => {
                console.log(response.data.data[0].svg);
                for(let i = 0; i < plantillas.length; i++){
                    var contenido_svg = response.data.data[i].svg;
                    response.data.data[i].svg = crearImagen(contenido_svg);
                } 
                setPlantilla(response.data.data);
                console.log(response.data.data[0].svg);
            });
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