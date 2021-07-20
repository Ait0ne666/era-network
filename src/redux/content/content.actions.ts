
import {constants, ContentActionTypes} from './content.constants';
// import {ThunkDispatch} from 'redux-thunk'
import {Dispatch} from 'redux'
// import { AuthRepositoryImpl } from '../../data/repositories/auth-repository';
import { IMediumArticle } from '../../data/models/medium-article.model';
import { ContentRepositoryImpl } from '../../data/repositories/content-repository';




let repository = new ContentRepositoryImpl()


export const mediumArticlesPending = (): ContentActionTypes => ({
    type: constants.MEDIUM_ARTICLES_PENDING,
})

export const mediumArticlesSuccess = (payload: IMediumArticle[]): ContentActionTypes => ({
    type: constants.MEDIUM_ARTICLES_SUCCESS,
    payload: payload
})

export const mediumArticlesError = (message: String): ContentActionTypes => ({
    type: constants.MEDIUM_ARTICLES_ERROR,
    payload: message
})



export const getMediumArticles = () => {
    return async (dispatch: Dispatch) => {
        
        
        
        dispatch(mediumArticlesPending())

        try {
            let result = await repository.getMediumArticles()
            dispatch(mediumArticlesSuccess(result))



        } catch (err) {
            dispatch(mediumArticlesError("При загрузке статей произошла ошибка"))
        }


    }
}



