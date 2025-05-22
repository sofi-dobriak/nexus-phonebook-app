import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isAddMessageModalOpen: boolean;
  isDeleteMessageModalOpen: boolean;
  isUpdateMessageModalOpen: boolean;
  isConfirmDeleteModalOpen: boolean;
  isUpdateContactModalOpen: boolean;
  isMobileMenuModalOpen: boolean;
  modalData: {
    id?: number;
    name?: string;
    number?: string;
  } | null;
}

export type ModalKey = Exclude<keyof ModalState, 'modalData'>;

interface PayloadInterface {
  modalKey: ModalKey;
  payload?: {
    id?: number;
    name?: string;
    number?: string;
  };
}

const initialState: ModalState = {
  isAddMessageModalOpen: false,
  isDeleteMessageModalOpen: false,
  isUpdateMessageModalOpen: false,
  isConfirmDeleteModalOpen: false,
  isUpdateContactModalOpen: false,
  isMobileMenuModalOpen: false,
  modalData: null,
};

const slice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action: { payload: PayloadInterface }) => {
      const { modalKey, payload } = action.payload;

      state[modalKey] = true;

      if (payload !== undefined) {
        state.modalData = payload;
      }
    },
    closeModal: (state, action: { payload: ModalKey }) => {
      state[action.payload] = false;
      state.modalData = null;
    },
  },
});

export const { openModal, closeModal } = slice.actions;
export const modalsReducers = slice.reducer;
