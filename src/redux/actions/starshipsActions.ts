import {IRootUrls} from "../../interfaces";
import {SET_ALL_STARSHIPS} from "../types/starshipsTypes";

export const setAllStarships = (data: IRootUrls) => {
    return {
        type: SET_ALL_STARSHIPS,
        payload: data
    }
}