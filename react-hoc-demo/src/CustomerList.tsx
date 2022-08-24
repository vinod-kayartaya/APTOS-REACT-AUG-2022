import { Component } from 'react';
import withLoading from './withLoading';
interface ICustomer {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    city: string;
    avatar: string;
}
interface CustomerListProps {
    customers: Array<ICustomer>;
}

export class CustomerList extends Component<CustomerListProps> {
    render() {
        const { customers } = this.props;
        const customerRowsJsx = customers.map((c: any) => (
            <tr key={c.id}>
                <td>
                    <img
                        src={c.avatar}
                        alt={c.firstname}
                        className='img-thumbnail'
                        style={{ height: '75px' }}
                    />
                </td>
                <td>
                    {c.gender === 'Male' ? 'Mr.' : 'Ms.'} {c.firstname}{' '}
                    {c.lastname}
                </td>
                <td>{c.city}</td>
                <td>{c.email}</td>
            </tr>
        ));

        return (
            <>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Customer name</th>
                            <th>City</th>
                            <th>Email address</th>
                        </tr>
                    </thead>
                    <tbody>{customerRowsJsx}</tbody>
                </table>
            </>
        );
    }
}

export default withLoading(CustomerList, 'customers');

// export default withLoading('customers')(CustomerList);
