import {compose, createStore, applyMiddleware} from "redux";
import {history, rootReducer} from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/rootSaga";
import {routerMiddleware} from "connected-react-router";

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const store = createStore(rootReducer, compose(applyMiddleware(routerMiddleware(history), sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
sagaMiddleware.run(rootSaga);
export type storeType = ReturnType<typeof store.getState>;
export default store;