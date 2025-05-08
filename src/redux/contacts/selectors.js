import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectPhoneFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectPhoneFilter],
  (contacts, name, number) => {
    return contacts.filter(contact => {
      const matchName = name ? contact.name.toLowerCase().includes(name.toLowerCase()) : true;

      const matchPhone = number ? contact.number.includes(number) : true;

      return matchName && matchPhone;
    });
  }
);
