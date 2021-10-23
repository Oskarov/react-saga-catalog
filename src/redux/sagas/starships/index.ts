import {put, fork, cancel, take} from "redux-saga/effects";
import {IRootUrls} from "../../../interfaces";
import starshipsService from "../../../api/services/starships-service";
import {setAllStarships} from "../../actions/starshipsActions";
import {REFRESH_STARSHIPS} from "../../types/starshipsTypes";
import axios from "axios";

export function* starshipsViewActionHandler() {
    yield fork(refreshStarships);
}

export function* loadStarships(cancelToken) {
 /*   yield put(loadingAction(true));*/
    const data: IRootUrls | false = yield starshipsService.getAll(cancelToken);
    if (data) {
        yield put(setAllStarships(data));
    }
  /*  yield put(loadingAction(false));*/
    return true;
}

export function* refreshStarships() {
    let task;
    const cancelToken = axios.CancelToken;
    let source = cancelToken.source();

    while (true) {
        yield take(REFRESH_STARSHIPS);
        if (task) {
            yield cancel(task);
            yield source.cancel("axios request cancelled");
            source = cancelToken.source();
        }
        task = yield fork(loadStarships, source);
    }
}