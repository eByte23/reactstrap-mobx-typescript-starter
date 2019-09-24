import * as React from "react";
import { Component } from "react";
import { RouteComponentProps } from "react-router";
import { Navbar, Container, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { observable, action } from "mobx";
import { NavLink as RouteLink } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { IPageViewStore } from "../../stores/pageViewStore";

interface AppNavbarProps {
    pageViewStore: IPageViewStore | null
}


@inject("pageViewStore")
@observer
export default class AppNavbar extends Component<RouteComponentProps<any> & AppNavbarProps> {
    @observable isOpen: boolean = false;

    @action
    toggle() {
        this.isOpen = !this.isOpen;
    }

    toggleHideSidebar() {
        this.props.pageViewStore!.toggleHideSidebar();
    }

    render() {

        return (
            <header>
                <Navbar color="pesec-light-green" dark expand="md">
                    <Container fluid>
                        {/* <NavbarBrand href="#"></NavbarBrand> */}
                        <RouteLink to="/" className="navbar-brand">Workbench App</RouteLink>
                        {/* <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </NavbarToggler> */}
                        <NavbarToggler style={{ display: "block" }} className="d-md-down-none mr-auto border-0 d-none d-sm-none d-md-block" onClick={() => { this.toggleHideSidebar() }}>
                            <span className="navbar-toggler-icon"></span>
                        </NavbarToggler>
                        <NavbarToggler onClick={() => this.toggle()} />
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
                                        <DropdownItem onClick={() => this.props.history.push("/manage")}>Manage</DropdownItem>
                                        <DropdownItem>Option 2</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Reset</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }

}

