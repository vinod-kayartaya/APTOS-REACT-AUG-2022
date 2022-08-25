import { Component } from 'react';
import { connect } from 'react-redux';
import { ICustomer } from '../datatypes/customer-types';
import { StoreType } from '../datatypes/storeTypes';
import { fetchCustomers } from '../redux/customerActions';

type CustomerListProps = {
    customers: Array<ICustomer>;
    error: string;
    loading: boolean;
    fetchCustomers: () => void;
};

export class CustomerList extends Component<CustomerListProps> {
    componentDidMount() {
        this.props.fetchCustomers();
    }

    render() {
        const { customers, error, loading, fetchCustomers } = this.props;

        return (
            <>
                <h3>
                    Customer list{'   '}
                    <button
                        onClick={fetchCustomers}
                        className='btn btn-default rounded-circle'
                    >
                        <i className='bi bi-arrow-clockwise'></i>
                    </button>
                </h3>
                <p className='lead'>{loading ? 'loading...' : ''}</p>
                <ul className='list-group' style={{ width: '500px' }}>
                    {customers.map((c) => (
                        <li className='list-group-item' key={c.id}>
                            <div className='row'>
                                <div className='col-8'>
                                    {c.gender === 'Male' ? 'Mr.' : 'Ms.'}{' '}
                                    {c.firstname} {c.lastname}
                                </div>
                                <div className='col-4'>{c.city}</div>
                            </div>
                        </li>
                    ))}
                </ul>
                {error && <p className='lead text-danger'>{error}</p>}
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
};

export default connect(mapState, mapDispatch)(CustomerList);
