import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, deleteContact, addContact } from './thunks';
import {
    handleAddFulfilled,
    handleDeleteFulfilled,
    handleFetchAllFulfilled,
    handleFulfilled,
    handlePending,
    handleRejected,
} from './helpers';

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',

    initialState: contactsInitialState,

    extraReducers: builder => {
        builder
            .addCase(fetchAllContacts.fulfilled, handleFetchAllFulfilled)
            .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
            .addCase(addContact.fulfilled, handleAddFulfilled)
            .addMatcher(
                action => action.type.endsWith('pending'),
                handlePending
            )
            .addMatcher(
                action => action.type.endsWith('rejected'),
                handleRejected
            )
            .addMatcher(
                action => action.type.endsWith('fulfilled'),
                handleFulfilled
            );
    },
});

export const contactsReducer = contactsSlice.reducer;
