import LableAPI from "./LableAPI";

class LabelService {
    getLabel(id){
        return LableAPI.get(`/labels/${id}`);
    }

    addLabel(codigoInterno, descripcion, cliente, ordenCompra, proveedor) {
        let nuevoLabel = {};
        nuevoLabel.codigoInterno = parseInt(codigoInterno);
        nuevoLabel.descripcion = descripcion;
        nuevoLabel.cliente = cliente;
        nuevoLabel.ordenCompra = parseInt(ordenCompra);
        nuevoLabel.proveedor = proveedor;

        return LableAPI.post("/agregarLabel", nuevoLabel);
    }
}

export default LabelService;