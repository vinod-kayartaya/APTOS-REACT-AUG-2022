import { Component } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ITodo } from './types/todo-types';

type AppProps = {};
type AppState = {
    todos: ITodo[];
};

const dummyTodos: Array<ITodo> = [
    {
        id: 1,
        task: 'Create a React Todo app',
        finished: true,
    },
    {
        id: 2,
        task: 'Create a React Movie Browser app',
        finished: true,
    },
    {
        id: 3,
        task: 'Learn React Redux',
        finished: false,
    },
    {
        id: 4,
        task: 'Learn React Routing',
        finished: true,
    },
];

export class App extends Component<AppProps, AppState> {
    state = { todos: dummyTodos };

    addTodo = (task: string) => {
        const id =
            this.state.todos.length > 0
                ? 1 + Math.max(...this.state.todos.map((t) => t.id))
                : 1;
        const { todos } = this.state;
        todos.push({ id, task, finished: false });
        this.setState({ todos });
    };

    deleteTodo = (id: number) => {
        const todos = this.state.todos.filter((t) => t.id !== id);
        this.setState({ todos });
    };

    deleteAll = () => {
        this.setState({ todos: [] });
    };

    deleteFinished = () => {
        const todos = this.state.todos.filter((t) => t.finished === false);
        this.setState({ todos });
    };

    toggleTodoStatus = (id: number) => {
        const { todos } = this.state;
        const todo = todos.find((t) => t.id === id);
        if (todo) {
            todo.finished = !todo.finished;
            this.setState({ todos });
        }
    };

    updateTodoTask = (id: number, task: string): void => {
        const { todos } = this.state;
        const todo = todos.find((t) => t.id === id);
        if (todo) {
            todo.task = task;
            this.setState({ todos });
        }
    };

    increasePriority = (id: number): void => {
        const { todos } = this.state;
        const index = todos.findIndex((t) => t.id === id);
        if (index <= 0) {
            return;
        }
        const tmp = todos[index];
        todos[index] = todos[index - 1];
        todos[index - 1] = tmp;
        this.setState({ todos });
    };

    decreasePriority = (id: number): void => {
        const { todos } = this.state;
        const index = todos.findIndex((t) => t.id === id);
        if (index === -1 || index === todos.length - 1) {
            return;
        }
        const tmp = todos[index];
        todos[index] = todos[index + 1];
        todos[index + 1] = tmp;
        this.setState({ todos });
    };

    get todoCount() {
        return this.state.todos.length;
    }

    get finishedTodoCount() {
        return this.state.todos.filter((t) => t.finished === true).length;
    }

    get pendingTodoCount() {
        return this.state.todos.filter((t) => t.finished === false).length;
    }

    render(): JSX.Element {
        const props = {
            todos: this.state.todos,
            addTodo: this.addTodo,
            increasePriority: this.increasePriority,
            decreasePriority: this.decreasePriority,
            updateTodoTask: this.updateTodoTask,
            deleteAll: this.deleteAll,
            deleteTodo: this.deleteTodo,
            deleteFinished: this.deleteFinished,
            toggleTodoStatus: this.toggleTodoStatus,
        };

        return (
            <>
                <Header
                    finished={this.finishedTodoCount}
                    pending={this.pendingTodoCount}
                    total={this.todoCount}
                />

                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <TodoForm addTodo={this.addTodo} />
                        </div>
                        <div className='col'>
                            <TodoList {...props} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
