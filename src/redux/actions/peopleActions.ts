import {IImportPeopleList, IPeople} from "../../interfaces/people";
import {
    CHANGE_PAGE,
    CHANGE_SEARCH,
    GET_PEOPLE_LIST, GET_PEOPLE_TARGET,
    SET_ERROR,
    SET_PAGE,
    SET_PEOPLE_LIST, SET_PEOPLE_TARGET,
    SET_SEARCH
} from "../types/peopleTypes";

export const getPeopleListAction = () => {
    return {
        type: GET_PEOPLE_LIST
    }
}

export const setPeopleListAction = (data: IImportPeopleList) => {
    return {
        type: SET_PEOPLE_LIST,
        payload: data
    }
}

export const getPeopleTargetAction = (id: number) => {
    return {
        type: GET_PEOPLE_TARGET,
        payload: id
    }
}

export const setPeopleTargetAction = (data: IPeople) => {
    return {
        type: SET_PEOPLE_TARGET,
        payload: data
    }
}

export const setSearchAction = (data: string) => {
    return {
        type: SET_SEARCH,
        payload: data
    }
}

export const changeSearchAction = (data: string) => {
    return {
        type: CHANGE_SEARCH,
        payload: data
    }
}

export const setPageAction = (data: number) => {
    return {
        type: SET_PAGE,
        payload: data
    }
}

export const changePageAction = (data: number) => {
    return {
        type: CHANGE_PAGE,
        payload: data
    }
}

export const setErrorAction = (data: string | null) => {
    return {
        type: SET_ERROR,
        payload: data
    }
}