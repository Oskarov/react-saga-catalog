import {put} from "redux-saga/effects";
import {loadingAction} from "../../actions/rootActions";
import {IRootUrls} from "../../../interfaces";
import starshipsService from "../../../api/services/starships-service";
import {setAllStarships} from "../../actions/starshipsActions";

export function* loadStarships() {
    yield put(loadingAction(true));
    const data: IRootUrls | false = yield starshipsService.getAll();
    if (data) {
        yield put(setAllStarships(data));
    }
    yield put(loadingAction(false));
    return true;
}