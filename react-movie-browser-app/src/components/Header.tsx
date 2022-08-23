import { Component } from 'react';

type HeaderProps = {
    fetchMovies: (searchText: string) => void;
};

export class Header extends Component<HeaderProps> {
    state = { searchText: localStorage.searchText || '' };

    changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchText: e.target.value });
    };

    submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!this.state.searchText) {
            return;
        }
        // we must call a method coming from the parent as prop to fetch new movies based on
        // the search text
        this.props.fetchMovies(this.state.searchText);
        localStorage.setItem('searchText', this.state.searchText);
    };

    render() {
        return (
            <>
                <div className='alert alert-primary'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'>
                                <h3>MovieBrowser</h3>
                            </div>
                            <div className='col-8'>
                                <form onSubmit={this.submitHandler}>
                                    {/* a HTML input which is tightly bound with the 
                                    state is a.k.a a controlled input */}
                                    <input
                                        value={this.state.searchText}
                                        onChange={this.changeHandler}
                                        autoFocus
                                        type='search'
                                        className='form-control'
                                        placeholder='type the movie you are looking for...'
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
