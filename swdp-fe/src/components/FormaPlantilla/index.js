import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react';
import LabelService from "../../services/LabelService";
import { useNavigate } from "react-router-dom";


function TempleteForm() {

    
    const [name, setName] = React.useState('');
    const [description = false, setDescription] = React.useState('');
    const [barCode, setBarCode] = React.useState('');
    const [date, setDate] = React.useState('');
    const [client, setClient] = React.useState('');
    const [order, setOrder] = React.useState('');
    const [provider, setProvider] = React.useState('');
    const [heigth, setHeigth] = React.useState('');
    const [width, setWidth] = React.useState('');

    function firstSet(){
        setDescription(true)
    }
    function handleChangeName(e) {
        e.preventDefault()
        setName(e.target.value)
    }
    function handleChangeDescription(e) {
        e.preventDefault()
        setDescription(e.target.checked)
    }
    function handleChangeBarCode(e) {
        e.preventDefault()
        setBarCode(e.target.checked)
    }
    function handleChangeDate(e) {
        e.preventDefault()
        setDate(e.target.checked)
    }
    function handleChangeClient(e) {
        e.preventDefault()
        setClient(e.target.checked)
    }
    function handleChangeOrder(e) {
        e.preventDefault()
        setOrder(e.target.checked)
    }
    function handleChangeProvider(e) {
        e.preventDefault()
        setProvider(e.target.checked)
    }
    function handleChangeHeigth(e) {
        e.preventDefault()
        setHeigth(e.target.value)
    }
    function handleChangeWidth(e) {
        e.preventDefault()
        setWidth(e.target.value)
    }

    const navigate = useNavigate();
    
    
    function postPlantilla(e) {
        e.preventDefault()
        const ls = new LabelService();
        var newDescription = false
        var newBarCode = false
        var newDate = false
        var newClient = false
        var newOrder = false
        var newProvider = false

        description === true ? newDescription = true : newDescription = false
        barCode === true ? newBarCode = true : newBarCode = false
        date === true ? newDate = true : newDate = false
        client === true ? newClient = true : newClient = false
        order === true ? newOrder = true : newOrder = false
        provider === true ? newProvider = true : newProvider = false

        const plantillaACrear = {nombre : name, descripcion: newDescription, fecha: newDate, ordenCompra: newOrder, proveedor: newProvider, codigoBarras: newBarCode, cliente: newClient, alto: heigth, ancho: width};

        const JSONPlantilla = JSON.stringify(plantillaACrear)

        /*ls.getLabel()
            .then(response => {
                
            })/*/
        console.log("Plantilla creada")
        console.log(JSONPlantilla)
        navigate("/plantillas");
    }

    return (
        <Form >
            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="text" >
                    <Form.Label>Nombre de plantilla</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese nombre a asignar" value={name} onChange={handleChangeName}/>
                </Form.Group>

                <Form.Label>Palomea los campos que quieras para la plantilla</Form.Label>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Descripción" checked={!!description}  onChange={handleChangeDescription}/>
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Código de barras" checked={barCode} onChange={handleChangeBarCode}/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Fecha" checked={date} onChange={handleChangeDate}/>
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Cliente" checked={client} onChange={handleChangeClient}/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Orden de compra" checked={order} onChange={handleChangeOrder}/>
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Proveedor" checked={provider} onChange={handleChangeProvider}/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Label>Tamaño de plantilla (En centímetros)</Form.Label>
                <Form.Group as={Col}  controlId="text" >
                    <Form.Control type="number" placeholder="Ancho" value={width} onChange={handleChangeWidth}/>
                </Form.Group>

                <Form.Group as={Col}  controlId="text" >
                    <Form.Control type="number" placeholder="Alto" value={heigth} onChange={handleChangeHeigth}/>
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit" onClick={postPlantilla} >
                Crear
            </Button>
        </Form>
    );
}

export default TempleteForm;