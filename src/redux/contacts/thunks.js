const { createAsyncThunk } = require('@reduxjs/toolkit');

const fetchAllContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const response = await getAllContacts();
    return response.data;
});

const addContact = createAsyncThunk('contacts/addContact', async contact => {
    const response = await addContact(contact);
    return response.data;
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
    const response = await deleteContact(id);
    return response.data;
});
