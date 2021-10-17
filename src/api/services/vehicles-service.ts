import httpClient from "../httpClient";
import {IVehicle} from "../../interfaces/vehicles";

const vehiclesService = {
    async getAll(): Promise<IVehicle[] | false> {
        try {
            return await httpClient.request({
                url: 'vehicles',
                method: 'GET',
            });
        } catch (e) {
            return false;
        }
    },
};

export default vehiclesService;