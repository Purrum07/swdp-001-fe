import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LabelService from "../../services/LabelService";
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

function FormaProducto() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function addLabel(e) {
        e.preventDefault()
        const ls = new LabelService();
    
        ls.addLabel()
            .then(response => {
                console.log("Si se pudo")
        })

        handleShow()
    }

    return (
        <div>
            <Form>
            <Form.Label>Llena la información para agregar un nuevo producto.</Form.Label>

            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formCodigoInterno">
                    <Form.Label>Código interno</Form.Label>
                    <Form.Control type="text" placeholder="E.g. 49052060943795"/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del producto o similar"/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formCliente">
                    <Form.Label>Cliente</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del cliente o similar"/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formOrdenCompra">
                    <Form.Label>Orden de compra</Form.Label>
                    <Form.Control type="text" placeholder="Un número (e.g. 1007)"/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formProveedor">
                    <Form.Label>Proveedor</Form.Label>
                    <Form.Control type="text" placeholder="Nombre de proveedor o similar"/>
                </Form.Group>
            </Row>

            <Button variant="primary" onClick={addLabel}>
                Agregar
            </Button>
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