import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "../saga/rootSaga";

// TBD: 
// 1. Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// 2. apply one ore more middlewares to the store by calling applyMidlleware() method
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// 3. run the "saga"
sagaMiddleware.run(rootSaga)

export default store;