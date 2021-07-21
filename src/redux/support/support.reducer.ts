import {constants, SupportActionTypes, SupportState} from "./support constants";


const INITIAL_STATE: SupportState = {
    // user: null,
    error: undefined,
    success: undefined,
    loading: false
}


export const supportReducer = (state=INITIAL_STATE, action:SupportActionTypes) => {
    switch (action.type) {
        case constants.SEND_SUPPORT_PENDING:
            return {
                ...state,
                loading: true,
                error: undefined,
                success: undefined,
            }
        case constants.SEND_SUPPORT_ERROR:
            return {
                ...state,
                loading: false,
                error: (action as any).payload as string,
                success: undefined
            }
        case constants.SEND_SUPPORT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined,
                success: (action as any).payload as string
            }
        case constants.CLEAR_ERROR:
            return{
                ...state,
                error: undefined,
                success: undefined
            }
        default:
            return state
    }
}


