import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Main, MainTitle } from './App.styled';

export const App = () => {
    return (
        <Main>
            <MainTitle>Phonebook</MainTitle>
            <Form />
            <Filter />
            <Contacts />
        </Main>
    );
};
