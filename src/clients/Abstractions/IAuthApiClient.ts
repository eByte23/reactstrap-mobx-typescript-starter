// import { IApiResult } from "./ApiResult";


export interface IAuthApiClient {
    Authenticate(): Promise<AuthenticateResult>
}

export interface AuthenticateInput {
    username: string,
    password: string
}

export interface AuthenticateResult {
    success: boolean,
    error: AuthError | null
}

export enum AuthError {
    UsernamePasswordIncorrect = 0,
    ServerError = 5,
    NotConnected = 10
}


