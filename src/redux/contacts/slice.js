import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, editContact } from './operations';
import { logout } from '../auth/operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(logout.fulfilled, () => initialState)

      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })

      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.contacts.findIndex(contact => contact.id === action.payload.id);

        if (index !== -1) {
          state.contacts[index] = action.payload;
        }
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
        state.contacts.splice(index, 1);
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          editContact.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          editContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
