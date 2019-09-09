import * as React from "react";
import { Component } from "react";
// import { Switch, Route } from "react-router";
import { Container, Jumbotron } from "reactstrap";
// import { Link, NavLink as RouteLink } from "react-router-dom";




export default class Home extends Component<{}>{


    render() {
        return (
            <Jumbotron fluid={false}>
                <Container>
                    <h3>Workbench App</h3>
                    
                    
                </Container>
            </Jumbotron>
        );
    }
}