import {IRootUrls} from "../../interfaces";
import {SET_ALL_VEHICLES} from "../types/vehiclesTypes";

export const setAllVehicles = (data: IRootUrls) => {
    return {
        type: SET_ALL_VEHICLES,
        payload: data
    }
}