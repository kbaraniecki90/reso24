import React from "react";
import { NavLink } from 'react-router-dom';
// import { Router, NavLink } from 'react-router-dom';
// import { BrowserRouter as Router, NavLink} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav id="nav">
            <ul>
                <li><NavLink exact to="/">Podopieczni</NavLink></li>
                <li><NavLink to="/panel">Panel</NavLink></li>
                <li><NavLink to="/osrodek">Ośrodek</NavLink></li>
            </ul>
        </nav>
    );
}

export { Nav };