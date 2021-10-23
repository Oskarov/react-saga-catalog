import {IPlanetsState} from "../../interfaces/planets";
import {SELECT_PLANET, SET_ALL_PLANETS} from "../types/planetsTypes";

const initialState: IPlanetsState = {
    planets: []
}

export const planetsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ALL_PLANETS:
            return {
                ...state,
                planets: action.payload
            }
        case SELECT_PLANET:
            return {
                ...state,
                planets: state.planets.map(planet=>{
                return {
                    ...planet,
                    selected: planet.name === action.payload ? !planet.selected : planet.selected
                }
            })}
    }
    return state;
}
