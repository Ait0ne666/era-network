import {UserModel} from "../../data/models/user.model";

export const constants = {
    SEND_SUPPORT_PENDING: 'SUPPORT_USER_PENDING',
    SEND_SUPPORT_SUCCESS: 'SUPPORT_USER_SUCCESS',
    SEND_SUPPORT_ERROR: 'SUPPORT_USER_ERROR',
    CLEAR_ERROR: 'CLEAR_ERROR',
}

export type SupportPayloadType = {
    name: string,
    email: string,
    message: string
}

interface SupportActionPending {
    type: typeof constants.SEND_SUPPORT_ERROR,
}


interface SupportActionSuccess {
    type: typeof constants.SEND_SUPPORT_SUCCESS,
    payload: string
}

interface SupportActionError {
    type: typeof constants.SEND_SUPPORT_ERROR,
    payload: string
}

export type SupportActionTypes =  SupportActionPending | SupportActionError | SupportActionSuccess

export interface SupportState {
    error: string | undefined,
    success: string | undefined,
    loading: boolean
}
