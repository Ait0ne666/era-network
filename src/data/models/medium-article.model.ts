export interface IMediumArticle {
    title: string,
    subtitle: string,
    date: Date
}



export class MediumArticle implements IMediumArticle {
    title: string
    subtitle: string
    date: Date



    constructor(props: IMediumArticle) {
        this.date = props.date
        this.subtitle = props.subtitle
        this.title = props.title
    }




}