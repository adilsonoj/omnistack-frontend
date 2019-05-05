import axios from "axios";

const api = axios.create({
    baseURL: 'https://oliveira-backend.herokuapp.com/',

   
});

export default api;