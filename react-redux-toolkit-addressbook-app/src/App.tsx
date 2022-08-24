import { Component } from 'react';
import { Provider } from 'react-redux';
import ContactList from './components/ContactList';
import ContactListFc from './components/ContactListFc';
import store from './redux/store';

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='container'>
                    <h1>React Redux-toolkit demo</h1>
                    <h3>Address book application</h3>
                    <hr />

                    <div className='row'>
                        <div className='col'>
                            <ContactList />
                        </div>
                        <div className='col'>
                            <ContactListFc />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
