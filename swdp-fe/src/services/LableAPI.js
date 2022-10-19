import axios from 'axios'

const LableAPI = axios.create({
    baseURL: '',
    responseType: 'json'
});

export default LableAPI;