import { useState } from 'react';
import { ButtonAdd, InputForm, LabelInput, PhonebookForm } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/thunks';

const INITIAL_STATE = {
    name: '',
    phone: '',
};

export const Form = () => {
    const [name, setName] = useState(INITIAL_STATE.name);
    const [phone, setPhone] = useState(INITIAL_STATE.phone);

    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);

    const handleInput = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'phone':
                setPhone(value);
                break;
            // no default
        }
    };

    const handleAddContact = e => {
        e.preventDefault();

        if (contacts.some(contact => contact.name === name)) {
            alert(`${name} is already in contacts!`);
            resetForm();
            return;
        }

        dispatch(addContact({ name, phone }));

        resetForm();
    };

    const resetForm = () => {
        setName(INITIAL_STATE.name);
        setPhone(INITIAL_STATE.phone);
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
                value={name}
                onChange={handleInput}
                id="name"
                placeholder="🙍‍♂️   Alex Smith"
            />

            <LabelInput htmlFor="phone">Number</LabelInput>
            <InputForm
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={phone}
                onChange={handleInput}
                id="phone"
                placeholder="📞   222-22-22"
            />

            <ButtonAdd type="submit">➕ Add contact</ButtonAdd>
        </PhonebookForm>
    );
};

export default Form;
