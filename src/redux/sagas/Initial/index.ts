import {all, fork, put} from "redux-saga/effects";
import rootService from "../../../api/services/root-service";
import {IRootUrls} from "../../../interfaces";
import {loadingAction, setInitialData} from "../../actions/rootActions";

export function* loadUrls() {
    yield put(loadingAction(true));
    const data: IRootUrls | false = yield rootService.getInitialData();
    if (data) {
        yield put(setInitialData(data));
    }
    yield put(loadingAction(false));
    return true;
}

export function* initialSaga() {
    yield all([
        fork(loadUrls),
    ])
}