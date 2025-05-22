import { RootState } from '../store';

export const selectUser = (state: RootState) => state.auth.user;
export const selecIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
