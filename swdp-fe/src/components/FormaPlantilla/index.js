import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import React from 'react';

function TempleteForm() {
    const [description, setDescription] = useState(false);
    return (
        <Form>
            <div>
            <Row>
                <Col className="col-md-4">
                    <Form.Label htmlFor="nombrePlantilla">
                        <h3>
                            Nombre de Plantilla:
                        </h3>
                    </Form.Label> 
                    <Form.Control id="nombrePlantilla" />
                </Col>
            </Row>
            </div>
            <br></br>

            <Form.Label>Palomea los campos que quieras para la plantilla</Form.Label>
            <Row className="mb-3">
                <Form.Group as={Col} className="col-md-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Cliente" id="plantillaCliente"/>
                </Form.Group>
                <Form.Group as={Col} className="col-md-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Código de barras" id="plantillaCodigoBarras" />
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="col-md-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Codigo Interno" id="plantillaCodigoInterno"/>
                </Form.Group>
                <Form.Group as={Col} className="col-md-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Descripción" checked={description} id="plantillaDescripcion" onChange={(e) => {setDescription(e.target.checked); console.log(description)}}/>
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="col-md-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Fecha" id="plantillaFecha" />
                </Form.Group>
                <Form.Group as={Col} className="col-md-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Orden de compra" id="plantillaOrdenCompra" />
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Proveedor" id="plantillaProveedor" />
                </Form.Group>

            </Row>

            <div>
            <Row>
                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Form.Label htmlFor="tamanioPlantilla">
                        <h3>
                            Tamaño de la Plantilla:
                        </h3>
                    </Form.Label> 
                    <Row className="col-12">
                        <Col xs={12} sm={6} md={6} lg={6} className="mb-1">
                            <Row className="mb-1">
                                Altura:
                            </Row>
                            <Row className="mb-1">
                                <Form.Select className="col-6" onChange={(e) => {console.log(e)}}>
                                    <option value={1}>
                                        1 in.
                                    </option>
                                    <option value={2}>
                                        2 in.
                                    </option>
                                    <option value={3}>
                                        3 in.
                                    </option>
                                    <option value={4}>
                                        4 in.
                                    </option>
                                </Form.Select>
                            </Row>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} className="mb-1">
                            <Row className="mb-1">
                                Anchura:
                            </Row>
                            <Row className="mb-1">
                                <Form.Select className="col-6" onChange={(e) => {}}>
                                    <option value={1}>
                                        1 in.
                                    </option>
                                    <option value={2}>
                                        2 in.
                                    </option>
                                    <option value={3}>
                                        3 in.
                                    </option>
                                    <option value={4}>
                                        4 in.
                                    </option>
                                </Form.Select>
                            </Row>
                        </Col>
                    </Row>

                </Col>
            </Row>
            </div>
            <br></br>

            <Button variant="primary" type="submit" >
                Crear
            </Button>
        </Form>
    );
}

export default TempleteForm;