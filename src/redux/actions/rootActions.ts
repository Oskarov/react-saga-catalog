import {INITIAL_DATA, LOADING} from "../types/rootTypes";
import {IRootUrls} from "../../interfaces";

export const loadingAction = (trigger: boolean) => {
    return {
        type: LOADING,
        payload: trigger
    }
}


export const setInitialData = (data: IRootUrls) => {
    return {
        type: INITIAL_DATA,
        payload: data
    }
}