import {IRootUrls} from "../../interfaces";
import {REFRESH_VEHICLES, SET_ALL_VEHICLES} from "../types/vehiclesTypes";

export const setAllVehicles = (data: IRootUrls) => {
    return {
        type: SET_ALL_VEHICLES,
        payload: data
    }
}

export const refreshVehicles = () => {
    return {
        type: REFRESH_VEHICLES,
    }
}