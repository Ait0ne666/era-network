import {constants, UserActionTypes, UserState} from './user.constants';


const INITIAL_STATE: UserState = {
    user: null,
    error: undefined,
    loading: false
}


export const userReducer = (state=INITIAL_STATE, action:UserActionTypes) => {
    switch (action.type) {
        case constants.LOGIN_USER_PENDING: 
        console.log('pending')
            return {
                ...state,
                loading: true,
                error: undefined,
            }
        case constants.LOGIN_USER_ERROR: 
        console.log('error')
            return {
                ...state,
                loading: false,
                error: (action as any).payload as String
            }
        case constants.LOGIN_USER_SUCCESS: 
        console.log('success')
            return {
                ...state,
                loading: false,
                error: undefined,
                user: (action as any).payload as String
            }
        case constants.LOGOUT_USER: 
            console.log(1)
            return {
                ...state, 
                user: null,
                error: undefined,
                loading: false
            }
        default:
            return state
    }
}


