import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import LabelService from "../../services/LabelService";
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

function FormaProducto() {
    const [id, setId] = React.useState(0);
    const [purchaseOrder, setPurchaseOrder] = React.useState(0);
    const [date, setDate] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [client, setClient] = React.useState("");
    const [quantity, setQuantity] = React.useState(0);
    const [supplier, setSupplier] = React.useState("");

    const [visibility, setVisibility] = React.useState(false);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
        navigate("/plantillas");
    }
    
    const handleShow = () => setShow(true);

    function handleChangeId(e) {
        setId(e.target.value);
    };
    
    function handleChangePurchaseOrder(e) {
        setPurchaseOrder(e.target.value);
    };
    
    function handleChangeDate(e) {
        setDate(e.target.value);
    };

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    };

    function handleChangeClient(e) {
        setClient(e.target.value);
    };

    function handleChangeSupplier(e) {
        setSupplier(e.target.value);
    };

    function addLabel(e) {
        e.preventDefault();

        if (id <= 0  || purchaseOrder <= 0 || date === "" || description === "" || client === "" || supplier === "" || id.toString().length !== 14) {
            setVisibility(true);
        } else {
            setVisibility(false);
            const ls = new LabelService();
            const newLabel = { id: parseInt(id), purchase_order: parseInt(purchaseOrder), date: date, description: description, client: client, quantity: parseInt(quantity), supplier: supplier };
            const JSONTemplate = JSON.stringify(newLabel);
            let response = ls.addLabel(JSONTemplate);
            console.log(response);
            console.log(JSONTemplate);
            handleShow();
        }
    };

    return (
        <div>
            <Form>
                <Row className="mb-3">
                    <Form.Label>Llena la información para agregar un nuevo producto.</Form.Label>
                    <Form.Group as={Col} className="mb-3" controlId="formCodigoInterno">
                        <Form.Label>Código interno</Form.Label>
                        <Form.Control type="number" onChange={handleChangeId} placeholder="E.g. 49052060943795" required/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formDescripcion">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" onChange={handleChangeDescription} placeholder="Nombre del producto o similar" required/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formCliente">
                        <Form.Label>Cliente</Form.Label>
                        <Form.Control type="text" onChange={handleChangeClient} placeholder="Nombre del cliente o similar" required/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formOrdenCompra">
                        <Form.Label>Orden de compra</Form.Label>
                        <Form.Control type="number" onChange={handleChangePurchaseOrder} placeholder="Un número (e.g. 1007)" required/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formProveedor">
                        <Form.Label>Proveedor</Form.Label>
                        <Form.Control type="text" onChange={handleChangeSupplier} placeholder="Nombre de proveedor o similar" required/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formOrdenCompra">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" onChange={handleChangeDate} placeholder="Un número (e.g. 1007)" required/>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" onClick={addLabel}>
                    Agregar
                </Button>

                <Alert variant="danger" onClose={() => setVisibility(false)} dismissible show={visibility}>
                    <Alert.Heading>Datos vacíos</Alert.Heading>
                    <p>
                        Por favor verifica que ni el código interno ni la cantida sean menor o igual a 0, 
                        y que los demás campos estén llenos. También verifica que el código interno
                        sea exactamente de 14 dígitos.
                    </p>
                </Alert>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title> ¡Exito! </Modal.Title>
                </Modal.Header>
                <Modal.Body> El nuevo producto ha sido agregado. </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default FormaProducto;