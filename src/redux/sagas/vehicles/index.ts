import {put} from "redux-saga/effects";
import {loadingAction} from "../../actions/rootActions";
import {IRootUrls} from "../../../interfaces";
import vehiclesService from "../../../api/services/vehicles-service";
import {setAllVehicles} from "../../actions/vehiclesActions";

export function* loadVehicles() {
    yield put(loadingAction(true));
    const data: IRootUrls | false = yield vehiclesService.getAll();
    if (data) {
        yield put(setAllVehicles(data));
    }
    yield put(loadingAction(false));
    return true;
}