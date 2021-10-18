import {put} from "redux-saga/effects";
import {loadingAction} from "../../actions/rootActions";
import {IRootUrls} from "../../../interfaces";
import planetsService from "../../../api/services/planets-service";
import {setAllPlanets} from "../../actions/planetsActions";

export function* loadPlanets() {
    yield put(loadingAction(true));
    const data: IRootUrls | false = yield planetsService.getAll();
    if (data) {
        yield put(setAllPlanets(data));
    }
    yield put(loadingAction(false));
    return true;
}