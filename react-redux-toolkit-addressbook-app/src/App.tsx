import { Component } from 'react';
import { Provider } from 'react-redux';
import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
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
                            <ContactForm />
                        </div>
                        <div className='col'>
                            <ContactList />
                        </div>
                        <div className='col'>
                            <ContactDetails />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
