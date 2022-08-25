import { Component } from 'react';

export class Greetings extends Component<any> {
    state = { message: 'Hello, World!' };

    componentDidMount() {
        const { message } = this.props;
        if (message) {
            this.setState({ message: this.props.message });
        }
    }

    render() {
        return (
            <>
                <h1 data-testid='msg'>{this.state.message}</h1>

                <button
                    data-testid='btnChangeToUpper'
                    onClick={() =>
                        this.setState({
                            message: this.state.message.toUpperCase(),
                        })
                    }
                >
                    Change to upper case
                </button>
            </>
        );
    }
}

export default Greetings;
