import {RootState} from "../types";

export const supportSelectors = {
    // user: (state: RootState) => state.user.user,
    error: (state: RootState) => state.support.error,
    success: (state: RootState) => state.support.success,
    loading: (state: RootState) => state.support.loading,
}
