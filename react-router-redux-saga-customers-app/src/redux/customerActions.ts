// action creators are regular JS functions, that may (may not) take parametrers, and return a redux action object
// with type and payload properties.

import { ICustomer } from "../datatypes/customer-types";
import { ADD_CUSTOMER, DELETE_CUSTOMER, FETCH_CUSTOMERS, FETCH_CUSTOMERS_SUCCESS } from "./actionTypes";

export const fetchCustomers = () => ({
    type: FETCH_CUSTOMERS
});

export const fetchCustomersSuccess = (customers: Array<ICustomer>) => ({
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: customers
});







export const addCustomer = (customer: ICustomer) => ({
    type: ADD_CUSTOMER,
    payload: customer
});

export const deleteCustomer = (id: number) => ({
    type: DELETE_CUSTOMER,
    payload: id
});