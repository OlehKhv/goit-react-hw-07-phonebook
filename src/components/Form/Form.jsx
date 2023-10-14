import { useState } from 'react';
import { ButtonAdd, InputForm, LabelInput, PhonebookForm } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/slice';

const INITIAL_STATE = {
    name: '',
    number: '',
};

export const Form = () => {
    const [contactName, setName] = useState(INITIAL_STATE.name);
    const [contactNumber, setNumber] = useState(INITIAL_STATE.number);

    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);

    const handleInput = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;
            // no default
        }
    };

    const handleAddContact = e => {
        e.preventDefault();

        if (contacts.some(({ contactName: name }) => name === contactName)) {
            alert(`${contactName} is already in contacts!`);
            return;
        }

        dispatch(addContact({ contactName, contactNumber }));

        resetForm();
    };

    const resetForm = () => {
        setName(INITIAL_STATE.name);
        setNumber(INITIAL_STATE.number);
    };

    return (
        <PhonebookForm onSubmit={handleAddContact}>
            <LabelInput htmlFor="name">Name</LabelInput>
            <InputForm
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={contactName}
                onChange={handleInput}
                id="name"
                placeholder="🙍‍♂️   Alex Smith"
            />

            <LabelInput htmlFor="number">Number</LabelInput>
            <InputForm
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={contactNumber}
                onChange={handleInput}
                id="number"
                placeholder="📞   222-22-22"
            />

            <ButtonAdd type="submit">➕ Add contact</ButtonAdd>
        </PhonebookForm>
    );
};

export default Form;
