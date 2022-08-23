import { Component } from 'react';

// interface HeaderProps {
//     text: string;
//     fontSize?: number;
//     fontColor?: string;
// }

type HeaderProps = {
    text: string;
    fontSize?: number;
    fontColor?: string;
};

export class Header extends Component<HeaderProps> {
    render() {
        console.log('Inside Header component, this is', this);

        // .alert.alert-primary>.container>h1{React Basics}
        return (
            <div className='alert alert-primary'>
                <div className='container'>
                    <h1>{this.props.text}</h1>
                </div>
            </div>
        );
    }
}

export default Header;
