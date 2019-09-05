import * as React from "react";
import { Component } from "react";
import { Switch, Route } from "react-router";
import { Container, Row, Col, ListGroup } from "reactstrap";
import { Link, NavLink } from "react-router-dom";



export default class Manage extends Component<{}>{

    constructor(props: any) {
        super(props);
    }



    render() {
        return (
            <Container>
                <div>
                    <h2>Manage</h2>
                    <hr />
                </div>
                <Row>
                    <Col md={3}>
                        <ListGroup>
                            <NavLink
                                className="list-group-item list-group-item-action"
                                activeClassName="active"
                                to="/manage/thing1">
                            Other Feature
                            </NavLink>
                            <NavLink
                                className="list-group-item list-group-item-action"
                                activeClassName="active"
                                to="/manage/thing2">
                            Other Thing
                            </NavLink>
                        </ListGroup>
                    </Col>
                    <Col md={9}>
                        <Switch>
                            <Route path="/manage/thing2" component={Thing2} />
                        </Switch>
                    </Col>
                </Row>

            </Container>
        );
    }
}

const Thing1 = ()=>{

    return(
        <div>Thing2</div>
    )
};
const Thing2 = ()=>{

    return(
        <div>Thing2</div>
    )
};