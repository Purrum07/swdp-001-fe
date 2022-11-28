import PlantillasAPI from './PlantillasAPI';

class PlantillasService {
    getAll() {
        return PlantillasAPI.get('/templates/all');
    }
    
    get_by_id(id) {
        return PlantillasAPI.get(`/templates/id/${id}`);
    }

    get_by_name(name) {
        return PlantillasAPI.get(`/templates/templates/${name}`);
    }
    
    delete(id_obj) {
        return PlantillasAPI.post(`/templates/delete/id`, id_obj)
    }
    
    post(plantilla) {
        return PlantillasAPI.post(`/templates/new`, plantilla)
    }

}

export default PlantillasService;