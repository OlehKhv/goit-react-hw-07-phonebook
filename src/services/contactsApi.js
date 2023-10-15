import axios from 'axios';

axios.defaults.baseURL = 'https://652a6a3a4791d884f1fce5f4.mockapi.io/api/v1';

export const getAllContacts = async () => {
    const { data } = await axios('/contacts');
    return data;
};

export const removeContact = async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data.id;
};

export const newContact = async contact => {
    const { data } = await axios.post('/contacts', contact);
    return data;
};
