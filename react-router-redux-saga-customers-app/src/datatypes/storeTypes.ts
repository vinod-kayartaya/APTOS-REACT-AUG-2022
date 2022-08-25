import { ICustomer } from "./customer-types"

export type CustomerReducerType = {
    customers: Array<ICustomer>;
    error: string;
    loading: boolean;
    customer: ICustomer;
}

export type StoreType = {
    customerReducer: CustomerReducerType
}