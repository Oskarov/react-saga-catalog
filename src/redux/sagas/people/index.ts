import {fork, put, take, takeEvery, select} from "redux-saga/effects";
import peopleService from "../../../api/services/people-service";
import {setPeopleListAction} from "../../actions/peopleActions";
import {GET_PEOPLE_LIST} from "../../types/peopleTypes";
import {Simulate} from "react-dom/test-utils";

export function* peopleViewActionHandler() {
    yield fork(getPeopleList);
}

export function* loadPeopleList({payload}) {
    const {page, search} = payload;
    const data = yield peopleService.getList(page, search);
    if (data) {
        yield put(setPeopleListAction(data));
    }
}

export function* getPeopleList() {
    while (true) {
        const data = yield take(GET_PEOPLE_LIST);
        const {page, search} = yield select(state => state.people);
        yield fork(loadPeopleList, {payload: {page, search}});
    }
}

