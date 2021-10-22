import {IStarshipsState} from "../../interfaces/starships";
import {SET_ALL_STARSHIPS} from "../types/starshipsTypes";

const initialState: IStarshipsState = {
   starships: []
}

export const starshipsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ALL_STARSHIPS:
            return {
                ...state,
                starships: action.payload
            }
    }
    return state;
}
