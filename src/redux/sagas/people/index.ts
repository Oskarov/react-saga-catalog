import {fork, put, take, select} from "redux-saga/effects";
import peopleService from "../../../api/services/people-service";
import {setPageAction, setPeopleListAction} from "../../actions/peopleActions";
import {CHANGE_PAGE, GET_PEOPLE_LIST} from "../../types/peopleTypes";

export function* peopleViewActionHandler() {
    yield fork(getPeopleList);
    yield fork(changePage);
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
        yield take(GET_PEOPLE_LIST);
        const {page, search} = yield select(state => state.people);
        yield fork(loadPeopleList, {payload: {page, search}});
    }
}

export function* changePage() {
    while (true) {
        const data = yield take(CHANGE_PAGE);
        if (data) {
            yield put(setPageAction(data.payload));
        }
    }
}
