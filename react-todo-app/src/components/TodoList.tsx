import { Component } from 'react';
import { ITodo } from '../types/todo-types';
import ActionButtons from './ActionButtons';
import TodoEntry from './TodoEntry';

type TodoListProps = {
    todos: Array<ITodo>;
    toggleTodoStatus: (id: number) => void;
    deleteTodo: (id: number) => void;
    deleteAll: () => void;
    deleteFinished: () => void;
    increasePriority: (id: number) => void;
    decreasePriority: (id: number) => void;
    updateTodoTask: (id: number, task: string) => void;
};
type TodoListState = {};

export class TodoList extends Component<TodoListProps, TodoListState> {
    render() {
        const {
            todos,
            toggleTodoStatus,
            deleteTodo,
            deleteAll,
            deleteFinished,
            updateTodoTask,
            increasePriority,
            decreasePriority,
        } = this.props;

        const todosJsx = todos.map((t) => (
            <li key={t.id} className='list-group-item'>
                <TodoEntry
                    increasePriority={increasePriority}
                    decreasePriority={decreasePriority}
                    updateTodoTask={updateTodoTask}
                    deleteTodo={deleteTodo}
                    toggleTodoStatus={toggleTodoStatus}
                    todo={t}
                />
            </li>
        ));

        return (
            <>
                <ul className='list-group'>{todosJsx}</ul>

                {todos.length > 0 ? (
                    <ActionButtons
                        deleteAll={deleteAll}
                        deleteFinished={deleteFinished}
                    />
                ) : (
                    <>
                        <h3 className='text-danger'>
                            No tasks yet. Please add one.
                        </h3>
                    </>
                )}
            </>
        );
    }
}

export default TodoList;
