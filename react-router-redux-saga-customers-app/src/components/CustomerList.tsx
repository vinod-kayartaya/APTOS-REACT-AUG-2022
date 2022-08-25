import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ICustomer } from '../datatypes/customer-types';
import { StoreType } from '../datatypes/storeTypes';
import { fetchCustomers, deleteCustomer } from '../redux/customerActions';

const CustomerEntry = ({
    customer,
    deleteCustomer,
}: {
    customer: ICustomer;
    deleteCustomer: (id: number) => void;
}) => (
    <div className='row'>
        <div className='col-7'>
            <Link
                style={{ textDecoration: 'none' }}
                to={'/customer-details/' + customer.id}
            >
                {customer.gender === 'Male' ? 'Mr.' : 'Ms.'}{' '}
                {customer.firstname} {customer.lastname}
            </Link>
        </div>
        <div className='col-3'>{customer.city}</div>
        <div className='col-2'>
            <button
                onClick={() => deleteCustomer(customer.id)}
                style={{ textDecoration: 'none' }}
                className='btn btn-link'
            >
                &times;
            </button>
        </div>
    </div>
);

type CustomerListProps = {
    customers: Array<ICustomer>;
    error: string;
    loading: boolean;
    fetchCustomers: () => void;
    deleteCustomer: (id: number) => void;
};

export class CustomerList extends Component<CustomerListProps> {
    componentDidMount() {
        this.props.fetchCustomers();
    }

    render() {
        const { customers, error, loading, fetchCustomers, deleteCustomer } =
            this.props;

        const customerListJsx = customers.map((c) => (
            <li className='list-group-item' key={c.id}>
                <CustomerEntry customer={c} deleteCustomer={deleteCustomer} />
            </li>
        ));

        return (
            <>
                <h3>
                    Customer list{'   '}
                    <button
                        onClick={fetchCustomers}
                        className='btn btn-default rounded-circle'
                    >
                        <i className='bi bi-arrow-clockwise'></i>
                    </button>{' '}
                    <span className='text-warning' style={{ fontSize: '.5em' }}>
                        {loading ? 'loading...' : ''}
                    </span>
                </h3>

                {error && <p className='lead text-danger'>{error}</p>}

                <ul className='list-group' style={{ width: '700px' }}>
                    {customerListJsx}
                </ul>
            </>
        );
    }
}

const mapState = (store: StoreType) => ({
    customers: store.customerReducer.customers,
    error: store.customerReducer.error,
    loading: store.customerReducer.loading,
});
const mapDispatch = {
    fetchCustomers,
    deleteCustomer,
};

export default connect(mapState, mapDispatch)(CustomerList);
