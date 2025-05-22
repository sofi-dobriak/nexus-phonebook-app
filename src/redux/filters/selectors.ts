import { RootState } from '../store';

export const selectNameFilter = (state: RootState) => state.filters.name;
export const selectPhoneFilter = (state: RootState) => state.filters.number;
