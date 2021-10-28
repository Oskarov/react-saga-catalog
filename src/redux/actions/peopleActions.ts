import {IImportPeopleList} from "../../interfaces/people";
import {SET_ERROR, SET_PAGE, SET_PEOPLE_LIST, SET_SEARCH} from "../types/peopleTypes";

export const setPeopleListAction = (data: IImportPeopleList) => {
    return {
        type: SET_PEOPLE_LIST,
        payload: data
    }
}

export const setSearchAction = (data: string) => {
    return {
        type: SET_SEARCH,
        payload: data
    }
}

export const setPageAction = (data: number) => {
    return {
        type: SET_PAGE,
        payload: data
    }
}

export const setErrorAction = (data: string | null) => {
    return {
        type: SET_ERROR,
        payload: data
    }
}