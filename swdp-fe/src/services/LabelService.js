import LableAPI from "./LableAPI";

class LabelService {
    getLabel(id){
        return LableAPI.get(`/labels/${id}`);
    }

    postPlantilla(){
        
    }
}

export default LabelService;