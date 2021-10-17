import {call, spawn, all} from 'redux-saga/effects';
import {initialSaga} from "./Initial";

export default function* rootSaga() {
    const sagas = [initialSaga];
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