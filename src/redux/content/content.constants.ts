import { IMediumArticle } from "../../data/models/medium-article.model"
// import { UserModel } from "../../data/models/user.model"

export const constants = {
    MEDIUM_ARTICLES_PENDING: 'MEDIUM_ARTICLES_PENDING',
    MEDIUM_ARTICLES_SUCCESS: 'MEDIUM_ARTICLES_SUCCESS',
    MEDIUM_ARTICLES_ERROR: 'MEDIUM_ARTICLES_ERROR',
}


export type MediumArticlesPayloadType = {
    articles: IMediumArticle[]
}



interface MediumArticlesActionPending {
    type: typeof constants.MEDIUM_ARTICLES_PENDING,
} 

interface MediumArticlesActionSuccess {
    type: typeof constants.MEDIUM_ARTICLES_SUCCESS,
    payload: IMediumArticle[]
} 

interface MediumArticlesActionError {
    type: typeof constants.MEDIUM_ARTICLES_ERROR,
    payload: String
} 




export type ContentActionTypes = MediumArticlesActionPending | MediumArticlesActionError | MediumArticlesActionSuccess


export interface ContentState {
    medium: IMediumArticle[],
    error?: string,
    loading: boolean
}