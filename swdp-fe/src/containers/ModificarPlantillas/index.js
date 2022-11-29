import React, { useState , useEffect } from "react";
import ActualizarPlantilla from "../../components/ActualizarPlantilla";
import {useLocation} from 'react-router-dom';
/*
* Contenedor para ActualizarPlantilla
*/

function ModificarPlantillas() {
    /*
    * Renderiza el contenendor.
    * @return {string} - HTML markup para el contenedor.
    */

    const [atributosPlantilla, setAtributosPlantilla] = useState({});
    const location = useLocation();
    
    useEffect(() => {

        let atributos = {
            id: 0,
            name: "",
            description: false,
            date: false,
            purchaseOrder: false,
            supplier: false,
            barCode: false,
            client: false,
            quantity: false,
            internalCode: false,
            height: "",
            width: ""
        };
        //console.log(location.state.props.plantilla);
        //console.log(atributos);

        atributos.id = location.state.props.plantilla.id;
        atributos.name = location.state.props.plantilla.name;
        atributos.description = location.state.props.plantilla.description;
        atributos.date = location.state.props.plantilla.date;
        atributos.purchaseOrder = location.state.props.plantilla.purchase_order;
        atributos.supplier = location.state.props.plantilla.supplier;
        atributos.barCode = location.state.props.plantilla.barcode;
        atributos.client = location.state.props.plantilla.client;
        atributos.quantity = location.state.props.plantilla.quantity;
        atributos.internalCode = location.state.props.plantilla.internal_code;
        atributos.height = location.state.props.plantilla.t_height;
        atributos.width = location.state.props.plantilla.t_width;

        //console.log(atributos);

        setAtributosPlantilla(atributos);
    }, []);

    return (
        <ActualizarPlantilla atribPlantilla={atributosPlantilla}/>
    );
};

export default ModificarPlantillas;