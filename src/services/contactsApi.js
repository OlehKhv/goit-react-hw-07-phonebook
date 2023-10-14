import axios from 'axios';

axios.defaults.baseURL = 'https://652a6a3a4791d884f1fce5f4.mockapi.io/api/v1';

export async function getAllContacts() {
    const {data} = await axios('/contacts');
    return data;
}

export async function deleteContact(id) {
    const {data} = await axios.delete(`/contacts/${id}`);
    return data;
}

export async function addContact(contact) {    
    const {data} = await axios.post('/contacts', contact)
    return data;
}