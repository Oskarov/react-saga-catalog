import {IAppState} from "../../interfaces";

const initialState: IAppState = {
    urls: {},
    loading: true
}


export const appReducer = (state = initialState, action: any) => {
    return state;
}
