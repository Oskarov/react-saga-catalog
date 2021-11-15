import {Route, Switch} from "react-router";
import Planets from "./containers/planets/planets";
import Vehicles from "./containers/vehicles/vehicles";
import Starships from "./containers/starships/starships";
import People from "./containers/people/people";
import PeopleDetails from "./containers/people/peopleDetails/peopleDetails";
import Main from "./containers/main/main";


export const MAIN = 'planets';
export const PLANETS = 'planets';
export const VEHICLES = 'vehicles';
export const STARSHIPS = 'starships';
export const PEOPLE = 'people';
export const PEOPLE_DETAILS = 'people-details';

export const routes = [
    {
        id: MAIN,
        path: '/',
        exact: true,
        component: Main
    },
    {
        id: PLANETS,
        path: `/${PLANETS}`,
        exact: true,
        component: Planets
    },
    {
        id: VEHICLES,
        path: `/${VEHICLES}`,
        exact: true,
        component: Vehicles
    },
    {
        id: STARSHIPS,
        path: `/${STARSHIPS}`,
        exact: true,
        component: Starships
    },
    {
        id: PEOPLE,
        path: `/${PEOPLE}`,
        exact: true,
        component: People
    },
    {
        id: PEOPLE_DETAILS,
        path: `/${PEOPLE}/:id`,
        exact: true,
        component: PeopleDetails
    }
];

export const getRouteConfig = (id: string) => {
    const route = routes.find(r => r.id === id);

    if (route) {
        const {component, ...rest} = route;
        return rest;
    }
    return routes[0];
}

export default function Routes() {
    return (
        <Switch>
            {routes.map(r => {
                const {id, ...props} = r;

                return (
                    <Route key={id} {...props} />
                );
            })}
        </Switch>
    )
}