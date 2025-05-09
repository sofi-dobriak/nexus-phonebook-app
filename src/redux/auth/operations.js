import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import axios from 'axios';

export const goitAPI = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const setAuthHeader = token => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = '';
};

const prepareAuth = thunkAPI => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) throw new Error('No token');
  setAuthHeader(token);
};

export const register = createAsyncThunk('auth/register', async (body, thunkAPI) => {
  try {
    const response = await goitAPI.post('/users/signup', body);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    toast.error('Registration error!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const response = await goitAPI.post('/users/login', body);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    toast.error('Login error!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await goitAPI.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    toast.error('Logout error!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    prepareAuth(thunkAPI);
    const response = await goitAPI.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
