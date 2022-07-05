import axios from "axios";

const defaultOptions = {
    baseURL: "http://192.168.0.166:8000/",
    headers: {
        'Content-Type': 'application/json',
    },
};

let API = axios.create(defaultOptions);

export default API;

