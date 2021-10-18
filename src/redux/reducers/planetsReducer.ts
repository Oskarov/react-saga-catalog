import {IPlanetsState} from "../../interfaces/planets";
import {SET_ALL_PLANETS} from "../types/planetsTypes";

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
    }
    return state;
}
