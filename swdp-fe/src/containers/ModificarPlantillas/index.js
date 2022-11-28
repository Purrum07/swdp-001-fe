import React, { useState , useEffect } from "react";
import ActualizarPlantilla from "../../components/ActualizarPlantilla";

/*
* Contenedor para ActualizarPlantilla
*/

function ModificarPlantillas() {
    /*
    * Renderiza el contenendor.
    * @return {string} - HTML markup para el contenedor.
    */

    const [atributosPlantilla, setAtributosPlantilla] = useState({});
    
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

        console.log(atributos);

        atributos.id = 1
        atributos.name = "Prueba 1"
        atributos.description = true;
        atributos.date = true;
        atributos.purchaseOrder = true;
        atributos.supplier = true;
        atributos.barCode = true;
        atributos.client = true;
        atributos.quantity = true;
        atributos.internalCode = true;
        atributos.height = "1in";
        atributos.width = "1in";

        console.log(atributos);

        setAtributosPlantilla(atributos);
    }, []);

    return (
        <ActualizarPlantilla atribPlantilla={atributosPlantilla}/>
    );
};

export default ModificarPlantillas;