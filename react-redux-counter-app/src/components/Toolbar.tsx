import { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement, doubleUp } from '../redux/counterActions';

interface ToolbarProps {
    inc: () => void;
    decrement: () => void;
    doubleUp: () => void;
}

export class Toolbar extends Component<ToolbarProps> {
    render() {
        return (
            <div>
                <button
                    onClick={(e) => this.props.inc()}
                    className='btn btn-outline-secondary'
                >
                    Increment
                </button>
                <button
                    onClick={(e) => this.props.decrement()}
                    className='btn btn-outline-secondary'
                >
                    Decrement
                </button>
                <button
                    onClick={(e) => this.props.doubleUp()}
                    className='btn btn-outline-secondary'
                >
                    Double up
                </button>
            </div>
        );
    }
}

const mapState = null;
const mapDispatch = {
    inc: () => ({ type: 'NUM_INC' }),
    decrement: () => ({ type: 'NUM_DEC' }),
    doubleUp: () => ({ type: 'NUM_DOUBLE_UP' }),
};

export default connect(mapState, mapDispatch)(Toolbar);
