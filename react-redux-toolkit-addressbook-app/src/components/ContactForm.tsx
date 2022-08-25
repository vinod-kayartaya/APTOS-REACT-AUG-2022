import { Component } from 'react';
import { connect } from 'react-redux';
import { IContact } from '../types/contactType';
import { addContact, updateContact, setIsEditing } from '../redux/contactSlice';

type ContactFormProps = {
    addContact: (contact: IContact) => void;
    updateContact: (contact: IContact) => void;
    isEditing: boolean;
    selectedContact: IContact;
    setIsEditing: (tf: boolean) => void;
};
type ContactFormState = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    city: string;
};

export class ContactForm extends Component<ContactFormProps, ContactFormState> {
    state = { id: 0, firstname: '', lastname: '', email: '', city: '' };

    changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (this.props.isEditing === true) {
            this.props.updateContact(this.state);
        } else {
            this.props.addContact(this.state);
        }

        this.setState({
            id: 0,
            firstname: '',
            lastname: '',
            email: '',
            city: '',
        });
    };

    componentDidUpdate() {
        const { isEditing, selectedContact } = this.props;

        if (
            isEditing === true &&
            selectedContact &&
            this.state.id !== selectedContact.id
        ) {
            this.setState({ ...this.state, ...this.props.selectedContact });
        }
    }

    render() {
        return (
            <>
                <h5>Add a new contact: </h5>
                <form onSubmit={this.submitHandler}>
                    <div className='row mb-3'>
                        <label className='col-4 form-label' htmlFor='firstname'>
                            Firstname
                        </label>
                        <div className='col-8'>
                            <input
                                autoFocus
                                type='text'
                                className='form-control'
                                id='firstname'
                                name='firstname'
                                value={this.state.firstname}
                                onChange={this.changeHandler}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className='col-4 form-label' htmlFor='lastname'>
                            Lastname
                        </label>
                        <div className='col-8'>
                            <input
                                type='text'
                                className='form-control'
                                id='lastname'
                                name='lastname'
                                value={this.state.lastname}
                                onChange={this.changeHandler}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className='col-4 form-label' htmlFor='email'>
                            Email address
                        </label>
                        <div className='col-8'>
                            <input
                                type='email'
                                className='form-control'
                                id='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.changeHandler}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label className='col-4 form-label' htmlFor='city'>
                            City
                        </label>
                        <div className='col-8'>
                            <input
                                type='text'
                                className='form-control'
                                id='city'
                                name='city'
                                value={this.state.city}
                                onChange={this.changeHandler}
                            />
                        </div>
                    </div>

                    <button type='submit' className='btn btn-primary'>
                        {this.props.isEditing ? 'Update' : 'Add'}
                    </button>
                    <button
                        type='button'
                        onClick={() => {
                            this.props.setIsEditing(false);
                            this.setState({
                                id: 0,
                                firstname: '',
                                lastname: '',
                                email: '',
                                city: '',
                            });
                        }}
                        className='btn btn-link'
                    >
                        Cancel
                    </button>
                </form>
            </>
        );
    }
}

const mapState = (store: any) => ({
    isEditing: store.contactReducer.isEditing,
    selectedContact: store.contactReducer.selectedContact,
});
const mapDispatch = {
    addContact,
    updateContact,
    setIsEditing,
};

export default connect(mapState, mapDispatch)(ContactForm);
