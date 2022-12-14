//@ts-ignore
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LabelService from "../../services/LabelService";
import crearImagen from "../../utilities/CrearImagen";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";
import PlantillasService from '../../services/PlantillasService';
import Alert from 'react-bootstrap/Alert';

const ref = React.createRef();

function LabelForm() {

    const [description, setDescription] = useState('');
    const [client, setClient] = useState('');
    const [order, setOrder] = useState('');
    const [provider, setProvider] = useState('');
    const [internCode, setInterCode] = useState('');
    const [quantity, setQuantity] = useState('');
    const [barCode, setBarCode] = useState('');
    const [date, setDate] = useState('');
    const [template, setTemplate] = useState({});
    const [allTemplates, setAllTemplates] = useState([{}]);

    const [t_heigth, setTHeigth] = useState('');
    const [t_width, setTWidth] = useState('');

    const handleCreateOnClick = (toPdf) => {
        toPdf();
    }
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [11, 8.5]
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

        setInterCode(e.target.value)
    }
    function handleChangeQuantity(e) {

        setQuantity(e.target.value)
    }
    function handleChangeDate(e) {

        setDate(e.target.value)
    }
    function handleChangeDescription(e) {

        setDescription(e.target.value)
    }
    function handleChangeClient(e) {

        setClient(e.target.value)
    }
    function handleChangeOrder(e) {

        setOrder(e.target.value)
    }
    function handleChangeProvider(e) {

        setProvider(e.target.value)
    }
    function handleChangeTemplate(e) {

        var name = e.target.value
        var selectedTemplate

        for (let i = 0; i < allTemplates.length; i++) {
            if (allTemplates[i].name === name) {
                selectedTemplate = allTemplates[i]
            }
        }

        console.log(selectedTemplate)

        setTHeigth(selectedTemplate.t_heigth)
        setTWidth(selectedTemplate.t_width)

        setTemplate(selectedTemplate)
    }

    useEffect(() => {
        const ps = new PlantillasService();

        ps.getAll()
            .then(response => {

                setAllTemplates(response.data.data)
            })
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formInterCode" >
                                <Form.Select className="col-6" onChange={handleChangeTemplate}>
                                    <option>Selecciona el nombre de la plantilla a usar</option>
                                    {
                                        allTemplates.map((e, key) => {
                                            return <option key={key} onClick={handleChangeTemplate}>
                                                {e.name}
                                            </option>
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formInterCode" >
                                <Form.Label>C??digo Interno</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese c??digo interno" value={internCode} onChange={handleChangeCode} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={getLabel}>
                                Obtener informaci??n
                            </Button>

                            {(template.description === true || template.description === 1) &&
                                <Form.Group className="mb-3" controlId="formDescription">
                                    <Form.Label>Descripci??n del producto</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={description} onChange={handleChangeDescription} />
                                </Form.Group>
                            }
                            {(template.date === true || template.date === 1) &&
                                <Form.Group controlId="date">
                                    <Form.Label>Seleccione fecha</Form.Label>
                                    <Form.Control type="date" name="formdate" value={date} onChange={handleChangeDate} required />
                                </Form.Group>
                            }
                            {(template.client === true || template.client === 1) &&
                                <Form.Group className="mb-3" controlId="formClient">
                                    <Form.Label>Cliente</Form.Label>
                                    <Form.Control type="text" value={client} onChange={handleChangeClient} />
                                </Form.Group>
                            }
                            {(template.purchase_order === true || template.purchase_order === 1) &&
                                <Form.Group className="mb-3" controlId="formOrder">
                                    <Form.Label>Orden de compra</Form.Label>
                                    <Form.Control type="text" value={order} onChange={handleChangeOrder} />
                                </Form.Group>
                            }
                            {(template.supplier === true || template.supplier === 1) &&
                                <Form.Group className="mb-3" controlId="formProvider">
                                    <Form.Label>Proveedor</Form.Label>
                                    <Form.Control type="text" value={provider} onChange={handleChangeProvider} />
                                </Form.Group>
                            }
                            {(template.quantity === true || template.quantity === 1) &&
                                <Form.Group className="mb-3" controlId="formQuantity">
                                    <Form.Label>Cantidad</Form.Label>
                                    <Form.Control type="number" value={quantity} onChange={handleChangeQuantity} required />
                                </Form.Group>
                            }
                        </Form>
                    </Col>

                    <Col xs={6}>
                        {/*@ts-ignore*/}
                        <div ref={ref}>
                            <Card style={{ width: t_width, height: t_heigth }}>
                                <Card.Body>
                                    <Row className="justify-content-md-center">

                                        {(template.internal_code === true || template.internal_code === 1) &&
                                            <Col xs={template.barcode === 1 ? 6 : 12} md={template.barcode === 1 ? 6 : 12} >

                                                <Card.Text style={{ fontSize: '1.5rem' }}>
                                                    {internCode}
                                                </Card.Text>
                                            </Col>
                                        }
                                        {(template.barcode === true || template.barcode === 1) &&
                                            <Col xs={6} md={6}>
                                                <div>
                                                    <svg dangerouslySetInnerHTML={{ __html: barCode }}></svg>
                                                </div>
                                            </Col>
                                        }

                                    </Row>
                                    <Row className='col-12'>
                                        {(template.description === true || template.description === 1) &&
                                            <Col xs={12}>
                                                <Card.Text>
                                                    {description}
                                                </Card.Text>
                                            </Col>
                                        }

                                    </Row>
                                    <Row>
                                        {(template.date === true || template.date === 1) &&
                                            <Col xs={6}>
                                                <Card.Text>
                                                    {date}
                                                </Card.Text>
                                            </Col>
                                        }

                                    </Row>
                                    <Row className='col-12'>
                                        {(template.client === true || template.client === 1) &&
                                            <Col xs={12}>
                                                <Card.Text>
                                                    <b> Cliente: </b>{client}
                                                </Card.Text>
                                            </Col>
                                        }

                                    </Row>
                                    <Row>
                                        {(template.purchase_order === true || template.purchase_order === 1) &&
                                            <Col xs={12} md={8}>
                                                <Card.Text>
                                                    <b>Orden de compra:</b> {order}
                                                </Card.Text>
                                            </Col>
                                        }
                                        {(template.quantity === true || template.quantity === 1) &&
                                            <Col xs={6} md={4}>
                                                <Card.Text>
                                                    <b>Cantidad:</b> {quantity}
                                                </Card.Text>
                                            </Col>
                                        }

                                    </Row>
                                    <Row className='col-12'>
                                        {(template.supplier === true || template.supplier === 1) &&
                                            <Col xs={12}>
                                                <Card.Text>
                                                    <b>Proveedor:</b> {provider}
                                                </Card.Text>
                                            </Col>
                                        }

                                    </Row>

                                </Card.Body>
                            </Card>
                        </div>
                        <br/>
                        <div>
                            <Row>
                                <Col xs={6}>
                                    <Pdf targetRef={ref} filename="Etiqueta.pdf" options={options} x={.5} y={.5} scale={1}>
                                        {({ toPdf }) => <Button variant="primary" onClick={() => handleCreateOnClick(toPdf)}
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
                            <br/>
                            <Alert variant="info" >
                                <Alert.Heading>Aviso</Alert.Heading>
                                <p>
                                    El tama??o en papel puede variar ligeramente al tama??o solicitado
                                </p>
                            </Alert>
                        </div>
                       

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LabelForm;