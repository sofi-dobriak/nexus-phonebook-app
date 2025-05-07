import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectPhoneFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectPhoneFilter],
  (contacts, name, phone) => {
    return contacts.filter(contact => {
      const matchName = name ? contact.name.toLowerCase().includes(name.toLowerCase()) : true;

      const matchPhone = phone ? contact.number.includes(phone) : true;

      return matchName && matchPhone;
    });
  }
);
