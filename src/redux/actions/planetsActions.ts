import {IRootUrls} from "../../interfaces";
import {SET_ALL_PLANETS} from "../types/planetsTypes";


export const setAllPlanets = (data: IRootUrls) => {
    return {
        type: SET_ALL_PLANETS,
        payload: data
    }
}