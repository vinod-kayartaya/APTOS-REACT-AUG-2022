import { Component } from 'react';

interface NamesAppProps {
    names: Array<string>; // names: string[]
}

export class NamesApp extends Component<NamesAppProps> {
    render() {
        // destructuring of object
        const { names } = this.props;
        // const namesJsx = [
        //     <li key={0}>Vinod</li>,
        //     <li key={1}>John</li>,
        //     <li key={2}>Jane</li>,
        //     <li key={3}>Kiran</li>,
        //     <li key={4}>Kishore</li>,
        // ];

        const namesJsx = names.map((name, index) => (
            <li key={index}>{name}</li>
        ));

        return (
            <>
                <h1>The list of names are: </h1>
                <ul>{namesJsx}</ul>
            </>
        );
    }
}

export default NamesApp;
