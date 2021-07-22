import { User, UserModel } from "../models/user.model";
import * as RemoteDataSource from '../data-sources/user_remote_data_source';


export interface Failure {
    message: string
    type: string
}



export interface AuthRepository {
    login: (username: String, password: String) => Promise<User|Failure>
    register:( username_invited:string, username: string,email:string, password: string, telegram:string) => Promise<User|Failure>
}




export class AuthRepositoryImpl implements AuthRepository {
    login = async (username: String, password: String) => {
        return RemoteDataSource.login(username, password);
    }

    register = async ( username_invited:string,username: string,email:string,  password: string,  telegram:string) => {
        return RemoteDataSource.register(username_invited,username,email,  password,  telegram);
    }
}
