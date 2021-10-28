import axios from 'axios';
import config from "../config";

const httpClient = axios.create({
    /*baseURL: config.host,
    *  В текущем приложении для демонстрации ссылка на апи сразу проставляется
    * */
    baseURL: 'https://swapi.dev/api/',
});

export default httpClient;