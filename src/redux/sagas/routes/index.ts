import {take, fork} from "redux-saga/effects";
import {LOCATION_CHANGE} from 'connected-react-router';
import {PLANETS} from "../../../routes";
import {loadPlanets} from "../planets";

export function* routesSaga() {
    while (true) {
        const action: any = yield take(LOCATION_CHANGE);
        if (action.payload.location.pathname.endsWith(`${PLANETS}`)) {
            yield fork(loadPlanets);
        }
    }
}