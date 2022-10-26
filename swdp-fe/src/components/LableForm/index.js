//@ts-ignore
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LabelService from "../../services/LabelService";
import crearImagen from "../../utilities/CrearImagen";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";

const ref = React.createRef();

function LabelForm() {

    const [description, setDescription] = React.useState('');
    const [client, setClient] = React.useState('');
    const [order, setOrder] = React.useState('');
    const [provider, setProvider] = React.useState('');
    const [internCode, setInterCode] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [barCode, setBarCode] = React.useState('');
    const [date, setDate] = React.useState('');

    const handleCreateOnClick = (toPdf) => {
        toPdf();
    }
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [18, 12]
    };

    function getLabel(e) {
        e.preventDefault()
        const ls = new LabelService();

        ls.getLabel(internCode)
            .then(response => {
                setDescription(response.data.data.description)
                setClient(response.data.data.client)
                setOrder(response.data.data.purchase_order)
                setProvider(response.data.data.supplier)
                var contenido_svg = response.data.data.svg;
                response.data.data.svg = crearImagen(contenido_svg);
                setBarCode(response.data.data.svg)
                console.log(response)
            })
    }
    function handleChangeCode(e) {
        e.preventDefault()
        setInterCode(e.target.value)
    }
    function handleChangeQuantity(e) {
        e.preventDefault()
        setQuantity(e.target.value)
    }
    function handleChangeDate(e) {
        e.preventDefault()
        setDate(e.target.value)
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formInterCode" >
                                <Form.Label>Código Interno</Form.Label>
                                <Form.Control type="code" placeholder="Ingrese código interno" value={internCode} onChange={handleChangeCode} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={getLabel}>
                                Obtener información
                            </Button>
                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Label>Descripción del producto</Form.Label>
                                <Form.Control as="textarea" rows={3} value={description} readOnly />
                            </Form.Group>
                            <Form.Group controlId="date">
                                <Form.Label>Seleccione fecha</Form.Label>
                                <Form.Control type="date" name="formdate" value={date} onChange={handleChangeDate} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formClient">
                                <Form.Label>Cliente</Form.Label>
                                <Form.Control type="client" value={client} readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formOrder">
                                <Form.Label>Orden de compra</Form.Label>
                                <Form.Control type="order" value={order} readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formProvider">
                                <Form.Label>Proveedor</Form.Label>
                                <Form.Control type="provider" value={provider} readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formQuantity">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control type="quantity" value={quantity} onChange={handleChangeQuantity} />
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col xs={6}>
                        {/*@ts-ignore*/}
                        <div ref={ref}>
                            <Card style={{ width: '30rem' }}>
                                <Card.Body>
                                    <Container>
                                        <Row className="justify-content-md-center">
                                            <Col xs={6} md={6}>
                                                <Card.Text >
                                                    <b>Código Interno:</b>
                                                </Card.Text>
                                                <Card.Text style={{ fontSize: '1.64rem' }}>
                                                    {internCode}
                                                </Card.Text>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <div>
                                                    <svg dangerouslySetInnerHTML={{ __html: barCode }}></svg>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <Card.Text>
                                                    <b>Descripción:</b> {description}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <Card.Text>
                                                    <b>Fecha:</b> {date}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <Card.Text>
                                                    <b> Cliente: </b>{client}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} md={8}>
                                                <Card.Text>
                                                    <b>Orden de compra:</b> {order}
                                                </Card.Text>
                                            </Col>
                                            <Col xs={6} md={4}>
                                                <Card.Text>
                                                    <b>Cantidad:</b> {quantity}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <Card.Text>
                                                    <b>Proveedor:</b> {provider}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Row>
                                <Col xs={6}>
                                    <Pdf targetRef={ref} filename="Etiqueta.pdf" options={options} x={.5} y={.5} scale={0.8}>
                                        {({ toPdf }) => <Button variant="contained" onClick={() => handleCreateOnClick(toPdf)}
                                            style={{
                                                backgroundColor: "#1a75ff",
                                                fontSize: "18px",
                                                color: "#ffffff"
                                            }}>
                                            Descargar
                                        </Button>}
                                    </Pdf>
                                </Col>
                            </Row>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LabelForm;