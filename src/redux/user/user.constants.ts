import { UserModel } from "../../data/models/user.model"

export const constants = {
    LOGIN_USER_PENDING: 'LOGIN_USER_PENDING',
    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR: 'LOGIN_USER_ERROR',
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




export type UserActionTypes = LoginActionPending | LoginActionError | LoginActionSuccess


export interface UserState {
    user: UserModel | null,
    error: String | undefined,
    loading: boolean
}