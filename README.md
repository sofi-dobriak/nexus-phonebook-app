# Phonebook App

This application allows you to store and manage your contacts. It offers several useful features for working with contacts.

## Features:

1. **Add Contacts**

   - You can add new contacts by providing a name and phone number.
   - [Yup](https://github.com/jquense/yup) library is used for validation:
     - Name must be between 2 to 16 characters.
     - Phone number can only contain digits and can be separated by dashes (using a regular expression).

2. **Search Contacts by Name**

   - You can search for contacts by name.

3. **Delete Contacts**

   - You can delete contacts from the phonebook.

## Technologies:

- **React** for building the interface.
- **Formik** for handling forms.
- **Yup** for validation.
- **Redux** and **Redux** Toolkit for managing global state.
- [**mockapi.io**](https://mockapi.io/projects) as a backend
- **Axios** for implementing server requests
