import React, { Component } from 'react';
import { Switch, Route, withRouter, RouteProps, Redirect } from 'react-router-dom';
import Manage from "./components/views/manage";
import Home from "./components/views/home";
import Audio from "./components/views/audio";
import Forms from './components/views/forms';
import Login from './components/views/login';
import AppNavbar from './components/Nav';
import EventListeners from './events/EventListeners/EventListener';
import { inject, observer } from 'mobx-react';
import { AuthStore } from './stores/authStore';
import ForgotPassword from './components/views/login/forgotPassword';
import { Sidebar } from './components/Nav/sidbar';
import { IPageViewStore } from './stores/pageViewStore';



const App = () => {
    const AppNav = withRouter(AppNavbar);
    EventListeners();
    return (
        <div className="app">
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute path="/" component={AppNav} />
            </Switch>


            <Switch>
                <PrivateRoute path="/" component={MainApp} />
            </Switch>
        </div>
    );
}

@inject("pageViewStore")
@observer
class MainApp extends Component<{ pageViewStore: IPageViewStore | null }>{

    render() {
        return (
            <>
                <div className="main-container">
                    <Sidebar isSmall={false} isHidden={this.props.pageViewStore!.sideBar.isHidden} />
                    <div className="app-body">
                        <Switch>
                            <PrivateRoute exact path="/" component={Home} />
                            <PrivateRoute exact path="/audio" component={Audio} />
                            <PrivateRoute path="/forms" component={Forms} />
                            <PrivateRoute path="/manage" component={Manage} />
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}


@inject("authStore")
@observer
class PrivateRoute extends Component<RouteProps & { authStore?: AuthStore }>{


    // function PrivateRoute({ component, authStore, ...data }: RouteProps & { authStore?: AuthStore }) {

    render() {
        const { component, authStore, ...data } = this.props;

        if (authStore!.isAuthenticated)
            return (<Route {...data} component={component} />)

        return (
            <Route
                {...data}
                render={props =>
                    <Redirect
                        to={{
                            pathname: `/login`,
                            search: `?returnUrl=${encodeURIComponent(props.location.pathname)}`,
                            state: { from: props.location }
                        }}
                    />
                }
            />
        );
    }
}


export default App;