import Alert from 'react-bootstrap/Alert';
import React , { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PlantillasService from '../../services/PlantillasService';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";

function ActualizarPlantilla(props) {
    const [id, setId] = React.useState(props.atribPlantilla.id);
    const [name, setName] = React.useState(props.atribPlantilla.name);
    const [description, setDescription] = React.useState(props.atribPlantilla.description);
    const [date, setDate] = React.useState(props.atribPlantilla.date);
    const [purchaseOrder, setPurchaseOrder] = React.useState(props.atribPlantilla.purchaseOrder);
    const [supplier, setSupplier] = React.useState(props.atribPlantilla.supplier);
    const [barCode, setBarCode] = React.useState(props.atribPlantilla.barCode);
    const [client, setClient] = React.useState(props.atribPlantilla.client);
    const [quantity, setQuantity] = React.useState(props.atribPlantilla.quantity);
    const [internalCode, setInternalCode] = React.useState(props.atribPlantilla.internalCode);
    const [height, setHeight] = React.useState(props.atribPlantilla.height);
    const [width, setWidth] = React.useState(props.atribPlantilla.width);
    
    const [visibility, setVisibility] = React.useState(false);

    useEffect(() => { 
        setId(props.atribPlantilla.id);
        setName(props.atribPlantilla.name);
        setDescription(props.atribPlantilla.description);
        setDate(props.atribPlantilla.date);
        setPurchaseOrder(props.atribPlantilla.purchaseOrder);
        setSupplier(props.atribPlantilla.supplier);
        setBarCode(props.atribPlantilla.barCode);
        setClient(props.atribPlantilla.client);
        setQuantity(props.atribPlantilla.quantity);
        setInternalCode(props.atribPlantilla.internalCode);
        setHeight(props.atribPlantilla.height);
        setWidth(props.atribPlantilla.width);
    }, 
    [
        props.atribPlantilla.id, 
        props.atribPlantilla.name, 
        props.atribPlantilla.description, 
        props.atribPlantilla.date, 
        props.atribPlantilla.purchaseOrder, 
        props.atribPlantilla.supplier, 
        props.atribPlantilla.barCode, 
        props.atribPlantilla.client, 
        props.atribPlantilla.quantity, 
        props.atribPlantilla.internalCode, 
        props.atribPlantilla.height, 
        props.atribPlantilla.width
    ]);

    function handleChangeName(e) {
        setName(e.target.value);
    };

    const handleChangeDescription = () => {
        setDescription(!description);
    };

    const handleChangeDate = () => {
        setDate(!date);
    };

    const handleChangePurchaseOrder = () => {
        setPurchaseOrder(!purchaseOrder);
    };

    const handleChangeSupplier = () => {
        setSupplier(!supplier);
    };

    const handleChangeBarCode = () => {
        setBarCode(!barCode);
    };

    const handleChangeClient = () => {
        setClient(!client);
    };

    const handleChangeQuantity = () => {
          setQuantity(!quantity);
    };

    const handleChangeInternalCode = () => {
        setInternalCode(!internalCode);
    };

    function handleChangeHeight(e) {
        setHeight(e.target.value);
    };
    
    function handleChangeWidth(e) {
        setWidth(e.target.value);
    };

    const navigate = useNavigate();

    function postPlantilla(e) {
        e.preventDefault();

        if (height === "" || width === "" || name === "") {
            setVisibility(true)
        } else {
            const ps = new PlantillasService();
            const modifiedTemplate = { id: id, name: name, description: description, date: date, purchase_order: purchaseOrder, supplier: supplier, barcode: barCode, client: client, quantity: quantity, internal_code: internalCode, t_height: height, t_width: width};
            const JSONTemplate = JSON.stringify(modifiedTemplate);
            let response = ps.updateTemplate(JSONTemplate);
            console.log(response);
            console.log(JSONTemplate);

            navigate("/plantillas");
        }
    };

    return (
        <Form >
            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="text" >
                    <Form.Label>Nombre de plantilla</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese nombre a asignar" onChange={handleChangeName} defaultValue={props.atribPlantilla.name}/>
                </Form.Group>

                <Form.Label>Palomea los campos que quieras para la plantilla</Form.Label>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Descripción" onChange={handleChangeDescription} checked={description} defaultChecked={props.atribPlantilla.description}/>
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Código de barras" onChange={handleChangeBarCode} checked={barCode} defaultChecked={props.atribPlantilla.barCode}/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Fecha" onChange={handleChangeDate} checked={date} defaultChecked={props.atribPlantilla.date} />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Cliente" onChange={handleChangeClient} checked={client} defaultChecked={props.atribPlantilla.client} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Orden de compra" onChange={handleChangePurchaseOrder} checked={purchaseOrder} defaultChecked={props.atribPlantilla.purchaseOrder}/>
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Proveedor" onChange={handleChangeSupplier} checked={supplier} defaultChecked={props.atribPlantilla.supplier}/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Código interno" onChange={handleChangeInternalCode} checked={internalCode} defaultChecked={props.atribPlantilla.internalCode}/>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="switch" label="Cantidad" onChange={handleChangeQuantity} checked={quantity} defaultChecked={props.atribPlantilla.quantity}/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Label>Tamaño de plantilla (En pulgadas)</Form.Label>
                <Form.Group as={Col} controlId="text" >
                    <Form.Label>Altura:</Form.Label>
                    <Form.Select className="col-6" onChange={handleChangeHeight} value={height}>
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
                    <Form.Select className="col-6" onChange={handleChangeWidth} value={width}>
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
                Actualizar
            </Button>
        </Form>
    );
}

export default ActualizarPlantilla;