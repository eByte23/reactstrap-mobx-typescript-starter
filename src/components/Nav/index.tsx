import * as React from "react";
import { Component } from "react";
import {  RouteComponentProps } from "react-router";
import { Navbar, Container,  NavbarToggler, Collapse, Nav, NavItem,  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { observable, action } from "mobx";
import { NavLink as RouteLink } from "react-router-dom";

export default class AppNavbar extends Component<RouteComponentProps<any>> {
    @observable isOpen: boolean = false;

    constructor(props: RouteComponentProps<any>) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    @action
    toggle() {
        this.isOpen = !this.isOpen;
    }

    render() {

        return (
            <Navbar color="light" light expand="md">
                <Container>
                    <RouteLink to="/" className="navbar-brand">Workbench App</RouteLink>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <RouteLink to="/audio" activeClassName="active" className="nav-link">Audio</RouteLink>
                            </NavItem>
                            <NavItem>
                                <RouteLink to="/forms" activeClassName="active" className="nav-link">Forms</RouteLink>
                            </NavItem>
                            <NavItem>
                                {/* <NavLink href="">GitHub</NavLink> */}
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Options</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem onClick={()=> this.props.history.push("/manage")}>Manage</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }

}

