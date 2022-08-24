import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';

const ContactCardFc = (props: any) => {
    const { contact } = props;
    const dispatch = useDispatch();

    return (
        <>
            <div className='row'>
                <div className='col-10'>
                    <h5>
                        {contact.firstname} {contact.lastname}
                    </h5>
                    <p className='lead'>{contact.city}</p>
                </div>
                <div className='col-2'>
                    <button
                        onClick={() => dispatch(deleteContact(contact.id))}
                        style={{ textDecoration: 'none' }}
                        className='btn btn-link text-danger'
                    >
                        &times;
                    </button>
                </div>
            </div>
        </>
    );
};

export default ContactCardFc;
