import {IStarship} from "../../interfaces/starships";
import httpClient from "../httpClient";

const starshipsService = {
    async getAll(): Promise<IStarship[] | false> {
        try {
            return await httpClient.request({
                url: 'starships',
                method: 'GET',
            });
        } catch (e) {
            return false;
        }
    },
};

export default starshipsService;