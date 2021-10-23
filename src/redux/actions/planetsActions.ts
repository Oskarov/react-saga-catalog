import {SELECT_PLANET, SET_ALL_PLANETS} from "../types/planetsTypes";
import {IPlanet} from "../../interfaces/planets";


export const setAllPlanets = (data: IPlanet[]) => {
    return {
        type: SET_ALL_PLANETS,
        payload: data
    }
}

export const selectPlanet = (name: string) => {
    return {
        type: SELECT_PLANET,
        payload: name
    }
}