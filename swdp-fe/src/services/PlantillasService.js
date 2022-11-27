import PlantillasAPI from './PlantillasAPI';

class PlantillasService {
    getAll() {
        return PlantillasAPI.get('/plantillas/all');
    }
    
    get(id) {
        return PlantillasAPI.get(`/plantillas/${id}`);
    }

}

export default PlantillasService;