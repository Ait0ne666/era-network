import {constants, UserActionTypes, UserState} from './user.constants';


const INITIAL_STATE: UserState = {
    user: null,
    error: undefined,
    loading: false
}


export const userReducer = (state=INITIAL_STATE, action:UserActionTypes) => {
    switch (action.type) {
        case constants.LOGIN_USER_PENDING: 
            return {
                ...state,
                loading: true,
                error: undefined,
            }
        case constants.LOGIN_USER_ERROR: 
            return {
                ...state,
                loading: false,
                error: (action as any).payload as String
            }
        case constants.LOGIN_USER_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: undefined,
                user: (action as any).payload as String
            }
        default:
            return state
    }
}


