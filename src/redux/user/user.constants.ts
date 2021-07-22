import { UserModel } from "../../data/models/user.model"

export const constants = {
    LOGIN_USER_PENDING: 'LOGIN_USER_PENDING',
    LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR: 'LOGIN_USER_ERROR',
    REGISTER_USER_PENDING: 'LOGIN_USER_PENDING',
    REGISTER_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
    REGISTER_USER_ERROR: 'LOGIN_USER_ERROR',
    CLEAR_USER_ERROR: 'CLEAR_USER_ERROR',
}


export type LoginPayloadType = {
    username: string,
    password: string
}

export type RegisterPayloadType = {
    username_invited: string,
    username: string,
    email: string,
    password: string,
    telegram: string
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
    payload: string
}

interface RegisterActionPending {
    type: typeof constants.REGISTER_USER_PENDING,
}

interface RegisterActionSuccess {
    type: typeof constants.REGISTER_USER_SUCCESS,
    payload: string
}

interface RegisterActionError {
    type: typeof constants.REGISTER_USER_ERROR,
    payload: string
}

export type UserActionTypes = (LoginActionPending
    | LoginActionError
    | LoginActionSuccess
    | RegisterActionPending
    | RegisterActionSuccess
    | RegisterActionError)



export interface UserState {
    user: UserModel | null,
    error: string | undefined,
    loading: boolean
}
