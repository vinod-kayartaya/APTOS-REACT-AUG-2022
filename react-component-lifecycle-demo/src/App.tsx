import { Component } from 'react';
import Greeting from './Greeting';

export class App extends Component {
    state = { isUpper: true, showGreeting: true };

    render() {
        return (
            <>
                <div className='container'>
                    <button
                        onClick={() =>
                            this.setState({
                                ...this.state,
                                isUpper: !this.state.isUpper,
                            })
                        }
                        className='btn btn-primary'
                    >
                        Toggle case
                    </button>
                    <button
                        onClick={() =>
                            this.setState({
                                ...this.state,
                                showGreeting: !this.state.showGreeting,
                            })
                        }
                        className='btn btn-primary'
                    >
                        Show/hide Greeting
                    </button>

                    {this.state.showGreeting && (
                        <Greeting isUpper={this.state.isUpper} />
                    )}
                </div>
            </>
        );
    }
}

export default App;
