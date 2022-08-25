import { CustomerReducerType } from "../datatypes/storeTypes";
import { DELETE_CUSTOMER, DELETE_CUSTOMER_ERROR, DELETE_CUSTOMER_SUCCESS, FETCH_CUSTOMERS, FETCH_CUSTOMERS_ERROR, FETCH_CUSTOMERS_SUCCESS, FETCH_ONE_CUSTOMER, FETCH_ONE_CUSTOMER_ERROR, FETCH_ONE_CUSTOMER_SUCCESS } from "./actionTypes";

const initialState: CustomerReducerType = {
    customers: [],
    error: '',
    loading: false,
    customer: { id: 0, firstname: '', lastname: '', city: '', email: '', avatar: '', gender: '' }
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
        case DELETE_CUSTOMER: {
            return { ...state, loading: true, error: '' };
        }
        case DELETE_CUSTOMER_SUCCESS: {
            // ASSUMPTION: action.payload is the of the customer to be deleted.
            let { customers } = state;
            customers = customers.filter(c => c.id !== action.payload);
            return { ...state, customers, error: '', loading: false }
        }
        case FETCH_ONE_CUSTOMER: {
            return { ...state, error: '', loading: true }
        }
        case FETCH_ONE_CUSTOMER_SUCCESS: {
            // payload is assumed to be the ONE customer object based on the id
            return { ...state, customer: action.payload, loading: false, error: '' }
        }
        case FETCH_CUSTOMERS_ERROR:
        case DELETE_CUSTOMER_ERROR:
        case FETCH_ONE_CUSTOMER_ERROR:
            {
                return { ...state, error: action.payload, loading: false }
            }
    }
    return { ...state }
}

export default customerReducer;