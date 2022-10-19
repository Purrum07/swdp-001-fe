import React from 'react';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FaEraser,FaHandMiddleFinger  } from 'react-icons/fa';
import { Row } from 'react-bootstrap';

function CanvasPlantilla(props) {
    return(
        <Container fluid className='border '>
        <Row>
            <Col className='col-md-10 justify-contents'>
                <Stack direction='vertical' gap={1} className="col-md-12">
                    <div className='titulo-plantilla'>
                        <h3>
                            {props.plantilla.nombreArchivo}.xml
                        </h3>
                    </div>
                    <div className='informacion-plantilla'>
                        <Stack direction='vertical' gap={2} className="">
                            <div>
                                Tamanio: {props.plantilla.tamanio} px
                            </div>
                            <div>
                                Nombre Producto: {props.plantilla.description}
                            </div>
                            <div>
                                Clave Producto: {props.plantilla.id}
                            </div>
                            <div>
                                Orden de Compra: {props.plantilla.purchase_order}
                            </div>
                            <div>
                                Cantidad-Pzas: {props.plantilla.quantity}
                            </div>
                            <div>
                                Proveedor: {props.plantilla.supplier}
                            </div>
                            <div>
                                Codigo-Barras: {props.plantilla.svg}
                            </div>
                        </Stack>
                    </div>
                </Stack>
            </Col>
            <Col className='justify-content col-md-2'>
                <Stack direction='vertical' gap={2} className='col-md-12'>
                    <Button className='invisible'>
                    </Button>
                    <Button>
                        <FaEraser className="me-2"/> Eliminar
                    </Button>
                    <Button>
                        <FaHandMiddleFinger className="me-2"/> Editar
                    </Button>
                </Stack>
            </Col>
        </Row>
        </Container>
    );
}

export default CanvasPlantilla;