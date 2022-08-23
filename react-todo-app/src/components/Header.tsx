import { Component } from 'react';

type HeaderProps = {
    total: number;
    finished: number;
    pending: number;
};
type HeaderState = {};

export class Header extends Component<HeaderProps, HeaderState> {
    render() {
        const { total, pending, finished } = this.props;

        return (
            <>
                <div className='alert alert-primary'>
                    <div className='container'>
                        <h1>Todo App (using class components)</h1>
                        <p className='lead'>
                            Total {total} ({pending} pending and {finished}{' '}
                            finished)
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
