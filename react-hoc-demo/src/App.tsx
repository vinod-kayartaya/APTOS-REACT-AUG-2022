import { Component } from 'react';
import CustomerList from './CustomerList';

export class App extends Component {
    state = { customers: [] };

    async componentDidMount() {
        console.log('App.componentDidMount() called');
        const resp = await fetch('http://localhost:8080/customers');
        const customers = await resp.json();
        this.setState({ customers });
        console.log(customers);
    }

    render() {
        console.log('App.render() called');
        return (
            <>
                <div className='container'>
                    <h1>Customer list</h1>
                    <hr />
                    <CustomerList
                        customers={this.state.customers}
                        firstname='Vinod'
                        lastname='Kumar'
                    />
                </div>
            </>
        );
    }
}

export default App;
