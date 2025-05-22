import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import {
  AuthResponse,
  RegisterRequest,
  LoginRequest,
  ErrorResponse,
  ThunkConfig,
} from '../../types/API-responses';
import { RootState } from '../store';
import { User } from '../../types/contact-user';

export const goitAPI = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const setAuthHeader = (token: string) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = '';
};

const prepareAuth = (thunkAPI: { getState: () => RootState }) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) throw new Error('No token');
  setAuthHeader(token);
};

export const register = createAsyncThunk<AuthResponse, RegisterRequest, ThunkConfig>(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post('/users/signup', body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error.response?.data.message || 'Unknown error';

      toast.error('Registration error!');
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const login = createAsyncThunk<AuthResponse, LoginRequest, ThunkConfig>(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post('/users/login', body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error.response?.data.message || 'Unknown error';

      toast.error('Login error!');
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const logout = createAsyncThunk<void, void, ThunkConfig>(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await goitAPI.post('/users/logout');
      clearAuthHeader();
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error.response?.data.message || 'Unknown error';

      toast.error('Logout error!');
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const refreshUser = createAsyncThunk<User, void, ThunkConfig>(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      prepareAuth(thunkAPI as { getState: () => RootState });
      const response = await goitAPI.get('/users/current');
      return response.data;
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const message = error.response?.data.message || 'Unknown error';

      return thunkAPI.rejectWithValue({ message });
    }
  }
);
