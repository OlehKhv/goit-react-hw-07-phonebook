import { Notification } from './Notification';
import {
    ContactItem,
    ContactText,
    DeleteButton,
    SecondTitle,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectContacts,
    selectError,
    selectLoading,
} from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { deleteContact } from 'redux/contacts/slice';

export const Contacts = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);
    const filter = useSelector(selectFilter);

    const getFilteredContacts = () => {
        return contacts.filter(({ contactName }) =>
            contactName.toLowerCase().includes(filter.toLowerCase())
        );
    };

    return (
        <div>
            <SecondTitle>Contacts</SecondTitle>
            {getFilteredContacts().length ? (
                <ul>
                    {getFilteredContacts().map(
                        ({ id, contactName, contactNumber }) => {
                            return (
                                <ContactItem key={id}>
                                    <ContactText>
                                        🧑 {contactName}: {contactNumber}
                                    </ContactText>
                                    <DeleteButton
                                        onClick={() =>
                                            dispatch(deleteContact(id))
                                        }
                                    >
                                        ❌ Delete
                                    </DeleteButton>
                                </ContactItem>
                            );
                        }
                    )}
                </ul>
            ) : (
                <Notification message="Your phone book is empty!" />
            )}
        </div>
    );
};

export default Contacts;
