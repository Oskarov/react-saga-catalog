import React from 'react';
import {Provider} from "react-redux";
import store from "./redux";
import {ConnectedRouter} from "connected-react-router";
import {history} from "./redux/reducers/rootReducer";
import {Route, Switch} from "react-router";
import Main from "./containers/main/main";
import Loader from "./components/loader";
import {PEOPLE, PLANETS, STARSHIPS, VEHICLES} from "./routes";
import Planets from "./containers/planets/planets";
import Vehicles from "./containers/vehicles/vehicles";
import Starships from "./containers/starships/starships";
import People from "./containers/people/people";

interface AppProps {

}

const App: React.FC<AppProps> = () => {

    return <div className="container">
        <React.StrictMode>
            <Provider store={store}>
                <Loader/>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path='/' exact>
                            <Main/>
                        </Route>
                        <Route path={`/${PLANETS}`}>
                            <Planets/>
                        </Route>
                        <Route path={`/${VEHICLES}`}>
                            <Vehicles/>
                        </Route>
                        <Route path={`/${STARSHIPS}`}>
                            <Starships/>
                        </Route>
                        <Route path={`/${PEOPLE}`}>
                            <People/>
                        </Route>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </React.StrictMode>
    </div>;
}

export default App;
