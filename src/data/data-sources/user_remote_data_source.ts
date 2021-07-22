import { User, UserModel } from "../models/user.model";
import { Failure } from "../repositories/auth-repository";

export const login = async (username: String, password: String): Promise<User | Failure> => {
    

    const tempUser: User = new User({
        email: 'bonafide112358@gmail.com',
        username: 'ait0ne',
        id: 1,
        isTariffPaid: true
    }) 



    return Promise.resolve(tempUser)


}