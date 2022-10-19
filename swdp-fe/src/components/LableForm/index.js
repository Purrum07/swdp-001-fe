import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

function LableForm() {

    const [description, setDescription] = React.useState('');
    const [client, setClient] = React.useState('');
    const [order, setOrder] = React.useState('');
    const [provider, setProvider] = React.useState('');

    function handleChange(e) {
        e.preventDefault()
        //Llamada al GET
        setDescription("Es la comida mas rica")
        setClient("Mario ")
        setOrder("123456")
        setProvider("Bimbo")

    }

    return (

        <Form>
            <Form.Group className="mb-3" controlId="formInterCode" >
                <Form.Label>Código Interno</Form.Label>
                <Form.Control type="code" placeholder="Ingrese código interno" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleChange}>
                Obtener información
            </Button>
            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Descripción del producto</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} readOnly />
            </Form.Group>
            <Form.Group controlId="date">
                <Form.Label>Seleccione fecha</Form.Label>
                <Form.Control type="date" name="formdate" />
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
                <Form.Control type="quantity" value="Hola" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Crear
            </Button>
        </Form>
    );
}

export default LableForm;