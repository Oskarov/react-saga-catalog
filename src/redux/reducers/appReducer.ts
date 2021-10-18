import {IAppState} from "../../interfaces";
import {INITIAL_DATA, LOADING} from "../types/rootTypes";

const initialState: IAppState = {
    urls: {},
    loading: true
}


export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case INITIAL_DATA:
            return {
                ...state,
                urls: action.payload
            }
    }
    return state;
}
