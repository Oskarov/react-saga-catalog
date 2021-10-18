import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import {createBrowserHistory} from "history";
import {appReducer} from "./appReducer";
import {planetsReducer} from "./planetsReducer";
export const history = createBrowserHistory();

export const rootReducer = combineReducers({
    router: connectRouter(history),
    planets: planetsReducer,
    app: appReducer,/*
    planets: planetsReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer,*/
});