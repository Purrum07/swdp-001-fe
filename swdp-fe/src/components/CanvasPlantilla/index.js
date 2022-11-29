import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillasService from '../../services/PlantillasService';
import { FaEraser, FaEdit } from 'react-icons/fa';
import { Row, Col, Container, Modal, Stack, Button, Form} from 'react-bootstrap';

function CanvasPlantilla(props) {
    let navigate = useNavigate(); 
    const routeChange = () => { 
        let path = `/ActualizarPlantilla`; 
        navigate(path, {state:{props: props}});
    }

    const [showBorrar, setShowBorrar] = useState(false);

    const handleCloseBorrar = () => setShowBorrar(false);
    const handleShowBorrar = () => setShowBorrar(true);
    
    const borrarPlantilla = () => {
        const ps = new PlantillasService();
        ps.delete(props.plantilla);
        window.location.reload();
    }

    return(
        <Container fluid className='border '>
        <Modal 
            show={showBorrar} 
            onHide={handleCloseBorrar} 
            backdrop="static"
            keyboard={false}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Confirmar Borrar Plantilla
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="col-md-12 mb-3">
                    <Col sm={12} md={12} lg={6} xl="auto">
                        <h5>Estás a Punto de borrar la plantilla:</h5>
                    </Col>
                    <Col sm={12} md={12} lg={6} xl="auto">
                        {props.plantilla.id}
                    </Col>
                </Row>
    
                <Row className="col-md-12 mb-3">
                    <Col sm={12} md={12} lg={6} xl="auto">
                        <h5>Con nombre: </h5>
                    </Col>
                    <Col sm={12} md={12} lg={6} xl="auto">
                        {props.plantilla.name}
                    </Col>
                </Row>

                <Row className="col-md-12 mb-3">
                    <Col sm={12} md={12} lg={12} xl="auto">
                        <h4>ESTA ACCIÓN NO ES REVERSIBLE </h4>
                    </Col>
                </Row>

                <Row className="col-md-12 mb-3">
                    <Col sm={12} md={12} lg={12} xl="auto">
                        <h5>Por favor confirma tu selección: </h5>
                    </Col>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Row className="col-md-12 col-sm-12">
                    <Col className="mb-1" xs={3} sm={3} md={3} lg={3}>
                        <Button 
                            className="col-md-12 col-sm-12 col-12 justify-contents" 
                            variant="danger" 
                            type="submit"
                            onClick={borrarPlantilla}
                        >
                            BORRAR
                        </Button>
                    </Col>
                    <Col className="mb-1" xs={9} sm={9} md={9} lg={9}>
                        <Button 
                            className="col-md-12 col-sm-12 col-12 justify-contents" 
                            variant="primary" 
                            onClick={handleCloseBorrar}
                        >
                            CANCELAR
                        </Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
        <Row className="mb-1">
            <Col className='col-md-10 justify-contents'>
                <Stack direction='vertical' gap={0} className="col-md-12">
                    <div className='titulo-plantilla'>
                    <br/>
                    <br/>
                            <h3>
                                {props.plantilla.name}
                            </h3>
                    </div>
                    <div className='informacion-plantilla'>
                        <Stack direction='vertical' gap={2} className="">
                            <Row className="col-12">
                                <Col xs={6} sm={6} md={6} lg={6}>
                                <hr/>
                                </Col>
                            </Row>
                            <Row className="col-12">
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    Tamaño: 
                                    <hr/>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    {props.plantilla.t_height} x {props.plantilla.t_width}
                                </Col>
                            </Row>
                            <Row className="col-12">
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    Cantidad Pzas: 
                                    <hr/>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <Form.Check 
                                        disabled
                                        type="switch"
                                        id="qtySwitch"
                                        checked={props.plantilla.quantity}
                                        />
                                </Col>
                            </Row>
                            <Row className="col-12">
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    Cliente: 
                                    <hr/>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <Form.Check 
                                        disabled
                                        type="switch"
                                        id="clientSwitch"
                                        checked={props.plantilla.client}
                                        />
                                </Col>
                            </Row>
                            <Row className="col-12">
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    Código de Barras: 
                                    <hr/>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <Form.Check 
                                        disabled
                                        type="switch"
                                        id="barcodeSwitch"
                                        checked={props.plantilla.barcode}
                                        />
                                </Col>
                            </Row>
                            <Row className="col-12">
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    Código Interno: 
                                    <hr/>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <Form.Check 
                                        disabled
                                        type="switch"
                                        id="incodeSwitch"
                                        checked={props.plantilla.internal_code}
                                        />
                                </Col>
                            </Row>
                            <Row className="col-12">
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    Descripción: 
                                    <hr/>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <Form.Check 
                                        disabled
                                        type="switch"
                                        id="descriptionSwitch"
                                        checked={props.plantilla.description}
                                        />
                                </Col>
                            </Row>
                            <Row className="col-12">
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    Fecha: 
                                    <hr/>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <Form.Check 
                                        disabled
                                        type="switch"
                                        id="dateSwitch"
                                        checked={props.plantilla.date}
                                        />
                                </Col>
                            </Row>
                            <Row className="col-12">
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    Orden de Compra: 
                                    <hr/>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <Form.Check 
                                        disabled
                                        type="switch"
                                        id="purchaseOrderSwitch"
                                        checked={props.plantilla.purchase_order}
                                        />
                                </Col>
                            </Row>
                            <Row className="col-12">
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    Proveedor: 
                                    <hr/>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6}>
                                    <Form.Check 
                                        disabled
                                        type="switch"
                                        id="supplierSwitch"
                                        checked={props.plantilla.supplier}
                                        />
                                </Col>
                            </Row>
                        </Stack>
                    </div>
                </Stack>
            </Col>
            <Col className='justify-content col-md-2'>
                <Stack direction='vertical' gap={2} className='col-md-12'>
                    <Button className='invisible'>
                    </Button>
                    <Button variant="outline-danger" onClick={handleShowBorrar}>
                        <FaEraser className="me-2"/> Eliminar
                    </Button>
                    <Button onClick={routeChange} variant="secondary">
                        <FaEdit className="me-2"/> Editar
                    </Button>
                </Stack>
            </Col>
        </Row>
        </Container>
    );
}

export default CanvasPlantilla;