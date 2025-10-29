import axios from 'axios';

export default axios.create({
    //baseURL: "http://localhost:5000/api",
    baseUrl: "https://fruit-shop-server.onrender.com/api",
});