import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function TempleteForm() {
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
                    <Form.Check type="switch" label="Descripción" id="plantillaDescripcion" />
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
                <Col className="col-md-4">
                    <Form.Label htmlFor="tamanioPlantilla">
                        <h3>
                            Tamaño de la Plantilla:
                        </h3>
                    </Form.Label> 
                    <Form.Control id="tamanioPlantilla" />
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