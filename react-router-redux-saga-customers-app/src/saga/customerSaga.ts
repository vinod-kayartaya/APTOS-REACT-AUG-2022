import axios from "axios"
import { call, put, takeLatest } from 'redux-saga/effects'
import { IAxiosResponse } from "../datatypes/axios";
import { FETCH_CUSTOMERS, FETCH_CUSTOMERS_SUCCESS } from "../redux/actionTypes";

const baseUrl = 'http://localhost:8080/customers/';

const fetchCustomers = async () => {
    return await axios.get(baseUrl);
}

function* onFetchCustomers(action: any) {
    console.log('onFetchCustomers() called with action', action);

    // calls the async function as if it is a synchronous function
    const resp: IAxiosResponse = yield call(fetchCustomers);

    console.log('in onFetchCustomers(), the response contains', resp);

    // ask saga to dispatch a new action, handled by the reducer
    yield put({ type: FETCH_CUSTOMERS_SUCCESS, payload: resp.data })
}

// map all saga handlers to actions being dispatched by the user event
function* CustomerSaga() {
    yield takeLatest(FETCH_CUSTOMERS, onFetchCustomers);
}

export default CustomerSaga;