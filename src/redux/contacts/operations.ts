import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { goitAPI, setAuthHeader } from '../auth/operations';
import { RootState } from '../store';
import { AxiosError } from 'axios';
import { ErrorResponse, PostContact, UpdateContact, ThunkConfig } from '../../types/API-responses';
import { Contact } from '../../types/contact-user';

const prepareAuth = (thunkAPI: { getState: () => RootState }) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) throw new Error('No token');
  setAuthHeader(token);
};

export const fetchContacts = createAsyncThunk<Contact[], void, ThunkConfig>(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      prepareAuth(thunkAPI as { getState: () => RootState });
      const response = await goitAPI.get('/contacts');
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error.response?.data.message || 'Unknown error';

      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const addContact = createAsyncThunk<Contact, PostContact, ThunkConfig>(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      prepareAuth(thunkAPI as { getState: () => RootState });
      const response = await goitAPI.post('/contacts', newContact);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error.response?.data.message || 'Unknown error';

      toast.error('Oopss... Please, try again!');
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const editContact = createAsyncThunk<Contact, UpdateContact, ThunkConfig>(
  'contacts/editContact',
  async (contact, thunkAPI) => {
    try {
      prepareAuth(thunkAPI as { getState: () => RootState });
      const response = await goitAPI.patch(`/contacts/${contact.id}`, {
        name: contact.name,
        number: contact.number,
      });
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error.response?.data.message || 'Unknown error';

      toast.error('Oopss... Please, try again!');
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const deleteContact = createAsyncThunk<Contact, number, ThunkConfig>(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      prepareAuth(thunkAPI as { getState: () => RootState });
      const response = await goitAPI.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error.response?.data.message || 'Unknown error';

      toast.error('Oopss... Please, try again!');
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
