import {IVehiclesState} from "../../interfaces/vehicles";
import {SET_ALL_VEHICLES} from "../types/vehiclesTypes";

const initialState: IVehiclesState = {
   vehicles: []
}


export const vehiclesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ALL_VEHICLES:
            return {
                ...state,
                vehicles: action.payload
            }
    }
    return state;
}
