import { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    Header,
    Home,
    CustomerForm,
    CustomerDetails,
    CustomerList,
    About,
} from './components';
import store from './redux/store';

export class App extends Component {
    render() {
        return (
            <>
                <Provider store={store}>
                    <Router>
                        <Header />
                        <div className='container'>
                            {/* define which pages/components to be loaded based on the URL path */}
                            <Switch>
                                <Route path='/' exact={true}>
                                    <Home />
                                </Route>
                                <Route path='/add-customer'>
                                    <CustomerForm />
                                </Route>
                                <Route path='/customers'>
                                    <CustomerList />
                                </Route>
                                <Route path='/customer-details/:customerId'>
                                    <CustomerDetails />
                                </Route>
                                <Route path='/about'>
                                    <About />
                                </Route>
                                <Route path='**'>
                                    <h3>
                                        Sorry! We don't have any content for the
                                        requested URL
                                    </h3>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </Provider>
            </>
        );
    }
}

export default App;
