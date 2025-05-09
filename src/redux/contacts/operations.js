import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { goitAPI, setAuthHeader } from '../auth/operations';

const prepareAuth = thunkAPI => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) throw new Error('No token');
  setAuthHeader(token);
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    prepareAuth(thunkAPI);
    const response = await goitAPI.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
  try {
    prepareAuth(thunkAPI);
    const response = await goitAPI.post('/contacts', newContact);
    return response.data;
  } catch (error) {
    toast.error('Oopss... Please, try again!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editContact = createAsyncThunk('contacts/editContact', async (contact, thunkAPI) => {
  try {
    prepareAuth(thunkAPI);
    const response = await goitAPI.patch(`/contacts/${contact.id}`, {
      name: contact.name,
      number: contact.number,
    });
    return response.data;
  } catch (error) {
    toast.error('Oopss... Please, try again!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      prepareAuth(thunkAPI);
      const response = await goitAPI.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      toast.error('Oopss... Please, try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
