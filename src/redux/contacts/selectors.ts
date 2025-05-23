import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectPhoneFilter } from '../filters/selectors';
import { RootState } from '../store';
import { Contact } from '../../types/user';

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectIsLoading = (state: RootState) => state.contacts.isLoading;
export const selectIsError = (state: RootState) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectPhoneFilter],
  (contacts: Contact[], name: string, number: string) => {
    return contacts.filter(contact => {
      const matchName = name ? contact.name.toLowerCase().includes(name.toLowerCase()) : true;

      const matchPhone = number ? contact.number.includes(number) : true;

      return matchName && matchPhone;
    });
  }
);
