import {call, put, take} from "redux-saga/effects";
import {loadingAction} from "../../actions/rootActions";
import planetsService from "../../../api/services/planets-service";
import {setAllPlanets} from "../../actions/planetsActions";
import {IPlanet} from "../../../interfaces/planets";
import {SELECT_PLANET} from "../../types/planetsTypes";

export function* planetsViewActionHandler(){
    yield call(selectPlanet);
}

export function* loadPlanets() {
    yield put(loadingAction(true));
    const data: IPlanet[] | false = yield planetsService.getAll();
    if (data) {
        yield put(setAllPlanets(data.map(planet => {
            return {
                ...planet,
                selected: false
            }
        })));
    }
    yield put(loadingAction(false));
    return true;
}

export function* selectPlanet() {
    while (true){
        const planetName = yield take(SELECT_PLANET);
        console.log(planetName);
    }
}