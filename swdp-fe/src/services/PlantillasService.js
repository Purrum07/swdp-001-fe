import PlantillasAPI from './PlantillasAPI';

class PlantillasService {
    getAll() {
        return PlantillasAPI.get('/plantillas/all');
    }
    
    get(id) {
        return PlantillasAPI.get(`/plantillas/${id}`);
    }
    
    delete(id) {
        return PlantillasAPI.delete(`/plantillas/${id}`)
    }
    
    post(plantilla) {
        return PlantillasAPI.post(`/plantillas`, plantilla)
    }

}

export default PlantillasService;