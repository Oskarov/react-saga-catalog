import {fork, put, take, select, takeLatest} from "redux-saga/effects";
import peopleService from "../../../api/services/people-service";
import {setPageAction, setPeopleListAction, setPeopleTargetAction, setSearchAction} from "../../actions/peopleActions";
import {CHANGE_PAGE, CHANGE_SEARCH, GET_PEOPLE_LIST, GET_PEOPLE_TARGET} from "../../types/peopleTypes";

export function* peopleViewActionHandler() {
    yield fork(getPeopleList);
    yield fork(changePage);
    yield fork(changeSearch);
    yield fork(getPeopleTarget);
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

export function* getPeopleTarget() {
    while (true) {
        const data = yield take(GET_PEOPLE_TARGET);
        if (data) {
            const target = yield peopleService.getPeopleTarget(data.payload);
            if (target) {
                yield put(setPeopleTargetAction(target));
            }
        }
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

export function* changeSearch() {
    yield takeLatest(CHANGE_SEARCH, takeSearch)
}

export function* takeSearch(data) {
    if (data) {
        yield put(setSearchAction(data.payload));
        const {page, search} = yield select(state => state.people);
        yield fork(loadPeopleList, {payload: {page, search}});
    }
}
