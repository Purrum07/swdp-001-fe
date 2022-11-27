import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ActualizarPlantilla(props) {
    return (
        <div>
            <Form>
                <div>
                    <Row>
                        <Col className="col-md-4">
                            <Form.Label htmlFor="nombrePlantilla">
                                <h3>
                                    Nombre de Plantilla:
                                </h3>
                            </Form.Label>
                            <Form.Control id="nombrePlantilla" text={props.atribPlantilla.nombre} defaultValue={props.atribPlantilla.nombre} />
                        </Col>
                    </Row>
                </div>
                <br></br>

                <Form.Label>Palomea los campos que quieras para la plantilla</Form.Label>
                <Row className="mb-3">
                    <Form.Group as={Col} className="col-md-3" controlId="formBasicCheckbox">
                        <Form.Check type="switch" label="Cliente" id="plantillaCliente" defaultChecked={props.atribPlantilla.cliente} />
                    </Form.Group>
                    <Form.Group as={Col} className="col-md-3" controlId="formBasicCheckbox">
                        <Form.Check type="switch" label="Código de barras" defaultChecked={props.atribPlantilla.codigoBarras} id="plantillaCodigoBarras" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="col-md-3" controlId="formBasicCheckbox">
                        <Form.Check type="switch" label="Codigo Interno" defaultChecked={props.atribPlantilla.codigoInterno} id="plantillaCodigoInterno" />
                    </Form.Group>
                    <Form.Group as={Col} className="col-md-3" controlId="formBasicCheckbox">
                        <Form.Check type="switch" label="Descripción" defaultChecked={props.atribPlantilla.descripcion} id="plantillaDescripcion" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="col-md-3" controlId="formBasicCheckbox">
                        <Form.Check type="switch" label="Fecha" id="plantillaFecha" defaultChecked={props.atribPlantilla.fecha} />
                    </Form.Group>
                    <Form.Group as={Col} className="col-md-3" controlId="formBasicCheckbox">
                        <Form.Check type="switch" label="Orden de compra" id="plantillaOrdenCompra" defaultChecked={props.atribPlantilla.ordenCompra} />
                    </Form.Group>

                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="switch" label="Proveedor" id="plantillaProveedor" defaultChecked={props.atribPlantilla.proveedor} />
                    </Form.Group>
                </Row>
                <div>
                    <Row>
                        <Col className="col-md-4">
                            <Form.Label htmlFor="tamanioPlantilla">
                                <h3>
                                    Tamaño de la Plantilla:
                                </h3>
                            </Form.Label>
                            <Form.Control id="tamanioPlantilla" text={props.atribPlantilla.tamano} defaultValue={props.atribPlantilla.tamano} />
                        </Col>
                    </Row>
                </div>
                <br></br>
                <Button variant="success" type="submit" >
                    Actualizar
                </Button>
            </Form>
        </div>
    );
}

export default ActualizarPlantilla;