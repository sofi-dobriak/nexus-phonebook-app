import { RootState } from '../store';

export const selectContact = (state: RootState) => state.modals.modalData;
export const selectIsConfirmDeleteModalOpen = (state: RootState) =>
  state.modals.isConfirmDeleteModalOpen;
export const selectIsUpdateContactModalOpen = (state: RootState) =>
  state.modals.isUpdateContactModalOpen;
export const selectIsMobileMenuModalOpen = (state: RootState) => state.modals.isMobileMenuModalOpen;
