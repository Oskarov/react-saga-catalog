import {take, fork} from "redux-saga/effects";
import {LOCATION_CHANGE} from 'connected-react-router';
import {PLANETS, STARSHIPS, VEHICLES} from "../../../routes";
import {loadPlanets} from "../planets";
import {loadVehicles} from "../vehicles";
import {loadStarships} from "../starships";

export function* routesSaga() {
    while (true) {
        const action: any = yield take(LOCATION_CHANGE);
        const pathname = yield action.payload.location.pathname;
        switch (true) {
            case pathname.endsWith(`${PLANETS}`):
                yield fork(loadPlanets);
                break;
            case pathname.endsWith(`${VEHICLES}`):
                yield fork(loadVehicles);
                break;
            case pathname.endsWith(`${STARSHIPS}`):
                yield fork(loadStarships, null);
                break;
        }
    }
}