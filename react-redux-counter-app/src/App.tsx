import { Component } from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import CounterFc from './components/CounterFc';
import Toolbar from './components/Toolbar';
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

                    <hr />

                    <Counter />
                    <Toolbar />
                </div>
            </Provider>
        );
    }
}

export default App;
