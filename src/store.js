import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import rootReducer from "./reducers/rootReducer";
const initialState = {};


const loggerMiddleware = createLogger();
const middleware = [thunk, loggerMiddleware];
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;