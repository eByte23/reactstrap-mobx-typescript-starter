import * as React from "react";
import { Component } from "react";
import { SignInForm, SignInFormData } from "../forms";
import { Redirect } from "react-router";
import { observer, inject } from "mobx-react";
import { AuthStore } from "../../../stores/authStore";
import { observable } from "mobx";
import { NavLink as RouteLink } from "react-router-dom";

@inject("authStore")
@observer
export default class Login extends Component<{
    authStore?: AuthStore,
    location: {
        state: {
            from: {
                pathname: string
            }
        }
    }
}, { redirectToReferrer: boolean }>{
    @observable isPosting: boolean = false;
    constructor(props: any) {
        super(props);
        this.state = { redirectToReferrer: false };
    }







    render() {

        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;

        return (
            <div>
                <SignInForm onSubmit={(data) => { this.tryLogin(data) }} isPosting={this.isPosting} />
                <div>
                    <RouteLink to="/forgot-password">Forgot your password?</RouteLink>
                </div>
            </div>
        );
    }
    tryLogin(data: SignInFormData) {
        console.log(data);
        this.isPosting = true;
        this.props.authStore!.authenticate({ username: data.email, password: data.password })
            .then(() => {

                this.setState({ redirectToReferrer: true });
            })
    }
}