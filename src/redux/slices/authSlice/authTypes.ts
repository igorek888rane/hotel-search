import {FormValues} from "../../../components/AuthForm/AuthForm";


interface IData {
    _id: string;
    email: string;
    token: string;
}

export interface IAuthState {
    data: IData | {},
    auth: boolean,
    message: string,
    loading: boolean,
}

export type paramsType = {
    path: string,
    params: FormValues
}

export interface IResponse {
    data: IData,
    message: string,
}
