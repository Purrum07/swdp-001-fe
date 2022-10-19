const axios = require('axios');

class PlantillasService {
    getAll() {
        let res = axios.get('http://webcode.me/plantillas')
        return res.data;
    }
    
    get(id) {
        let res = axios.get(`http://webcode.me/plantillas/${id}`)
        return res.data;
    }

}

export default new PlantillasService();