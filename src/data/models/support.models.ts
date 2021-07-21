export interface SupportModel {
    id: Number,
    name: String
    email: String
    message: String
}


export class Support implements SupportModel {
    id: Number
    name: String
    email: String
    message: String

    constructor({
                    id,
                    name,
                    email,
                    message
                }: SupportModel) {
        this.id = id
        this.name = name
        this.email = email
        this.message = message
    }
}
