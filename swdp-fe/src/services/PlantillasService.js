import PlantillasAPI from './PlantillasAPI';

class PlantillasService {
    getAll() {
        return PlantillasAPI.get('/labels/all');
    }
    
    get(id) {
        return PlantillasAPI.get(`/labels/${id}`);
    }

}

export default PlantillasService;