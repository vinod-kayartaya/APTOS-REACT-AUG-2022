import { CustomerReducerType } from "../datatypes/storeTypes";
import { FETCH_CUSTOMERS, FETCH_CUSTOMERS_ERROR, FETCH_CUSTOMERS_SUCCESS } from "./actionTypes";

const initialState: CustomerReducerType = {
    customers: [],
    error: '',
    loading: false
}

type ActionType = {
    type: string;
    payload: any;
}

function customerReducer(state = initialState, action: ActionType) {
    console.log('customerReducer called with action', action);
    switch (action.type) {
        case FETCH_CUSTOMERS: {
            return { ...state, loading: true, error: '' };
        }
        case FETCH_CUSTOMERS_SUCCESS: {
            return { ...state, customers: action.payload, error: '', loading: false }
        }
        case FETCH_CUSTOMERS_ERROR: {
            return { ...state, customers: [], error: action.payload, loading: false }
        }
    }
    return { ...state }
}

export default customerReducer;