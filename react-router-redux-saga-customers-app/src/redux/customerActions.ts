// action creators are regular JS functions, that may (may not) take parametrers, and return a redux action object
// with type and payload properties.

import { ICustomer } from "../datatypes/customer-types";
import { ADD_CUSTOMER, DELETE_CUSTOMER, DELETE_CUSTOMER_ERROR, DELETE_CUSTOMER_SUCCESS, FETCH_CUSTOMERS, FETCH_CUSTOMERS_ERROR, FETCH_CUSTOMERS_SUCCESS, FETCH_ONE_CUSTOMER, FETCH_ONE_CUSTOMER_ERROR, FETCH_ONE_CUSTOMER_SUCCESS } from "./actionTypes";
// Dispatched by the user event (like button click)
export const fetchCustomers = () => ({
    type: FETCH_CUSTOMERS
});

// Dispatched by the Saga middleware
export const fetchCustomersSuccess = (customers: Array<ICustomer>) => ({
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: customers
});

// Dispatched by the Saga middleware
export const fetchCustomersError = (error: string) => ({
    type: FETCH_CUSTOMERS_ERROR,
    payload: error
})


// Dispatched by the user event (like button click)
export const fetchOneCustomer = (id: number) => ({
    type: FETCH_ONE_CUSTOMER,
    payload: id
});

// Dispatched by the Saga middleware
export const fetchOneCustomerSuccess = (customer: ICustomer) => ({
    type: FETCH_ONE_CUSTOMER_SUCCESS,
    payload: customer
});

// Dispatched by the Saga middleware
export const fetchOneCustomerError = (error: string) => ({
    type: FETCH_ONE_CUSTOMER_ERROR,
    payload: error
})

// Dispatched by the user event (like button click)
export const deleteCustomer = (id: number) => ({
    type: DELETE_CUSTOMER,
    payload: id
});

// Dispatched by the Saga middleware
export const deleteCustomerSuccess = (id: number) => ({
    type: DELETE_CUSTOMER_SUCCESS,
    payload: id
});
// Dispatched by the Saga middleware
export const deleteCustomerError = (error: string) => ({
    type: DELETE_CUSTOMER_ERROR,
    payload: error
})





export const addCustomer = (customer: ICustomer) => ({
    type: ADD_CUSTOMER,
    payload: customer
});
