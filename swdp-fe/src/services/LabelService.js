import LableAPI from "./LableAPI";

class LabelService {
    getLabel(id){
        return LableAPI.get(`/labels/${id}`);
    }

    addLabel(body) {
        return LableAPI.post('/labels/new', body, {headers: {
            "Content-Type": "application/json"}
        });
    }
}

export default LabelService;