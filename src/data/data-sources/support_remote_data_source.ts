import {Support} from "../models/support.models";
import {ResultOperation} from "../repositories/support-repository";

export const send = async (name: string, email:string, message: string): Promise<ResultOperation> => {

    const successAnswer: ResultOperation={message: "Success sending support message", type: "success"}

    return Promise.resolve(successAnswer)
}
