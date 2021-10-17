import {IPlanet} from "../../interfaces/planets";
import httpClient from "../httpClient";

const planetsService = {
    async getAll(): Promise<IPlanet[] | false> {
        try {
            return await httpClient.request({
                url: 'planets',
                method: 'GET',
            });
        } catch (e) {
            return false;
        }
    },
};

export default planetsService;