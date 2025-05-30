import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../types/contact';

const initialState: Contact = {
  name: '',
  number: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilterName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeFilterPhone: (state, action: PayloadAction<string>) => {
      state.number = action.payload;
    },
  },
});

export const { changeFilterName, changeFilterPhone } = slice.actions;
export const filtersReducer = slice.reducer;
