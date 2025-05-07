import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddMessageModalOpen: false,
  isDeleteMessageModalOpen: false,
  isUpdateMessageModalOpen: false,

  isConfirmDeleteModalOpen: false,
  isUpdateContactModalOpen: false,

  modalData: null,
};

const slice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { modalKey, payload } = action.payload;

      state[modalKey] = true;

      if (payload !== undefined) {
        state.modalData = payload;
      }
    },
    closeModal: (state, action) => {
      state[action.payload] = false;
      state.modalData = null;
    },
  },
});

export const { openModal, closeModal } = slice.actions;
export const modalsReducers = slice.reducer;
