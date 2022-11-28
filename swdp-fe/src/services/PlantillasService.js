import PlantillasAPI from './PlantillasAPI';

class PlantillasService {
    getAll() {
        return PlantillasAPI.get('/plantillas/all');
    }
    
    get(id) {
        return PlantillasAPI.get(`/plantillas/${id}`);
    }

    updateTemplate(body) {
        /*
        let template = {
            id: 0, 
            name: "", 
            description: 0,
            date: 0,
            purchase_order: 0,
            supplier: 0,
            barcode: 0,
            client: 0,
            quantity: 0,
            t_height: "",
            t_width: ""
        };

        template.id = _id;
        template.name = _name;
        template.description = _description;
        template.date = _date;
        template.purchase_order = _purchase_order;
        template.supplier = _supplier;
        template.barcode = _barcode;
        template.client = _client;
        template.quantity = _quantity;
        template.t_height = _t_height;
        template.t_width = _t_width;
        */

        return PlantillasAPI.post('/templates/update/id', body, {headers: {
            "Content-Type": "application/json"}
        });
    }

}

export default PlantillasService;