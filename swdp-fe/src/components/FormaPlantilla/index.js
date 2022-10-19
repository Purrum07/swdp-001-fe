import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function TempleteForm() {
    return (
        <Form>

            <Form.Label>Palomea los campos que quieras para la plantilla</Form.Label>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Descripción" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Código de barras" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Fecha" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Cliente" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Orden de compra" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Proveedor" />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Proveedor" />
                </Form.Group>

            <Button variant="primary" type="submit" >
                Crear
            </Button>
        </Form>
    );
}

export default TempleteForm;