import {SET_ERROR, SET_PAGE, SET_PEOPLE_LIST, SET_PEOPLE_TARGET, SET_SEARCH} from "../types/peopleTypes";
import {IPeopleState} from "../../interfaces/people";

const initialState: IPeopleState = {
    count: 0,
    page: 1,
    search: "",
    error: null,
    people: []
}

export const peopleReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PEOPLE_LIST:
            return {
                ...state,
                count: action.payload.count,
                people: action.payload.results
            }
        case SET_PEOPLE_TARGET:
            return {
                ...state,
                people: action.payload || []
            }
        case SET_SEARCH:
            return {
                ...state,
                page: 1,
                search: action.payload
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
    }
    return state;
}
