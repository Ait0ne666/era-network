import { UserModel } from "../../data/models/user.model"

export const constants = {
    LOGIN_USER_PENDING: 'LOGIN_USER_PENDING',
    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR: 'LOGIN_USER_ERROR',
    LOGOUT_USER: 'LOGOUT_USER',
}


export type LoginPayloadType = {
    username: String,
    password: String
}



interface LoginActionPending {
    type: typeof constants.LOGIN_USER_PENDING,
} 

interface LoginActionSuccess {
    type: typeof constants.LOGIN_USER_SUCCESS,
    payload: UserModel
} 

interface LoginActionError {
    type: typeof constants.LOGIN_USER_ERROR,
    payload: String
} 

interface LogoutAction {
    type: typeof constants.LOGOUT_USER
}




export type UserActionTypes = LoginActionPending | LoginActionError | LoginActionSuccess |LogoutAction


export interface UserState {
    user: UserModel | null,
    error: String | undefined,
    loading: boolean
}