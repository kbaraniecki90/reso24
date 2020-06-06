import React from "react";

// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Osrodek } from './pages/Osrodek';

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/osrodek" component={Osrodek}/>
        </Switch>
    );
}

export default Main;