import { Component } from 'react';

export class CounterCcApp extends Component {
    state = { count: 0 };

    increment = () => {
        // arrow functions of a class preserve the context
        // 'this' always refers to the object of this component

        // do not mutate the state directly, since react will not aware of that.
        // use the 'setState' inherited method to make changes to the state.
        // When the state changes, the component is re-rendered
        // this.state.count++;
        this.setState({ count: this.state.count + 1 }, () =>
            console.log('after incrementing this.count is', this.state.count)
        );
    };

    decrement() {
        // a regular member function of a class based component
        // does not main the context, and does a context-switch when
        // invoked from a different context. Hence 'this' refers to
        // something else or nothing depending on who is calling
        // this.state.count--;
        this.setState({ count: this.state.count - 1 }, () =>
            console.log('after decrementing this.count is', this.state.count)
        );
    }

    render() {
        console.log('Inside the CounterCcApp.render() method and this is');

        return (
            <>
                <h1>Value of 'count' is {this.state.count}</h1>
                <button
                    onClick={this.increment}
                    className='btn btn-outline-primary'
                >
                    Increment
                </button>
                <button
                    onClick={this.decrement.bind(this)}
                    className='btn btn-outline-primary'
                >
                    Decrement
                </button>
            </>
        );
    }
}

export default CounterCcApp;
