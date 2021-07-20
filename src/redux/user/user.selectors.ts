import {RootState}  from '../types';

export const userSelectors = {
    user: (state: RootState) => state.user.user,
    error: (state: RootState) => state.user.error,
    loading: (state: RootState) => state.user.loading,
  }