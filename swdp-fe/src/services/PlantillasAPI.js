import axios from 'axios';

const PlantillasAPI = axios.create({
    baseURL: 'https://intersermex-label-service.onrender.com/',
    responseType: 'json'
});

export default PlantillasAPI;