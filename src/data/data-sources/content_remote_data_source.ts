import { IMediumArticle, MediumArticle } from "../models/medium-article.model";


const testArticle: IMediumArticle = new MediumArticle({
    date: new Date(),
    title: 'Как сменить пригласившего',
    subtitle: 'Как осуществить перенос своих участников с первой линии на новый аккаунт, если Seed-фраза старого была раскрыта мошенникам.'
})




export const getMediumArticles = async (): Promise<IMediumArticle[]> => {
    const result: IMediumArticle[]  = [testArticle, testArticle, testArticle];


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result)
        }, 250)
    })
}