import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';
import { Link, Switch, Route, NavLink } from 'react-router-dom';
import Manage from "./views/manage";
import Home from "./views/home";
import Audio from "./views/audio";

export default class Example extends React.Component<{}, { isOpen: boolean }> {
    constructor(props: {}, state: { isOpen: boolean }) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Container>
                        <NavbarBrand href="/">Workbench App</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink to="/audio" activeClassName="active" className="nav-link">Audio</NavLink>
                                </NavItem>
                                <NavItem>
                                    {/* <NavLink href="">GitHub</NavLink> */}
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Options</DropdownToggle>
                                    <DropdownMenu right>
                                        <Link className="dropdown-item" to={"/manage"}>Manage</Link>
                                        <DropdownItem>Option 2</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Reset</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/audio" component={Audio} />

                    <Route path="/manage" component={Manage} />
                </Switch>
            </div>
        );
    }
}