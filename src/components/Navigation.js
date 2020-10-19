import React from 'react';
import logo from '../images/logo.png';
import {NavLink} from "react-router-dom";

const Navigation = () => (
    <nav className="Navigation">
        <div className="Navigation__logo">
            <NavLink exact to="/"><img src={logo} alt=" Todo App" /></NavLink>
        </div>
        <div className="Navigation__help">
            <NavLink activeClassName="active" exact to="/help">Help</NavLink>
        </div>
    </nav>
);

export default Navigation;