import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import PlantillaService from "../../services/PlantillasService";


function TempleteForm() {


    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState(false);
    const [barCode, setBarCode] = React.useState(false);
    const [date, setDate] = React.useState(false);
    const [client, setClient] = React.useState(false);
    const [order, setOrder] = React.useState(false);
    const [provider, setProvider] = React.useState(false);
    const [heigth, setHeigth] = React.useState('');
    const [width, setWidth] = React.useState('');
    const [visibility, setVisibility] = React.useState(false);
    const [internCode, setInterCode] = React.useState(false);
    const [quantity, setQuantity] = React.useState(false);

    function handleChangeName(e) {

        setName(e.target.value)
    }
    function handleChangeDescription(e) {

        setDescription(!description)
    }
    function handleChangeBarCode(e) {

        setBarCode(e.target.checked)
    }
    function handleChangeDate(e) {

        setDate(e.target.checked)
    }
    function handleChangeClient(e) {
        setClient(e.target.checked)
    }
    function handleChangeOrder(e) {

        setOrder(e.target.checked)
    }
    function handleChangeProvider(e) {

        setProvider(e.target.checked)
    }
    function handleChangeHeigth(e) {

        setHeigth(e.target.value)
    }
    function handleChangeWidth(e) {

        setWidth(e.target.value)
    }

    function handleChangeInternCode(e) {

        setInterCode(e.target.checked)
    }

    function handleChangeQuantity(e) {
        setQuantity(e.target.checked)
    }

    const navigate = useNavigate();


    function postPlantilla(e) {
        e.preventDefault()

        if (heigth === "" || width === "" || name === "") {
            setVisibility(true)
        } else {
            const ps = new PlantillaService();

            const plantillaACrear = { name: name, description: description, date: date, purchase_order: order, supplier: provider, barcode: barCode, client: client, quantity: quantity, internal_code: internCode, t_height: heigth, t_width: width };

            const JSONPlantilla = JSON.stringify(plantillaACrear)

            var response = ps.postTemplate(JSONPlantilla)
            console.log("Plantilla creada")
            console.log(response)
            console.log(JSONPlantilla)
            navigate("/plantillas");
        }
    }

    return (
        <Form >
            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="text" >
                    <Form.Label>Nombre de plantilla</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese nombre a asignar" value={name} onChange={handleChangeName} />
                </Form.Group>

                <Form.Label>Palomea los campos que quieras para la plantilla</Form.Label>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Descripción" checked={description} onChange={handleChangeDescription} />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Código de barras" checked={barCode} onChange={handleChangeBarCode} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Fecha" checked={date} onChange={handleChangeDate} />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Cliente" checked={client} onChange={handleChangeClient} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Orden de compra" checked={order} onChange={handleChangeOrder} />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Proveedor" checked={provider} onChange={handleChangeProvider} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Código interno" checked={internCode} onChange={handleChangeInternCode} />
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Cantidad" checked={quantity} onChange={handleChangeQuantity} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Label>Tamaño de plantilla (En pulgadas)</Form.Label>
                <Form.Group as={Col} controlId="text" >
                    <Form.Label>Altura:</Form.Label>
                    <Form.Select className="col-6" value={heigth} onChange={handleChangeHeigth}>
                        <option>Selecciona altura</option>
                        <option value="1in">
                            1 in.
                        </option>
                        <option value="2in">
                            2 in.
                        </option>
                        <option value="3in">
                            3 in.
                        </option>
                        <option value="4in">
                            4 in.
                        </option>
                    </Form.Select>

                </Form.Group>
                <Form.Group as={Col} controlId="text" >
                    <Form.Label>Anchura:</Form.Label>
                    <Form.Select className="col-6" value={width} onChange={handleChangeWidth}>
                        <option>Selecciona anchura</option>
                        <option value="1in">
                            1 in.
                        </option>
                        <option value="2in">
                            2 in.
                        </option>
                        <option value="3in">
                            3 in.
                        </option>
                        <option value="4in">
                            4 in.
                        </option>
                    </Form.Select>

                </Form.Group>

            </Row>
            <Alert variant="danger" onClose={() => setVisibility(false)} dismissible show={visibility}>
                <Alert.Heading>Datos vacíos</Alert.Heading>
                <p>
                    Por favor indica una altura, anchura y nombre.
                </p>
            </Alert>
            <Button variant="primary" type="submit" onClick={postPlantilla} >
                Crear
            </Button>
        </Form>
    );
}

export default TempleteForm;