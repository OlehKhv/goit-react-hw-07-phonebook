import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';

export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) =>
        contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
        )
);
