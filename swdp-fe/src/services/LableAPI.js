import axios from 'axios'

const LableAPI = axios.create({
    baseURL: 'https://intersermex-label-service.onrender.com/',
    responseType: 'json'
});

export default LableAPI;