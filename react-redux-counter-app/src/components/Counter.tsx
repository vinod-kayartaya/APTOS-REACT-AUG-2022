import { Component } from 'react';
import { connect } from 'react-redux';

interface CounterProps {
    count: number;
}
interface CounterState {}
class Counter extends Component<CounterProps, CounterState> {
    render() {
        return (
            <>
                <h3>Value of count is {this.props.count}</h3>
            </>
        );
    }
}
const mapState = (store: any) => ({ count: store.numberReducer.num });
const mapDispatch = {};
const hoc = connect(mapState, mapDispatch);
export default hoc(Counter);
