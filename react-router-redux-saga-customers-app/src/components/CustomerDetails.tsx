import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { StoreType } from '../datatypes/storeTypes';
import { fetchOneCustomer } from '../redux/customerActions';

const CustomerDetails = () => {
    const { customer, loading } = useSelector(
        (store: StoreType) => store.customerReducer
    );
    const params: any = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const customerId = params.customerId;
        dispatch(fetchOneCustomer(customerId));
    }, []);

    return (
        <>
            {loading ? (
                'Loading... pls wait!'
            ) : (
                <div>
                    <h3>
                        <img
                            src={customer.avatar}
                            alt={customer.firstname}
                            className='img-thumnail'
                        />
                        {customer.gender === 'Male' ? 'Mr.' : 'Ms.'}{' '}
                        {customer.firstname} {customer.lastname}
                    </h3>
                    <table className='table' style={{ width: '600px' }}>
                        <tbody>
                            <tr>
                                <td>Firstname</td>
                                <td>{customer.firstname}</td>
                            </tr>
                            <tr>
                                <td>Lastname</td>
                                <td>{customer.lastname}</td>
                            </tr>
                            <tr>
                                <td>Email address</td>
                                <td>{customer.email}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{customer.city}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{customer.gender}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default CustomerDetails;
