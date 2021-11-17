import React from 'react';
import {Provider} from "react-redux";
import store from "./redux";
import {ConnectedRouter} from "connected-react-router";
import {history} from "./redux/reducers/rootReducer";
import Loader from "./components/loader";
import Routes from "./routes";

interface AppProps {

}

const App: React.FC<AppProps> = () => {

    return <div className="container">
        <React.StrictMode>
            <Provider store={store}>
                <Loader/>
                <ConnectedRouter history={history}>
                   <Routes />
                </ConnectedRouter>
            </Provider>
        </React.StrictMode>
    </div>;
}

export default App;
