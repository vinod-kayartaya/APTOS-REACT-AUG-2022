import { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        // to be replaced by store's value
        const customerCount = 1234;
        return (
            <>
                <div className='alert alert-primary'>
                    <div className='container'>
                        <h1>Customers Dashboard</h1>
                    </div>
                </div>
                <div className='container'>
                    <Link
                        style={{ paddingLeft: '0' }}
                        className='btn btn-link'
                        to='/'
                    >
                        Home
                    </Link>{' '}
                    <Link className='btn btn-link' to='/customers'>
                        Customer list
                    </Link>{' '}
                    <Link className='btn btn-link' to='/add-customer'>
                        Add new customer
                    </Link>{' '}
                    <Link className='btn btn-link' to='/about'>
                        About
                    </Link>
                    <p className='lead'>There are {customerCount} customers.</p>
                </div>
            </>
        );
    }
}

export default Header;
