import PlantillasAPI from './PlantillasAPI';

class PlantillasService {
    getAllTemplates() {
        return PlantillasAPI.get('/templates/all');
    }
    
    get(id) {
        return PlantillasAPI.get(`/labels/${id}`);
    }

}

export default PlantillasService;