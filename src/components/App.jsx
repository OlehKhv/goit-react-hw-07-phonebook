import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Main, MainTitle } from './App.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contacts/thunks';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch]);

    return (
        <Main>
            <MainTitle>Phonebook</MainTitle>
            <Form />
            <Filter />
            <Contacts />
        </Main>
    );
};
