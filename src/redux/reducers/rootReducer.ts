import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import {createBrowserHistory} from "history";
import {appReducer} from "./appReducer";
import {planetsReducer} from "./planetsReducer";
import {starshipsReducer} from "./starshipsReducer";
import {vehiclesReducer} from "./vehiclesReducer";

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
    router: connectRouter(history),
    app: appReducer,
    planets: planetsReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer,
});