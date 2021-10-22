import {IStarship} from "../../interfaces/starships";
import httpClient from "../httpClient";
import {IApiCatalogRespond} from "../../interfaces";

const starshipsService = {
    async getAll(): Promise<IStarship[] | false> {
        try {
            const sData: IApiCatalogRespond = await httpClient.request({
                url: 'starships',
                method: 'GET',
            });
            return sData.data.results as IStarship[];
        } catch (e) {
            return false;
        }
    },
};

export default starshipsService;