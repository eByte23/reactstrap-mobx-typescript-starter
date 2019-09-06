import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Manage from "./views/manage";
import Home from "./views/home";
import Audio from "./views/audio";
import Forms from './views/forms';
import AppNavbar from './components/Nav';



const App = () => {
    const AppNav = withRouter(AppNavbar);
    return (
        <div>
            <AppNav />

            <Switch>

                <Route exact path="/" component={Home} />

                <Route exact path="/audio" component={Audio} />
                <Route path="/forms" component={Forms} />
                <Route path="/manage" component={Manage} />
            </Switch>
        </div>
    );
}

export default App;