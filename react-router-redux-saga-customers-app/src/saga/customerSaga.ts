import axios from "axios"
import { call, put, takeLatest } from 'redux-saga/effects'
import { IAxiosResponse } from "../datatypes/axios";
import { DELETE_CUSTOMER, FETCH_CUSTOMERS, FETCH_ONE_CUSTOMER, } from "../redux/actionTypes";
import { deleteCustomerError, deleteCustomerSuccess, fetchCustomersError, fetchCustomersSuccess, fetchOneCustomerError, fetchOneCustomerSuccess } from "../redux/customerActions";

const baseUrl = 'http://localhost:8080/customers/';

const fetchCustomers = async () => {
    return await axios.get(baseUrl);
}

function* onFetchCustomers(action: any) {
    try {
        // calls the async function as if it is a synchronous function
        const resp: IAxiosResponse = yield call(fetchCustomers);
        // ask saga to dispatch a new action, handled by the reducer
        // yield put({ type: FETCH_CUSTOMERS_SUCCESS, payload: resp.data })
        yield put(fetchCustomersSuccess(resp.data))
    }
    catch (error: any) {
        yield put(fetchCustomersError(error.message))
    }
}

const deleteCustomer = async (id: number) => {
    return await axios.delete(baseUrl + id)
}

function* onDeleteCustomer(action: any) {
    try {
        yield call(deleteCustomer, action.payload)
        yield put(deleteCustomerSuccess(action.payload));
    }
    catch (error: any) {
        yield put(deleteCustomerError(error.message))
    }
}

const fetchOneCustomer = async (id: number) => {
    return await axios.get(baseUrl + id);
}
function* onFetchOneCustomer(action: any) {
    try {
        const resp: IAxiosResponse = yield call(fetchOneCustomer, action.payload);
        yield put(fetchOneCustomerSuccess(resp.data))
    }
    catch (error: any) {
        yield put(fetchOneCustomerError(error.message))
    }
}

// map all saga handlers to actions being dispatched by the user event
function* CustomerSaga() {
    yield takeLatest(FETCH_CUSTOMERS, onFetchCustomers);
    yield takeLatest(DELETE_CUSTOMER, onDeleteCustomer);
    yield takeLatest(FETCH_ONE_CUSTOMER, onFetchOneCustomer);
}

export default CustomerSaga;