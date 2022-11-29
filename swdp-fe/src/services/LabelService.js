import LableAPI from "./LableAPI";

class LabelService {
    getLabel(id){
        return LableAPI.get(`/labels/${id}`);
    }

    addLabel(body) {
        return LableAPI.post('/labels/new', body, {headers: {
            "Content-Type": "application/json"}
        });
        
    updateLabel(nombre, descripcion, fecha, ordenCompra, proveedor, codigoBarras, cliente, tamano) {
        return LableAPI.put(`/labels/`);
    }
}

export default LabelService;