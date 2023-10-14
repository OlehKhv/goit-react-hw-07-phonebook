const { createAsyncThunk } = require("@reduxjs/toolkit")
const { getAllContacts } = require("services/contactsApi")

const fetchAllContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (thunkAPI) => {
      const response = await getAllContacts()
      return response.data
    }
  )

  const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
      const response = await addContact(contact)
      return response.data
    }
  )

  const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
      const response = await deleteContact(id)
      return response.data
    }
  )

  const initState = {
    contacts: {
      items: [],
      isLoading: false,
      error: null
    }
  }