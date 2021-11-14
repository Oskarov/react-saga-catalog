import {take, fork, put} from "redux-saga/effects";
import {LOCATION_CHANGE} from 'connected-react-router';
import {getRouteConfig, PEOPLE, PEOPLE_DETAILS, PLANETS, STARSHIPS, VEHICLES} from "../../../routes";
import {loadPlanets} from "../planets";
import {loadVehicles} from "../vehicles";
import {loadStarships} from "../starships";
import {getPeopleTarget, loadPeopleList} from "../people";
import {matchPath} from "react-router";
import {getPeopleTargetAction} from "../../actions/peopleActions";

export function* routesSaga() {
    while (true) {
        const action: any = yield take(LOCATION_CHANGE);
        const pathname = yield action.payload.location.pathname;
        const route = new RoutesComparator(pathname);

        const planetsRoute = yield route.match(PLANETS);
        const vehiclesRoute = yield route.match(VEHICLES);
        const starshipsRoute = yield route.match(STARSHIPS);
        const peopleRoute = yield route.match(PEOPLE);
        const peopleDetailsRoute = yield route.match(PEOPLE_DETAILS);

        switch (true) {
            case !!planetsRoute:
                yield fork(loadPlanets);
                break;
            case !!vehiclesRoute:
                yield fork(loadVehicles);
                break;
            case !!starshipsRoute:
                yield fork(loadStarships, null);
                break;
            case !!peopleRoute:
                yield fork(loadPeopleList, {payload: {search: '', page: 1}});
                break;
            case !!peopleDetailsRoute:
                yield put(getPeopleTargetAction(peopleDetailsRoute.params.id));
                break;
        }
    }
}


export interface IRoutesComparator {
    match: (id: string) => ReturnType<typeof matchPath>
}

class RoutesComparator implements IRoutesComparator {
    private readonly pathname: any;

    constructor(pathname) {
        this.pathname = pathname;
    }

    match(id): any {
        return matchPath(this.pathname, getRouteConfig(id));
    }
}
