import {call, spawn, all, fork} from 'redux-saga/effects';
import {initialSaga} from "./Initial";
import {routesSaga} from "./routes";
import {planetsViewActionHandler} from "./planets";
import {starshipsViewActionHandler} from "./starships";
import {vehiclesViewActionHandler} from "./vehicles";

function* viewActionHandler() {
    yield fork(planetsViewActionHandler);
    yield fork(starshipsViewActionHandler);
    yield fork(vehiclesViewActionHandler);
}

export default function* rootSaga() {
    const sagas = [initialSaga, routesSaga, viewActionHandler];
    const retrySagas = sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    break;
                } catch (e) {
                    console.log(e)
                }
            }
        })
    });
    yield all(retrySagas);
}