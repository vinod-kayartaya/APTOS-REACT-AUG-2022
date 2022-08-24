import { Component } from 'react';
import { IContact } from '../types/contactType';
import { connect } from 'react-redux';
import ContactCard from './ContactCard';

interface ContactListProps {
    contacts: Array<IContact>;
}

export class ContactList extends Component<ContactListProps> {
    render() {
        const contactListJsx = this.props.contacts.map((c: IContact) => (
            <li className='list-group-item' key={c.id}>
                <ContactCard contact={c} />
            </li>
        ));

        return (
            <>
                <ul className='list-group'>{contactListJsx}</ul>
            </>
        );
    }
}

const mapState = (store: any) => ({
    contacts: store.contactReducer.contacts,
});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(ContactList);
