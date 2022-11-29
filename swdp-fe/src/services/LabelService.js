import LableAPI from "./LableAPI";

class LabelService {
    getLabel(id){
        return LableAPI.get(`/labels/${id}`);
    }

    updateLabel(nombre, descripcion, fecha, ordenCompra, proveedor, codigoBarras, cliente, tamano) {
        return LableAPI.put(`/labels/`);
    }
}

export default LabelService;