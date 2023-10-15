import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',

    initialState: contactsInitialState,

    extraReducers: {
        [fetchTasks.pending](state, action) {},
        [fetchTasks.fulfilled](state, action) {},
        [fetchTasks.rejected](state, action) {},
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
