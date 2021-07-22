import { User, UserModel } from '../../data/models/user.model';
import {constants, UserActionTypes, LoginPayloadType, RegisterPayloadType} from './user.constants';
import {ThunkDispatch} from 'redux-thunk'
import {Action, ActionCreator, Dispatch} from 'redux'
import { AuthRepositoryImpl } from '../../data/repositories/auth-repository';


export const loginUserPending = (): UserActionTypes => ({
    type: constants.LOGIN_USER_PENDING,
})

export const loginUserSuccess = (payload: UserModel): UserActionTypes => ({
    type: constants.LOGIN_USER_SUCCESS,
    payload: payload
})

export const loginUserError = (message: string): UserActionTypes => ({
    type: constants.LOGIN_USER_ERROR,
    payload: message
})

export const registerUserPending = (): UserActionTypes => ({
    type: constants.LOGIN_USER_PENDING,
})

export const registerUserSuccess = (payload: UserModel): UserActionTypes => ({
    type: constants.LOGIN_USER_SUCCESS,
    payload: payload
})

export const registerUserError = (message: string): UserActionTypes => ({
    type: constants.LOGIN_USER_ERROR,
    payload: message
})

export const clearUserError = (): UserActionTypes => ({
    type: constants.CLEAR_USER_ERROR,
})




export const loginUser = (payload: LoginPayloadType) => {
    return async (dispatch: Dispatch) => {
        let repository = new AuthRepositoryImpl()
        dispatch(loginUserPending())

        try {
            let result = await repository.login(payload.username, payload.password)

            if (! (result instanceof User)) {
                dispatch(loginUserError(result.message))
            } else {
                dispatch(loginUserSuccess(result))
            }



        } catch (err) {
            dispatch(loginUserError("При авторизации произошла непредвиденная ошибка"))
        }
    }
}


export const registerUser = (payload: RegisterPayloadType) => {
    return async (dispatch: Dispatch) => {
        let repository = new AuthRepositoryImpl()
        dispatch(registerUserPending())

        try {
            let result = await repository.register(
                payload.username_invited,
                payload.username,
                payload.email,
                payload.password,
                payload.telegram
            )

            if (! (result instanceof User)) {
                dispatch(registerUserError(result.message))
            } else {
                dispatch(registerUserSuccess(result))
            }

        } catch (err) {
            dispatch(registerUserError("При регистрации произошла непредвиденная ошибка"))
        }
    }
}



