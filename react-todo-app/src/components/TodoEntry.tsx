import { Component } from 'react';
import { ITodo } from '../types/todo-types';
import Toolbar from './Toolbar';

type TodoEntryProps = {
    todo: ITodo;
    toggleTodoStatus: (id: number) => void;
    deleteTodo: (id: number) => void;
    updateTodoTask: (id: number, task: string) => void;
    increasePriority: (id: number) => void;
    decreasePriority: (id: number) => void;
};
type TodoEntryState = {
    isEdit: boolean;
    task: string;
};

export class TodoEntry extends Component<TodoEntryProps, TodoEntryState> {
    state = { isEdit: false, task: this.props.todo.task };

    submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // invoke the updateTodoTask which is in App.tsx
        this.props.updateTodoTask(this.props.todo.id, this.state.task);
        this.setState({ ...this.state, isEdit: false });
    };

    makeEdit = () => {
        this.setState({ ...this.state, isEdit: true });
    };

    render() {
        const {
            todo,
            toggleTodoStatus,
            deleteTodo,
            increasePriority,
            decreasePriority,
        } = this.props;

        return (
            <>
                <div id='todoEntry'>
                    <div className='row'>
                        <div className='col-7'>
                            {this.state.isEdit ? (
                                <form onSubmit={this.submitHandler}>
                                    <input
                                        type='text'
                                        value={this.state.task}
                                        onChange={(e) =>
                                            this.setState({
                                                ...this.state,
                                                task: e.target.value,
                                            })
                                        }
                                        className='form-control'
                                    />
                                </form>
                            ) : (
                                <span
                                    onClick={() => toggleTodoStatus(todo.id)}
                                    className='lead'
                                    style={{
                                        textDecoration: todo.finished
                                            ? 'line-through'
                                            : 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {todo.task}
                                </span>
                            )}
                        </div>
                        <div className='col-5'>
                            <Toolbar
                                increasePriority={increasePriority}
                                decreasePriority={decreasePriority}
                                isEdit={this.state.isEdit}
                                makeEdit={this.makeEdit}
                                todo={todo}
                                deleteTodo={deleteTodo}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TodoEntry;
