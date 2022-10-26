import axios from 'axios'

const LableAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    responseType: 'json'
});

export default LableAPI;