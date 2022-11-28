import PlantillasAPI from './PlantillasAPI';

class PlantillasService {
    getAll() {
        return PlantillasAPI.get('/labels/all');
    }
    
    get(id) {
        return PlantillasAPI.get(`/labels/${id}`);
    }

    postTemplate(body){
        return PlantillasAPI.post('/templates/new',body, {headers: {
            "Content-Type": "application/json"}
        });
    }

}

export default PlantillasService;