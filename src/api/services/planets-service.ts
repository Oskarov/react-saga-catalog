import {IPlanet} from "../../interfaces/planets";
import httpClient from "../httpClient";
import {IApiCatalogRespond} from "../../interfaces";

const planetsService = {
    async getAll(): Promise<IPlanet[] | false> {
        try {
            const sData: IApiCatalogRespond = await httpClient.request({
                url: 'planets',
                method: 'GET',
            });
            return sData.data.results as IPlanet[];
        } catch (e) {
            return false;
        }
    },
};

export default planetsService;