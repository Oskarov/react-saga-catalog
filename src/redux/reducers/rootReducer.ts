import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import {createBrowserHistory} from "history";
import {appReducer} from "./appReducer";
export const history = createBrowserHistory();

export const rootReducer = combineReducers({
    router: connectRouter(history),
    app: appReducer,/*
    planets: planetsReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer,*/
})