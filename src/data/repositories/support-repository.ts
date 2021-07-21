import * as RemoteDataSource from '../data-sources/support_remote_data_source';
import {Support} from "../models/support.models";


export interface ResultOperation {
    type: "failure"|"success",
    message: string
}


export interface SupportRepository {
    send: (name: string, email:string, message: string) => Promise<ResultOperation>
}


export class SupportRepositoryImpl implements SupportRepository {
    send = async (name: string, email:string, message: string) => {
        return RemoteDataSource.send(name, email, message);
    }
}
