import axios                                                                   from 'axios';

const httpClient = axios.create({
    baseURL: 'https://swapi.dev/api/',
});

export default httpClient;