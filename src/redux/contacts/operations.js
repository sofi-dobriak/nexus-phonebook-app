import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const goitAPIs = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

const setAuthHeader = token => {
  goitAPIs.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const prepareAuth = thunkAPI => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) throw new Error('No token');
  setAuthHeader(token);
};

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    prepareAuth(thunkAPI);
    const response = await goitAPIs.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
  try {
    prepareAuth(thunkAPI);
    const response = await goitAPIs.post('/contacts', newContact);
    return response.data;
  } catch (error) {
    toast.error('Oopss... Please, try again!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editContact = createAsyncThunk('contacts/editContact', async (contact, thunkAPI) => {
  try {
    prepareAuth(thunkAPI);
    const response = await goitAPIs.patch(`/contacts/${contact.id}`, {
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
      const response = await goitAPIs.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      toast.error('Oopss... Please, try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
