import * as React from "react";
import { Component } from "react";
import { Container, Col, Jumbotron, Form, FormGroup, Label, Input, Button, FormText, FormFeedback, Spinner } from "reactstrap";
import { observable, action } from "mobx";
// import { Link, NavLink as RouteLink } from "react-router-dom";




export default class Forms extends Component<{}>{

    render() {
        return (
            <div>
                <Jumbotron fluid={false}>
                    <Container>
                        <h3>Forms</h3>

                    </Container>
                </Jumbotron>
                <Container>
                    <h3>Forms</h3>
                    <SignInForm onSubmit={() => { }} isPosting={false} />
                </Container>
            </div>
        );
    }
}

export interface SignInFormData {
    email: string,
    password: string
}

export type SignInFormState = {
    validate: { emailState: string }
}

const defaultSigninFormState : SignInFormState = { validate: { emailState: "" } };

export class SignInForm extends Component<{ onSubmit: (data: SignInFormData) => void, isPosting: boolean }, SignInFormState>{
    @observable formData: SignInFormData = { email: "", password: "" };

    state = defaultSigninFormState;


    validateEmail(val: string) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
        if (emailRex.test(val)) {
            validate.emailState = 'has-success'
        } else {
            validate.emailState = 'has-danger'
        }
        this.setState({ validate })
    }

    render() {

        return (
            <div>
                <h2>Sign In</h2>
                <Form className="form" onSubmit={(e) => this.formSubmit(e)}>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                valid={this.state.validate.emailState === 'has-success'}
                                invalid={this.state.validate.emailState === 'has-danger'}
                                onChange={(e) => this.updateEmail(e.target.value)}
                            />
                            <FormFeedback valid>
                                That's a tasty looking email you've got there.
                            </FormFeedback>
                            <FormFeedback invalid>
                                Uh oh! Looks like there is an issue with your email. Please input a correct email.
                            </FormFeedback>
                            <FormText>Your username is most likely your email.</FormText>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                onChange={(e) => this.updatePassword(e.currentTarget.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Button disabled={this.props.isPosting}>Submit {' '}{this.props.isPosting ? (<Spinner size={"sm"} />) : null}</Button>
                </Form>
            </div>
        )

    }

    @action
    updateEmail(val: string): void {
        this.formData.email = val;
        this.validateEmail(val)
    }

    @action
    updatePassword(val: string): void {
        this.formData.password = val;
    }

    formSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        this.props.onSubmit(this.formData);
    }
}