import {Dispatch} from "redux";
import {SupportRepositoryImpl} from "../../data/repositories/support-repository";
import {constants, SupportActionTypes, SupportPayloadType} from "./support constants";

export const sendSupportPending = (): SupportActionTypes => ({
    type: constants.SEND_SUPPORT_PENDING,
})

export const sendSupportSuccess = (payload: string): SupportActionTypes => ({
    type: constants.SEND_SUPPORT_SUCCESS,
    payload: payload
})

export const sendSupportError = (message: string): SupportActionTypes => ({
    type: constants.SEND_SUPPORT_ERROR,
    payload: message
})

export const clearSupportError = (): SupportActionTypes => ({
    type: constants.CLEAR_ERROR,
})


export const sendSupport = (payload: SupportPayloadType) => {

    return async (dispatch: Dispatch) => {
        let repository = new SupportRepositoryImpl()
        dispatch(sendSupportPending())
        try {
            let result = await repository.send(payload.name, payload.email, payload.message)
            if (result.type === "success") {
                dispatch(sendSupportSuccess(result.message))
            } else {
                dispatch(sendSupportError(result.message))
            }

        } catch (err) {
            dispatch(sendSupportError("Непредвиденная ошибка при отправке вопроса"))
        }

    }
}
