import httpClient from "../httpClient";
import {IVehicle} from "../../interfaces/vehicles";
import {IApiCatalogRespond} from "../../interfaces";

const vehiclesService = {
    async getAll(): Promise<IVehicle[] | false> {
        try {
            const sData: IApiCatalogRespond = await httpClient.request({
                url: 'vehicles',
                method: 'GET',
            });
            return sData.data.results as IVehicle[];
        } catch (e) {
            return false;
        }
    },
};

export default vehiclesService;