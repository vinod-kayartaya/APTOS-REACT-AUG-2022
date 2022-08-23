import { Component } from 'react';

type TodoFormProps = {
    addTodo: (task: string) => void;
};
type TodoFormState = {
    task: string;
};

export class TodoForm extends Component<TodoFormProps, TodoFormState> {
    state = { task: '' };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!this.state.task) {
            return;
        }
        // call the addTodo() method which is currently in the App.tsx
        this.props.addTodo(this.state.task);
        this.setState({ task: '' });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.task}
                        onChange={(e) =>
                            this.setState({ task: e.target.value })
                        }
                        autoFocus
                        type='text'
                        className='form-control'
                        placeholder='What do you want to do next?'
                    />
                </form>
            </>
        );
    }
}

export default TodoForm;
