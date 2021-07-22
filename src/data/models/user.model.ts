export interface UserModel {
    id: Number,
    username: String,
    email: String,
    isTariffPaid: boolean
    telegram?: String
}




export class User implements UserModel {
    id: Number
    username: String
    email: String
    telegram?: String 
    isTariffPaid: boolean

    constructor({
        id,
        username,
        email,
        telegram,
        isTariffPaid
    }: UserModel) {
        this.id = id
        this.username = username
        this.email = email
        this.telegram = telegram
        this.isTariffPaid = isTariffPaid
    }


}
