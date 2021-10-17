import {all, delay, fork} from "redux-saga/effects";

export function* auth() {
    yield delay(2000);
    return true;
}

export function* importUsers() {
    yield delay(5000);
    return true;
}

export function* initialSaga() {
    yield all([
        fork(auth),
        fork(importUsers)
    ])
}