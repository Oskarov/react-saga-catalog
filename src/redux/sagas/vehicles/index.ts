import {fork, put, actionChannel, take, call} from "redux-saga/effects";
import {IRootUrls} from "../../../interfaces";
import vehiclesService from "../../../api/services/vehicles-service";
import {setAllVehicles} from "../../actions/vehiclesActions";
import {REFRESH_VEHICLES} from "../../types/vehiclesTypes";

export function* vehiclesViewActionHandler() {
   yield fork(refreshVehicles);
}

export function* loadVehicles() {
    const data: IRootUrls | false = yield vehiclesService.getAll();
    if (data) {
        yield put(setAllVehicles(data));
    }
    return true;
}

export function* refreshVehicles() {
    const channel = yield actionChannel(REFRESH_VEHICLES);

    while (true) {
        yield take(channel);
        yield call(loadVehicles);
    }
}