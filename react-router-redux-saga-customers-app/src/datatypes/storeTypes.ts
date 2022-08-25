import { ICustomer } from "./customer-types"

export type CustomerReducerType = {
    customers: Array<ICustomer>;
    error: string;
    loading: boolean;
}

export type StoreType = {
    customerReducer: CustomerReducerType
}