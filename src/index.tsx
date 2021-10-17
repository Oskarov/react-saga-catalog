import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";
import {history} from "./redux/reducers/rootReducer";
import store from "./redux";
import {Route, Switch} from "react-router";
import Main from "./containers/main/main";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path='/' exact>
                        <Main/>
                    </Route>
                </Switch>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
