import { User, UserModel } from '../../data/models/user.model';
import {constants, UserActionTypes, LoginPayloadType} from './user.constants';
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

export const loginUserError = (message: String): UserActionTypes => ({
    type: constants.LOGIN_USER_ERROR,
    payload: message
})



export const loginUser = (payload: LoginPayloadType) => {
    console.log(1)
    return async (dispatch: Dispatch) => {
        let repository = new AuthRepositoryImpl()
        
        console.log(6)
        dispatch(loginUserPending())
        console.log(5)
        try {
            let result = await repository.login(payload.username, payload.password)
            if (! (result instanceof User)) {
                console.log(2)
                dispatch(loginUserError(result.message))
            } else {
                console.log(3)
                dispatch(loginUserSuccess(result))
            }



        } catch (err) {
            dispatch(loginUserError("При авторизации произошла непредвиденная ошибка"))
        }


    }
}



export const logoutUser = (): UserActionTypes => ({
    type: constants.LOGOUT_USER,
})



