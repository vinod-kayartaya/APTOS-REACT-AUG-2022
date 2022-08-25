import { Component } from 'react';
import { ContactCardProps } from '../types/contactType';
import { deleteContact, selectContact } from '../redux/contactSlice';
import { connect } from 'react-redux';

export class ContactCard extends Component<ContactCardProps> {
    render() {
        const { contact, deleteContact, selectContact } = this.props;
        return (
            <>
                <div className='row'>
                    <div
                        className='col-10'
                        style={{ cursor: 'pointer' }}
                        onClick={() => selectContact(contact.id)}
                    >
                        <h5>
                            {contact.firstname} {contact.lastname}
                        </h5>
                        <p className='lead'>{contact.city}</p>
                    </div>
                    <div className='col-2'>
                        <button
                            onClick={() => deleteContact(contact.id)}
                            style={{ textDecoration: 'none' }}
                            className='btn btn-link text-danger'
                        >
                            &times;
                        </button>
                    </div>
                </div>
            </>
        );
    }
}
const mapDispatch = {
    deleteContact,
    selectContact,
};
export default connect(null, mapDispatch)(ContactCard);
