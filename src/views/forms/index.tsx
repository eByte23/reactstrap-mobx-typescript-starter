import * as React from "react";
import { Component } from "react";
import { Container, Col, Jumbotron, Form, FormGroup, Label, Input, Button, FormText, FormFeedback } from "reactstrap";
// import { Link, NavLink as RouteLink } from "react-router-dom";




export default class Forms extends Component<{}>{

    constructor(props: any) {
        super(props);
    }



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
                    <SignInForm />
                </Container>
            </div>
        );
    }
}


class SignInForm extends Component<{}, { validate: { emailState: string } }>{

    constructor(props: any) {
        super(props);

        this.state = { validate: { emailState: "" } }
    }

    validateEmail(e: React.ChangeEvent<HTMLInputElement>) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
        if (emailRex.test(e.target.value)) {
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
                <Form className="form">
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
                                onChange={(e) => this.validateEmail(e)}
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
                            />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </Form>
            </div>
        )

    }
}