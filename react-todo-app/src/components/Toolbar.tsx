import { Component } from 'react';
import { ITodo } from '../types/todo-types';

type ToolbarProps = {
    todo: ITodo;
    deleteTodo: (id: number) => void;
    makeEdit: () => void;
    isEdit: boolean;
    increasePriority: (id: number) => void;
    decreasePriority: (id: number) => void;
};
type ToolbarState = {};

export class Toolbar extends Component<ToolbarProps, ToolbarState> {
    render() {
        const {
            todo,
            deleteTodo,
            makeEdit,
            isEdit,
            increasePriority,
            decreasePriority,
        } = this.props;

        return (
            <>
                <span id='toolbar'>
                    <button
                        disabled={isEdit}
                        onClick={makeEdit}
                        className='btn btn-link bi bi-pencil'
                    ></button>
                    <button
                        onClick={() => deleteTodo(todo.id)}
                        className='btn btn-link bi bi-trash'
                    ></button>
                    <button
                        onClick={() => increasePriority(todo.id)}
                        className='btn btn-link bi bi-arrow-up'
                    ></button>
                    <button
                        onClick={() => decreasePriority(todo.id)}
                        className='btn btn-link bi bi-arrow-down'
                    ></button>
                </span>
            </>
        );
    }
}

export default Toolbar;
