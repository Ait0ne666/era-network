import { IMediumArticle } from "../models/medium-article.model";
import * as ContentRemoteDataSource from '../data-sources/content_remote_data_source'



export interface ContentRepository {


    getMediumArticles: () => Promise<IMediumArticle[]>
}




export class ContentRepositoryImpl implements ContentRepository {

    getMediumArticles = () => {
        return ContentRemoteDataSource.getMediumArticles()
    }


}