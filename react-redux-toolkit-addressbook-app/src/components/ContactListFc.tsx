import { useSelector } from 'react-redux';
import { IContact } from '../types/contactType';
import ContactCardFc from './ContactCardFc';

const ContactListFc = () => {
    const contacts = useSelector((store: any) => store.contactReducer.contacts);

    return (
        <>
            <ul className='list-group'>
                {contacts.map((c: IContact) => (
                    <li className='list-group-item' key={c.id}>
                        <ContactCardFc contact={c} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ContactListFc;
