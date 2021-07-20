import {RootState}  from '../types';

export const contentSelectors = {
    mediumArticles: (state: RootState) => state.content.medium,
    error: (state: RootState) => state.content.error,
    loading: (state: RootState) => state.content.loading,
  }