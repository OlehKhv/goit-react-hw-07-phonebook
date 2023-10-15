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
    selectFilteredContacts,
    selectLoading,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/thunks';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import { ErrorNotification } from 'components/Notification/ErrorNotification';
import { selectFilter } from 'redux/filter/selectors';
import { NotFoundNotification } from 'components/Notification/NotFoundNotification';

export const Contacts = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);
    const visibleContacts = useSelector(selectFilteredContacts);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectLoading);
    const filter = useSelector(selectFilter);

    return (
        <div>
            <SecondTitle>Contacts</SecondTitle>

            {isLoading && <Loader />}

            {!error && !isLoading && visibleContacts.length > 0 && (
                <ul>
                    {visibleContacts.map(({ id, name, phone }) => {
                        return (
                            <ContactItem key={id}>
                                <ContactText>
                                    🧑 {name}: {phone}
                                </ContactText>
                                <DeleteButton
                                    onClick={() => {
                                        dispatch(deleteContact(id));
                                    }}
                                >
                                    ❌ Delete
                                </DeleteButton>
                            </ContactItem>
                        );
                    })}
                </ul>
            )}

            {!error && !isLoading && contacts.length === 0 && (
                <Notification>Your phone book is empty!</Notification>
            )}

            {error && !isLoading && (
                <ErrorNotification>
                    Oops... Something went wrong. Error: {error}. Please, try
                    again.
                </ErrorNotification>
            )}

            {filter && !isLoading && visibleContacts.length === 0 && (
                <NotFoundNotification>
                    No contacts matching your search query: "{filter}". Please
                    change your search parameters and try again.
                </NotFoundNotification>
            )}
        </div>
    );
};

export default Contacts;
