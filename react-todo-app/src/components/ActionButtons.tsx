import { Component } from 'react';

type ActionButtonsProps = {
    deleteAll: () => void;
    deleteFinished: () => void;
};

export class ActionButtons extends Component<ActionButtonsProps> {
    render() {
        return (
            <>
                <button
                    onClick={() => this.props.deleteAll()}
                    className='btn btn-outline-danger'
                >
                    Delete all
                </button>
                <button
                    onClick={this.props.deleteFinished}
                    className='btn btn-outline-danger'
                >
                    Delete finished tasks
                </button>
            </>
        );
    }
}

export default ActionButtons;
