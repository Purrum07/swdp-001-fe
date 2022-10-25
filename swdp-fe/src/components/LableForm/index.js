import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import LabelService from "../../services/LabelService"
import crearImagen from "../../utilities/CrearImagen";



function LableForm() {

    const [description, setDescription] = React.useState('');
    const [client, setClient] = React.useState('');
    const [order, setOrder] = React.useState('');
    const [provider, setProvider] = React.useState('');
    const [internCode, setInterCode] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [barCode, setBarCode] = React.useState('');

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

    return (

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
                <Form.Control type="quantity" value={quantity} onChange={handleChangeQuantity} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Código de barras</Form.Label>
                <div>
                    <svg dangerouslySetInnerHTML={{ __html: barCode }}></svg>
                </div>
            </Form.Group>

            <Button variant="primary" type="submit">
                Crear
            </Button>
        </Form>
    );
}

export default LableForm;