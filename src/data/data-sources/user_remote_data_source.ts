import { User, UserModel } from "../models/user.model";
import { Failure } from "../repositories/auth-repository";

export const login = async (username: String, password: String): Promise<User | Failure> => {
    

    const tempUser: User = new User({
        email: 'bonafide112358@gmail.com',
        username: 'ait0ne',
        id: 1
    }) 



    return Promise.resolve(tempUser)


}

export const register = async (username_invited:string, username: string,email:string, password: string,  telegram:string): Promise<User | Failure> => {


    const tempUser: User = new User({
        email: 'bonafide112358@gmail.com',
        username: 'ait0ne',
        id: 1
    })


    return Promise.resolve(tempUser)
}
