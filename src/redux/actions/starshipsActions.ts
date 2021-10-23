import {IRootUrls} from "../../interfaces";
import {REFRESH_STARSHIPS, SET_ALL_STARSHIPS} from "../types/starshipsTypes";

export const setAllStarships = (data: IRootUrls) => {
    return {
        type: SET_ALL_STARSHIPS,
        payload: data
    }
}

export const refreshStarships = () => {
    return {
        type: REFRESH_STARSHIPS,
    }
}