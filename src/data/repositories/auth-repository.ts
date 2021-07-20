import { User, UserModel } from "../models/user.model";
import * as RemoteDataSource from '../data-sources/user_remote_data_source';


export interface Failure {
    message: String
}



export interface AuthRepository {
    login: (username: String, password: String) => Promise<User|Failure>
}




export class AuthRepositoryImpl implements AuthRepository {







    login = async (username: String, password: String) => {
        return RemoteDataSource.login(username, password);
    }
}