import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getAllContacts,
    newContact,
    removeContact,
} from 'services/contactsApi';

export const fetchAllContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            return await getAllContacts();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            return await removeContact(id);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            return await newContact(contact);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
