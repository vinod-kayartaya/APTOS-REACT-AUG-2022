import { all, fork } from 'redux-saga/effects'
import CustomerSaga from './customerSaga'

// equivalent of combineReducers() in rootReducer
export default function* rootSaga() {
    yield all([fork(CustomerSaga)]);
}