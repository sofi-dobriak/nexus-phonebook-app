import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { goitAPI } from '../auth/operations';
import { AxiosError } from 'axios';
import { ErrorResponse, PostContact, UpdateContact, ThunkConfig } from '../../types/API-responses';
import { Contact } from '../../types/user';

export const fetchContacts = createAsyncThunk<Contact[], void, ThunkConfig>(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await goitAPI.get<Contact[]>('/contacts');
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
      const response = await goitAPI.post<Contact>('/contacts', newContact);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error.response?.data.message || 'Unknown error';

      toast.error('Oops... Please, try again!');
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const editContact = createAsyncThunk<Contact, UpdateContact, ThunkConfig>(
  'contacts/editContact',
  async (contact, thunkAPI) => {
    try {
      const response = await goitAPI.patch<Contact>(`/contacts/${contact.id}`, {
        name: contact.name,
        number: contact.number,
      });
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error.response?.data.message || 'Unknown error';

      toast.error('Oops... Please, try again!');
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const deleteContact = createAsyncThunk<Contact, number, ThunkConfig>(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await goitAPI.delete<Contact>(`/contacts/${contactId}`);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error.response?.data.message || 'Unknown error';

      toast.error('Oops... Please, try again!');
      return thunkAPI.rejectWithValue({ message });
    }
  }
);
