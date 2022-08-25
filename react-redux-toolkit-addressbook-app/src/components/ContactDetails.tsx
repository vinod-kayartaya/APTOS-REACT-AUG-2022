import { Component } from 'react';
import { connect } from 'react-redux';
import { IContact } from '../types/contactType';
import { setIsEditing } from '../redux/contactSlice';

type ContactDetailsProps = {
    contact: IContact;
    setIsEditing: (tf: boolean) => void;
};

export class ContactDetails extends Component<ContactDetailsProps> {
    render() {
        const { contact, setIsEditing } = this.props;

        return (
            <>
                {contact.id && (
                    <>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td>ID</td>
                                    <td>{contact.id}</td>
                                </tr>
                                <tr>
                                    <td>Firstname</td>
                                    <td>{contact.firstname}</td>
                                </tr>
                                <tr>
                                    <td>Lastname</td>
                                    <td>{contact.lastname}</td>
                                </tr>
                                <tr>
                                    <td>Email address</td>
                                    <td>{contact.email}</td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td>{contact.city}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button
                            onClick={() => setIsEditing(true)}
                            className='btn btn-primary'
                        >
                            Edit
                        </button>
                    </>
                )}
            </>
        );
    }
}

const mapState = (store: any) => ({
    contact: store.contactReducer.selectedContact,
});
const mapDispatch = {
    setIsEditing,
};

export default connect(mapState, mapDispatch)(ContactDetails);
