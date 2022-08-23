import { Component } from 'react';

type IPost = {
    id: number;
    title: string;
};

type GreetingProps = {
    isUpper: boolean;
};
type GreetingState = {
    posts: Array<IPost>;
};

export class Greeting extends Component<GreetingProps, GreetingState> {
    state = { posts: [] };

    constructor(props: GreetingProps) {
        super(props);
        console.log('Greeting.constructor() called');
    }

    componentDidMount() {
        console.log('Greeting.componentDidMount() called.');
        fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5')
            .then((resp) => resp.json())
            .then((data) => this.setState({ posts: data }));
    }

    shouldComponentUpdate() {
        console.log('Greeting.shouldComponentUpdate() called');
        return true;
    }
    componentDidUpdate() {
        console.log('Greeting.componentDidUpdate() called');
    }

    componentWillUnmount() {
        console.log('Greeting.componentWillUnmount() called');
    }

    render() {
        console.log('Greeting.render() called');
        let msg = 'hello, world!';
        let { isUpper } = this.props;

        return (
            <>
                <h1>{isUpper ? msg.toUpperCase() : msg.toLowerCase()}</h1>
                <hr />
                <ul>
                    {this.state.posts.map((p: IPost) => (
                        <li key={p.id}>{p.title}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Greeting;
