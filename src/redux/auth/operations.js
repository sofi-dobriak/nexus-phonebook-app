import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const register = createAsyncThunk('auth/register', async (_, thunkAPI) => {});

export const login = createAsyncThunk('auth/login', async (_, thunkAPI) => {});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {});
