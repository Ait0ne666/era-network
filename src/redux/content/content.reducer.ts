import {constants, ContentActionTypes, ContentState} from './content.constants';


const INITIAL_STATE: ContentState = {
    medium: [],
    error: undefined,
    loading: false
}


export const contentReducer = (state=INITIAL_STATE, action:ContentActionTypes) => {
    switch (action.type) {
        case constants.MEDIUM_ARTICLES_PENDING: 
            return {
                ...state,
                loading: true,
                error: undefined,
            }
        case constants.MEDIUM_ARTICLES_ERROR: 
            return {
                ...state,
                loading: false,
                error: (action as any).payload
            }
        case constants.MEDIUM_ARTICLES_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: undefined,
                medium: (action as any).payload
            }
        default:
            return state
    }
}


