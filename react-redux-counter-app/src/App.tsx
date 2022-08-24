import { Component } from 'react';
import { Provider } from 'react-redux';
import CounterFc from './components/CounterFc';
import ToolbarFc from './components/ToolbarFc';
import store from './redux/store';

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='container'>
                    <h1>Simple React-Redux Application </h1>

                    <CounterFc />
                    <ToolbarFc />
                </div>
            </Provider>
        );
    }
}

export default App;
