export interface UserModel {
    id: Number,
    username: String,
    email: String,
    telegram?: String 
    
}




export class User implements UserModel {
    id: Number
    username: String
    email: String
    telegram?: String 

    constructor({
        id,
        username,
        email,
        telegram
    }: UserModel) {
        this.id = id
        this.username = username
        this.email = email
        this.telegram = telegram
    }


}