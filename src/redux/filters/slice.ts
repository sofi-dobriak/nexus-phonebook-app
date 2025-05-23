import { createSlice } from '@reduxjs/toolkit';
import { Contact } from '../../types/contact';

const initialState: Contact = {
  name: '',
  number: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilterName: (state, action) => {
      state.name = action.payload;
    },
    changeFilterPhone: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { changeFilterName, changeFilterPhone } = slice.actions;
export const filtersReducer = slice.reducer;
