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



