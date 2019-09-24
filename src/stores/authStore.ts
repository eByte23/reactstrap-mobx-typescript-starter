import { observable } from "mobx";

export interface IAuthStore {

    isAuthenticated: boolean,
    authenticate(input: AuthenticateInput): Promise<AuthenticateResult>;
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

export class AuthStore implements IAuthStore {

    @observable isAuthenticated: boolean = true;

    async authenticate(input: AuthenticateInput): Promise<AuthenticateResult> {


        return new Promise((res) => {
            console.log(input.username)
            setTimeout(() => {
                this.isAuthenticated = true;
                res({
                    error: null,
                    success: true
                })
            }, 2000);
        });

    }


}


